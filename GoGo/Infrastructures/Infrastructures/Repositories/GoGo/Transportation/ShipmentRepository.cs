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
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class ShipmentRepository : GenericRepository<Shipment, int>, IShipmentRepository
	{
		private readonly IMapper _mapper;

		public ShipmentRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
		{
			_mapper = mapper;
		}
        public async Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id)
        {
            var query = this.dbSet
                        .Include(p => p.Vehicle)
                        .Where(p => p.DriverId == id)
                        .Select(p => new ShipmentAssignedModel
                        {
                            Code = p.Code,
                            LicensePlate = p.Vehicle.LicensePlate,
                            EndDate = p.EndDate,
                            StartDate = p.StartDate,
                            VehicleID = p.VehicleId,
                            RequestQuality = p.RequestQuantity
                        });
            return await query.ToListAsync();
        }
    }
}
