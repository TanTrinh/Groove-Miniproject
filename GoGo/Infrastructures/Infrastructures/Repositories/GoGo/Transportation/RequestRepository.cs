using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using AutoMapper;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo;
using Domains.Core;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

        public async Task<IEnumerable<WaitingRequestModel>> GetWaitingRequestAsync()
        {
            return await this.dbSet.Where(p => p.Status == "Wait").MapQueryTo<WaitingRequestModel>(_mapper).ToListAsync();
        }
        public async Task<RequestDetailModel> GetRequestDetailAsync(int? id)
        {
            return await this.dbSet.Where(p => p.Id == id).MapQueryTo<RequestDetailModel>(_mapper).FirstAsync();
        }
        public async Task<RequestModel> FindCustomerRequestAsync(int requestId, int userId)
        {
            
            return await this.dbSet
                                 .Include(p => p.WareHouse)
                                 .Where(p => p.Id == requestId && p.CustomerId == 77)
                                  .Select(p => new RequestModel
                                  {
                                      WareHouse = new DataSourceValue<int>()
                                      {
                                          Value = p.WareHouseId,
                                          DisplayName = p.WareHouse.NameWarehouse
                                      },
                                      Id = p.Id,
                                      Status = p.Status,
                                      ExpectedDate = p.ExpectedDate,
                                      Address = p.Address,
                                      DeliveryLatitude = p.DeliveryLatitude,
                                      DeliveryLongitude = p.DeliveryLongitude,
                                      Code = p.Code,
                                      PackageQuantity = p.PackageQuantity,
                                      ReceiverName = p.ReceiverName,
                                      ReceiverPhoneNumber = p.ReceiverPhoneNumber,
                                      CreatedDate = p.CreatedDate,
                                      PickingDate = p.PickingDate,
                                  }).SingleOrDefaultAsync();
        }


        public async Task<string> ChangeStatusAsync(string code, string status)
        {
            var entity = await this.dbSet.Where(p => p.Code == code).FirstAsync();
            entity.Status = status;
            this.context.Update(entity);
            await this.context.SaveChangesAsync();
            return entity.Status;
        }

        public DataSourceResult GetCustomerRequestsAsync(DataSourceRequest request, int userId)
        { // 77 get from claim
            
            return this.dbSet.Include(p => p.WareHouse).Where(p => p.CustomerId == 77).Select(p => new SummaryRequestModel
            {
                Id = p.Id,
                WareHouse = p.WareHouse.NameWarehouse,
                ExpectedDate = p.ExpectedDate,
                Address = p.Address,
                Status = p.Status,
                Code = p.Code,
                PickingDate = p.PickingDate,
            }).ToDataSourceResult(request);
        }
    }
}
