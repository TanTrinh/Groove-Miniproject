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

        public async Task<RequestDetailModel> GetRequestDetailModelsAsync(string shipmentCode, string requestCode)
        {
            var query = this.dbSet
                         .Include(p => p.Shipment)
                         .Include(p => p.Request)
                         .Where(p => p.Shipment.Code == shipmentCode)
                         .Where(p=>p.Request.Code==requestCode)
                         .Select(p => new RequestDetailModel
                         {
                             Code = p.Request.Code,
                             PackageQuantity = p.Request.PackageQuantity,
                             ReceiverName=p.Request.ReceiverName,
                             ReceiverPhoneNumber=p.Request.ReceiverPhoneNumber,
                             EstimateDate=p.RequestEstimateDate,
                             Status = p.Request.Status
                         });
            return await query.FirstAsync();
        }

        public async Task<IEnumerable<RequestDetailModel>> GetRequestListAsync(string code)
        {
            var query = this.dbSet
                           .Include(p => p.Shipment)
                           .Include(p => p.Request)
                           .Where(p => p.Shipment.Code == code)
                           .Select(p => new RequestDetailModel
                           {
                               Code = p.Request.Code,
                               PackageQuantity = p.Request.PackageQuantity,
                               ReceiverName = p.Request.ReceiverName,
                               ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                               EstimateDate = p.RequestEstimateDate,
                               Status=p.Request.Status
                           });
            return await query.ToListAsync();
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
