using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Kendo.Mvc.Extensions;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class ShipmentRequestRepository : GenericRepository<ShipmentRequest, int>, IShipmentRequestRepository
	{
		private readonly IMapper _mapper;

		public ShipmentRequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
		{
			_mapper = mapper;
		}

		public void UpdateShipmentReuqest(List<int> requestIdList, int shipmentId)
		{
			var shipmentRequestsInDb = this.dbSet.Where(p => ((p.ShipmentId == shipmentId) && (p.Status == "Waiting"))).ToList();
			var shipmentRequestsIdList = this.dbSet.Where(p => ((p.ShipmentId == shipmentId) && (p.Status == "Waiting"))).Select(p => p.RequestId).ToList();

			for (int i = 0; i < shipmentRequestsInDb.Count; i++)
			{
				var index = requestIdList.IndexOf(shipmentRequestsInDb[i].RequestId);

				if (index != -1)
				{
					shipmentRequestsInDb[i].RequestOrder = index+1;
					this.dbSet.Update(shipmentRequestsInDb[i]);
				}
				else
				{
					shipmentRequestsInDb[i].Status = "InActive";
					shipmentRequestsInDb[i].Note = "Updated";
					this.dbSet.Update(shipmentRequestsInDb[i]);
				}
			}

			for (int i = 0; i < requestIdList.Count; i++)
			{
				if (shipmentRequestsIdList.IndexOf(requestIdList[0]) == -1)
				{
					var entity = new ShipmentRequest();
					entity.ShipmentId = shipmentId;
					entity.RequestId = requestIdList[0];
					entity.RequestOrder = i+1;
					entity.Status = "Waiting";
					entity.Note = "Created";
					this.dbSet.Add(entity);
				}
			}
		}

	}

	internal class requestOrder
	{
		public int RequestId { get; set; }
		public int RequestOrder { get; set; }
	}
}
