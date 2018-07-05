using AutoMapper;
using Domains.Core;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Kendo.Mvc.Extensions;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domains;
using Domains.Helpers;

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
                               Address = Helper.ResizeAddress(p.Request.WareHouse.Address),
                               Latitude = p.Request.WareHouse.Latitude,
                               Longitude = p.Request.WareHouse.Longitude
                           });
            return await query.FirstAsync();
        }

        public RequestDetailModel GetRequestDetailModel(string code)
        {
            // var problemMsgDbSet = this.context.Set<ProblemMessage>();
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
                             //ProblemMessage = problemMsgDbSet.Where(msg => msg.RequestId == p.RequestId).OrderByDescending(msg => msg.Id).Select(msg => new ProblemMessage
                             //{
                             //    Message = msg.Message,
                             //    Id = msg.Id,
                             //    IsSolve = msg.IsSolve
                             //}).FirstOrDefault(),
                             IsProblem = p.IsProblem,
                             RequestOrder = p.RequestOrder,
                             Location = new LocationModel()
                             {
                                 Address = Helper.ResizeAddress(p.Request.Address),
                                 Latitude = p.Request.DeliveryLatitude,
                                 Longitude = p.Request.DeliveryLongitude
                             }
                         });
            return query.First();
        }

        public async Task<string> GetFirstRequestCode(string shipmentCode)
        {
            string status = "Waiting";
            int waitingRequest = 0;
            int unloadingRequest = 0;
            int shippingRequest = this.dbSet.Include(p => p.Shipment)
                   .Where(p => p.Shipment.Code == shipmentCode)
                   .Where(p => p.IsProblem == false)
                   .Count(p => p.Status == "Shipping");
            if (shippingRequest == 1)
            {
                status = "Shipping";
            }
            else
            {
                unloadingRequest = this.dbSet.Include(p => p.Shipment)
                .Where(p => p.Shipment.Code == shipmentCode)
                .Where(p => p.IsProblem == false)
                .Count(p => p.Status == "Unloading");
                if (unloadingRequest == 1)
                {
                    status = "Unloading";
                }
                else
                {
                    waitingRequest = this.dbSet.Include(p => p.Shipment)
                         .Where(p => p.Shipment.Code == shipmentCode)
                         .Where(p => p.IsProblem == false)
                         .Count(p => p.Status == "Waiting");
                    if (waitingRequest > 0)
                    {
                        status = "Waiting";
                    }
                }
            }
            if ((shippingRequest + unloadingRequest + waitingRequest) > 0)
            {
                var query = this.dbSet
                       .Include(p => p.Shipment)
                       .Include(p => p.Request)
                       .Where(p => p.Shipment.Code == shipmentCode)
                       .Where(p => p.IsProblem == false)
                       .Where(p => p.Status == status)
                       .Select(p => p.Request.Code);
                return await query.FirstOrDefaultAsync(); // TODO: need review from Duc
            }
            int total = this.dbSet.Include(p => p.Shipment)
                        .Where(p => p.Shipment.Code == shipmentCode)
                        .Where(p => p.IsProblem == false)
                        .Count(p => p.Status == "Completed");
            if (total == this.dbSet.Count(p => p.Shipment.Code == shipmentCode))
                return "";
            else
            {
                var pending = this.dbSet
                             .Include(p => p.Shipment)
                             .Include(p => p.Request)
                             .Where(p => p.Shipment.Code == shipmentCode)
                             .Where(p => p.IsProblem == true)
                             .Select(p => p.Request.Code);
                return await pending.FirstOrDefaultAsync(); // TODO: need review from Duc
			}

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
                             IsProblem = p.IsProblem,
                             Location = new LocationModel()
                             {
                                 Address = Helper.ResizeAddress(p.Request.Address),
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
                           .Where(p => p.Status != "Active" && p.Status != "InActive")
                           .OrderBy(p => p.RequestOrder)
                           .Select(p => new RequestDetailModel
                           {
                               Code = p.Request.Code,
                               PackageQuantity = p.Request.PackageQuantity,
                               ReceiverName = p.Request.ReceiverName,
                               ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
                               EstimateDate = p.RequestEstimateDate,
                               Status = p.Status,
                               IsProblem = p.IsProblem,
                               Location = new LocationModel()
                               {
                                   Address = Helper.ResizeAddress(p.Request.Address),
                                   Latitude = p.Request.DeliveryLatitude,
                                   Longitude = p.Request.DeliveryLongitude
                               },
                               RequestOrder = p.RequestOrder
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

        //public async Task<IEnumerable<RequestDetailModel>> ChangeOrder(string shipmentCode, LocationModel[] newOrder)
        //{
        //    List<RequestDetailModel> oldOrder = new List<RequestDetailModel>();
        //    var query = this.dbSet
        //                 .Include(p => p.Shipment)
        //                 .Include(p => p.Request)
        //                 .Where(p => p.Shipment.Code == shipmentCode)
        //                 .Select(p => new RequestDetailModel
        //                 {
        //                     Code = p.Request.Code,
        //                     PackageQuantity = p.Request.PackageQuantity,
        //                     ReceiverName = p.Request.ReceiverName,
        //                     ReceiverPhoneNumber = p.Request.ReceiverPhoneNumber,
        //                     EstimateDate = p.RequestEstimateDate,
        //                     Status = p.Request.Status,
        //                     IsProblem = p.IsProblem,
        //                     Location = new LocationModel()
        //                     {
        //                         Address = Helper.ResizeAddress(p.Request.Address),
        //                         Latitude = p.Request.DeliveryLatitude,
        //                         Longitude = p.Request.DeliveryLongitude
        //                     }
        //                 });
        //    oldOrder = await query.ToListAsync();
        //    for (int i = 0; i < newOrder.Length; i++)
        //    {
        //        oldOrder.Where(p => Helper.sub(p.Location.Latitude, newOrder[i].Latitude) > 0.0001);
        //    }
        //    return oldOrder.ToList();
        //}

        public async Task<string> Problem(string requestCode, bool status)
        {
            var request = await this.dbSet
                                            .Include(p => p.Request)
                                            .Where(p => p.Request.Code == requestCode)
                                            .FirstAsync();
            request.IsProblem = status;
            this.context.Update(request);
            await this.context.SaveChangesAsync();
            return request.Request.Code;
        }
    }
    internal class requestOrder
    {
        public int RequestId { get; set; }
        public int RequestOrder { get; set; }
    }
}
