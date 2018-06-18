using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class ShipmentRepository : GenericRepository<Shipment, int>, IShipmentRepository
	{
		private readonly IMapper _mapper;

		public ShipmentRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
		{
			_mapper = mapper;
		}

		public void CreateShipment(CreateShipmentModel model)
		{
			var newShipment = new Shipment();

			Mapper.Map<Shipment, CreateShipmentModel>(newShipment, model);

			dbSet.Add(newShipment);
		}
	}
}
