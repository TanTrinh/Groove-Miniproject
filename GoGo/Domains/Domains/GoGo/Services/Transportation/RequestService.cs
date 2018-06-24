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
        public Task<string> ChangeStatus(int? id, string status)
        {
            return _repository.ChangeStatus(id, status);
        }

        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }

        public async Task<int> CreateCustomerRequest(RequestModel model, UserIdentity<long> issuer)
        {
            var entity = this._mapper.Map<Request>(model);

            entity.Status = "Pending";
            entity.CreatedDate = DateTime.Now;
            entity.Code = Helper.GenerateCode(DateTime.Now, 1);
            entity.IssuerId = 77; //take from claim
            entity.CustomerId = 77;

            _repository.Create(entity);
            await _uow.SaveChangesAsync();
            return entity.Id;
        }

        public async Task<int> UpdateCustomerRequest(RequestModel model, UserIdentity<long> issuer)
        {
            var entity = this._mapper.Map<Request>(model);
            _repository.Update(entity);
            await _uow.SaveChangesAsync();
            return entity.Id;
        }

        public RequestModel FindCustomerRequest(int id)
        {
            var entity = _repository.GetEntityById(id);
            return this._mapper.Map<RequestModel>(entity);
        }
    }
}
