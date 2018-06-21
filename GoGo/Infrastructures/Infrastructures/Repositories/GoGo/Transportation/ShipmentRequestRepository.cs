using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
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

        public async Task<LocationModel> GetPositionPickingAsync(string code)
        {
            var query = this.dbSet
                           .Include(p => p.Shipment)
                           .Include(p => p.Request)
                           .Where(p => p.Shipment.Code == code)
                           .Select(p => new LocationModel
                           {
                               Address = p.Request.WareHouse.Address,
                               Latitude = p.Request.WareHouse.Latitude,
                               Longitude = p.Request.WareHouse.Longitude
                           });
            return await query.FirstAsync();
        }

        public int GetTotalRequest(string code)
        {
            var sum = this.dbSet
                        .Include(p => p.Shipment)
                        .Include(p => p.Request)
                        .Where(p => p.Shipment.Code == code)
                        .Sum(p => p.Request.PackageQuantity);
            return sum;
        }
    }
}
