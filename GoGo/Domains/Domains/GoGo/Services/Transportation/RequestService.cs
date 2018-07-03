using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.Core;
using Domains.GoGo.Entities;
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

		//V
        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }

		public async Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value, int warehouseId)
		{
			return await _repository.GetDataSource(value, warehouseId);
		}

        public Task<RequestsModel> GetRequestByCode(string code)
        {
            return _repository.GetRequestByCode(code);
        }

		public IEnumerable<RequestsModel> GetRequestsByShipmentId(int shipmentId)
		{
			return _repository.GetRequestsByShipmentId(shipmentId);
		}

		public IEnumerable<int> GetRequestIdList(int shipmentId)
		{
			return _repository.GetRequestIdList(shipmentId);
		}

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

			_repository.Create(entity);
			await _uow.SaveChangesAsync();
			return entity.Id;
		}

		public async Task<int> UpdateCustomerRequest(RequestModel model, UserIdentity<long> issuer)
		{
			var entity = this._mapper.Map<Request>(model);
			_repository.Update(entity);
			//entity.WareHouse = null;
			await _uow.SaveChangesAsync();
			return entity.Id;
		}

		public async Task<RequestModel> FindCustomerRequestAsync(int id)
		{
			//var entity = _repository.GetEntityById(id);
			//var entity = _repository.FindCustomerRequestAsync(id);
			return await _repository.FindCustomerRequestAsync(id);
		}

	}    
}
