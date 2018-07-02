using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.Common.Identity;
using Groove.AspNetCore.UnitOfWork;
using Kendo.Mvc.UI;

namespace Domains.GoGo.Services
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public RequestService(IMapper mapper, IUnitOfWork uow, IRequestRepository repository)
        {
            _uow = uow;
            _repository = repository;
            _mapper = mapper;
        }

        public Task<IEnumerable<WaitingRequestModel>> GetWaitingRequest()
        {
            return _repository.GetWaitingRequestAsync();
        }

        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }

        public async Task<int> CreateCustomerRequest(RequestModel model, int userId)
        {
            var entity = this._mapper.Map<Request>(model);

            entity.Status = "Inactive";
            entity.CreatedDate = DateTime.Now;
            entity.Code = Helper.GenerateCode(DateTime.Now, 1);
            entity.IssuerId = 77; //take from claim
            entity.CustomerId = 77;
            entity.WareHouse = null;

            _repository.Create(entity);
            await _uow.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<int> UpdateCustomerRequest(RequestModel model, int userId)
        {
            var entity = this._mapper.Map<Request>(model);
            _repository.Update(entity);
            //entity.WareHouse = null;
            await _uow.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<RequestModel> FindCustomerRequestAsync(int requestId, int userId)
        {
            return await _repository.FindCustomerRequestAsync(requestId, userId);
        }

        public DataSourceResult GetCustomerRequests(DataSourceRequest request, int userId)
        {
            return _repository.GetCustomerRequestsAsync(request, userId);
        }

        public Task<string> ChangeStatus(string code, string status)
        {
            return this._repository.ChangeStatusAsync(code, status);
        }
    }
}
