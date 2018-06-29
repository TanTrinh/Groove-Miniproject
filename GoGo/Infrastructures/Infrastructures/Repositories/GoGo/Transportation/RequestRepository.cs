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

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, ApplicationDbContext uoWContext) : base(uoWContext)
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
        public async Task<RequestModel> FindCustomerRequestAsync(int id)
        {
            //return await this.dbSet.Where(p => p.Id == id).Include(p => p.WareHouse).MapQueryTo<RequestModel>(_mapper).FirstAsync();
            return await this.dbSet
                                 .Include(p => p.WareHouse)
                                 .Where(p => p.Id == id)
                                  .Select(p => new RequestModel
                                  {
                                      WareHouse = new DataSourceValue<int>()
                                      {
                                          Value = p.WareHouseId,
                                          DisplayName = p.WareHouse.NameWarehouse
                                      },
                                      Id = p.Id,
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


        public Task<string> ChangeStatus(int? id, string status)
        {
            throw new NotImplementedException();
        }
    }
}
