using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.Core;
using Domains.GoGo.Entities;
using Domains.GoGo.Entities.Fleet;
using Domains.GoGo.Models.Fleet_management;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Domains.Helpers;
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

		public RequestService(IMapper mapper, IUnitOfWork uow, IRequestRepository repository)
        {
            _uow = uow;
            _repository = repository;
            _mapper = mapper;
        }


		public DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request)
		{
			return _repository.GetAllAsync(request);
		}


		public Task<string> ChangeStatus(int? id, string status)
        {
            return _repository.ChangeStatus(id, status);
        }

        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }


		//V
        public Task<RequestsModel> GetRequestByIdAsync(string id)
        {
            return _repository.GetRequestByIdAsync(id);
        }

		public async Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value, int warehouseId)
		{
			return await _repository.GetDataSource(value, warehouseId);
		}

		public IEnumerable<RequestsModel> GetRequestsByShipmentId(int shipmentId)
		{
			return _repository.GetRequestsByShipmentId(shipmentId);
		}

		public IEnumerable<int> GetRequestIdList(int shipmentId)
		{
			return _repository.GetRequestIdList(shipmentId);
		}


		//Đ
		public async Task<int> CreateCustomerRequest(RequestModel model, UserIdentity<long> issuer)
		{
			var entity = this._mapper.Map<Request>(model);

			// TODO: strings should be managed in constant class or enum
			// Create RequestStatus constant class
			// Then use 
			// entity.Status = RequestStatus.InActive;

			entity.Status = "InActive";
			entity.CreatedDate = DateTime.Now;
			entity.Code = Helper.GenerateCode(DateTime.Now, 1);
			entity.IssuerId = 77; //take from claim
			entity.CustomerId = 77;
			entity.WareHouse = null;
            // Step 2: Add request details
            // Save to FeatureOfVehicle
            //var featureEnity = new VehicleFeatureRequest()
            //{
            //    RequestId = entity.Id,
            //    VehicleFeatureId = model.VehicleFeature.Value
            //};

            //_vehicleFeatureRequestRepository.Create(featureEnity);

            //await _uow.SaveChangesAsync();
			_repository.Create(entity);
			await _uow.SaveChangesAsync();
			return entity.Id;
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
            entity.WareHouse = null;

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

		public async Task<RequestModel> FindCustomerRequestAsync(int id)
		{
			//var entity = _repository.GetEntityById(id);
			//var entity = _repository.FindCustomerRequestAsync(id);
			return await _repository.FindCustomerRequestAsync(id);
		}
        public Task<LocationModel> GetPositionWarehouse(string code)
        {
            return _repository.GetPositionWarehouseAsync(code);
        }
        public async Task<int> GetRequestID(string code)
        {
            return await _repository.GetRequestID(code);
        }
        public Task<string> ChangeStatus(string code, string status)
        {
            return this._repository.ChangeStatusAsync(code, status);
        }
    }    
}
