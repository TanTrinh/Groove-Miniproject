using AutoMapper;
using Domains.Core;
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

		public ShipmentRequestRepository(IMapper mapper, ApplicationDbContext uoWContext) : base(uoWContext)
		{
			_mapper = mapper;
		}

		public void UpdateShipmentRequest(List<int> requestIdList, int shipmentId)
		{
			var shipmentRequestsInDb = this.dbSet.Where(p => ((p.ShipmentId == shipmentId) && (p.Status != ShipmentRequestStatus.INACTIVE))).ToList();
			var shipmentRequestIdListInDb = this.dbSet.Where(p => ((p.ShipmentId == shipmentId) && (p.Status != ShipmentRequestStatus.INACTIVE))).Select(p => p.RequestId).ToList();

			for (int i = 0; i < shipmentRequestsInDb.Count; i++)
			{
				var index = requestIdList.IndexOf(shipmentRequestsInDb[i].RequestId);

				if (index != -1)
				{
					shipmentRequestsInDb[i].RequestOrder = index + 1;
					this.dbSet.Update(shipmentRequestsInDb[i]);
				}
				else
				{
					shipmentRequestsInDb[i].Status = ShipmentRequestStatus.INACTIVE;
					shipmentRequestsInDb[i].Note = ShipmentRequestStatus.UPDATED; 
					this.dbSet.Update(shipmentRequestsInDb[i]);
				}
			}

			for (int i = 0; i < requestIdList.Count; i++)
			{
				if (shipmentRequestIdListInDb.IndexOf(requestIdList[0]) == -1)
				{
					var entity = new ShipmentRequest();
					entity.ShipmentId = shipmentId;
					entity.RequestId = requestIdList[0];
					entity.RequestOrder = i + 1;
					entity.Status = ShipmentRequestStatus.PENDING;
					entity.Note = ShipmentRequestStatus.CREATED;
					this.dbSet.Add(entity);
                    
                }
			}

             this.context.SaveChanges();
        }

	}

}
