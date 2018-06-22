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

        public async Task<string> ChangeStatusRequestAsync(string code, string status)
        {
            try
            {
                var shipment = await this.dbSet
                                        .Include(p => p.Request)
                                        .Where(p => p.Request.Code == code).FirstAsync();
                shipment.Status = status;
                this.context.Update(shipment);
                this.context.SaveChanges();
                return shipment.Status;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
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

        public RequestDetailModel GetRequestDetailModel(string code)
        {
            var query = this.dbSet
                         .Include(p => p.Shipment)
                         .Include(p => p.Request)
                         .Where(p => p.Shipment.Code == code)
                         .Where(p=>p.Status=="Waiting")
                         .Select(p => new RequestDetailModel
                         {
                             Code = p.Request.Code,
                             PackageQuantity = p.Request.PackageQuantity,
                             ReceiverName = p.Request.ReceiverName,
                             ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                             EstimateDate = p.RequestEstimateDate,
                             Status = p.Status,
                             Address = p.Request.Address
                         });
            return query.First();
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
                               Status = p.Request.Status,
                               Address = p.Request.Address
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
