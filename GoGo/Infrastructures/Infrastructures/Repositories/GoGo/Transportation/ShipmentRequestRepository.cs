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
using Domains;
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
            var shipment = await this.dbSet
                                    .Include(p => p.Request)
                                    .Where(p => p.Request.Code == code).FirstAsync();
            shipment.Status = status;
            this.context.Update(shipment);
            this.context.SaveChanges();
            return shipment.Request.Code;
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
                         .Where(p => p.Status == "Waiting")
                         .Select(p => new RequestDetailModel
                         {
                             Code = p.Request.Code,
                             PackageQuantity = p.Request.PackageQuantity,
                             ReceiverName = p.Request.ReceiverName,
                             ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                             EstimateDate = p.RequestEstimateDate,
                             Status = p.Status,
                             Location = new LocationModel()
                             {
                                 Address = p.Request.Address,
                                 Latitude = p.Request.DeliveryLatitude,
                                 Longitude = p.Request.DeliveryLongitude
                             }
                         });
            return query.First();
        }

        public async Task<string> GetFirstRequestCode(string shipmentCode)
        {

            int total = this.dbSet.Include(p => p.Shipment)
                        .Where(p => p.Shipment.Code == shipmentCode)
                        .Count(p => p.Status == "Waiting");
            if (total == 0)
                return "";
            var query = this.dbSet
                        .Include(p => p.Shipment)
                        .Include(p => p.Request)
                        .Where(p => p.Shipment.Code == shipmentCode)
                        .Where(p => p.Status == "Waiting")
                        .Select(p => p.Request.Code);
            return await query.FirstAsync();
        }

        public async Task<RequestDetailModel> GetCurrentRequestAsync(string requestCode)
        {
            var query = this.dbSet
                         .Include(p => p.Shipment)
                         .Include(p => p.Request)
                         .Where(p => p.Request.Code == requestCode)
                         .Select(p => new RequestDetailModel
                         {
                             Code = p.Request.Code,
                             PackageQuantity = p.Request.PackageQuantity,
                             ReceiverName = p.Request.ReceiverName,
                             ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                             EstimateDate = p.RequestEstimateDate,
                             Status = p.Status,
                             Location = new LocationModel()
                             {
                                 Address = p.Request.Address,
                                 Latitude = p.Request.DeliveryLatitude,
                                 Longitude = p.Request.DeliveryLongitude
                             }
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
                               Status = p.Request.Status,
                               Location = new LocationModel()
                               {
                                   Address = p.Request.Address,
                                   Latitude = p.Request.DeliveryLatitude,
                                   Longitude = p.Request.DeliveryLongitude
                               }
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

        public async Task<IEnumerable<RequestDetailModel>> ChangeOrder(string shipmentCode, LocationModel[] newOrder)
        {
            List<RequestDetailModel> oldOrder = new List<RequestDetailModel>();
            var query = this.dbSet
                         .Include(p => p.Shipment)
                         .Include(p => p.Request)
                         .Where(p => p.Shipment.Code == shipmentCode)
                         .Select(p => new RequestDetailModel
                         {
                             Code = p.Request.Code,
                             PackageQuantity = p.Request.PackageQuantity,
                             ReceiverName = p.Request.ReceiverName,
                             ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                             EstimateDate = p.RequestEstimateDate,
                             Status = p.Request.Status,
                             Location = new LocationModel()
                             {
                                 Address = p.Request.Address,
                                 Latitude = p.Request.DeliveryLatitude,
                                 Longitude = p.Request.DeliveryLongitude
                             }
                         });
            oldOrder = await query.ToListAsync();
            for (int i = 0; i < newOrder.Length; i++)
            {
                oldOrder.Where(p => Helper.sub(p.Location.Latitude,newOrder[i].Latitude) > 0.0001);
            }
            return oldOrder.ToList();
        }

       
      

    }
}
