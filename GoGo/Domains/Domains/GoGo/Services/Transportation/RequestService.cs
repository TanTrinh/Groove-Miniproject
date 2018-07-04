using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Entities.Fleet;
using Domains.GoGo.Models.Fleet_management;
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
        private readonly IVehicleFeatureRequestRepository _vehicleFeatureRequestRepository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public RequestService(IMapper mapper, IUnitOfWork uow, IRequestRepository repository, IVehicleFeatureRequestRepository vehicleFeatureRequestRepository)
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

        public async Task<int> CreateCustomerRequest(RequestModel model, long userId)
        {
            using (var transactionScope = _uow.BeginTransaction())
            {
                // Step 1: Add Request
                // Save to Request Table
                var entity = this._mapper.Map<Request>(model);

                entity.Status = "Inactive";
                entity.CreatedDate = DateTime.Now;
                entity.Code = Helper.GenerateCode(DateTime.Now, 1);
                entity.IssuerId = userId; //take from claim
                entity.CustomerId = userId;
                entity.WareHouse = null;

                _repository.Create(entity);
                await _uow.SaveChangesAsync();

                // Step 2: Add request details
                // Save to FeatureOfVehicle
                var featureEnity = new VehicleFeatureRequest()
                {
                    RequestId = entity.Id,
                    VehicleFeatureId = model.VehicleFeature.Value
                };

                _vehicleFeatureRequestRepository.Create(featureEnity);

                await _uow.SaveChangesAsync();

                transactionScope.Commit();
                return entity.Id;
            }
        }

        public async Task<int> UpdateCustomerRequest(RequestModel model, long userId)
        {
            var entity = _repository.GetEntityById(model.Id);

            _mapper.Map(model, entity);

            //var temp = await this.dbSet.Where(p => p.Id == model.Id).Select(p => new Request
            //{
            //    IssuerId = p.IssuerId,
            //    CustomerId = p.CustomerId,
            //    CreatedDate = p.CreatedDate,
            //    Status = p.Status,
            //}).SingleOrDefaultAsync();

            //entity.IssuerId = temp.IssuerId;
            //entity.CustomerId = temp.CustomerId;
            //entity.CreatedDate = temp.CreatedDate;
            //entity.Status = temp.Status;
            //entity.WareHouse = null;

            _repository.Update(entity);
            //_repository(model, userId);
            await _uow.SaveChangesAsync();
            return model.Id;
        }

        public async Task<RequestModel> FindCustomerRequestAsync(int requestId, long userId)
        {
            return await _repository.FindCustomerRequestAsync(requestId, userId);
        }

        public DataSourceResult GetCustomerRequests(DataSourceRequest request, long userId)
        {
            return _repository.GetCustomerRequestsAsync(request, userId);
        }

        public Task<string> ChangeStatus(string code, string status)
        {
            return this._repository.ChangeStatusAsync(code, status);
        }
    }
}
