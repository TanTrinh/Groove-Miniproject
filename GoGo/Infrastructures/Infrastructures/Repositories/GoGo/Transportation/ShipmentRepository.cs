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
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

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
                            RequestQuality = p.RequestQuantity,
                            Status = p.Status
                        });
            return await query.ToListAsync();
        }
        public async Task<int> ChangeStatus(string code, string status)
        {
            var shipment = await this.dbSet.Where(p => p.Code == code).FirstAsync();
            shipment.Status = status;
            this.context.Update(shipment);
            return await this.context.SaveChangesAsync();
        }

		public DataSourceResult GetAllAsync(DataSourceRequest request)
		{
			return this.dbSet.ToDataSourceResult(request);
		}
	}
}
