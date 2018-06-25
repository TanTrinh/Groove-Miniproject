using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.Core;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Domains.Helpers;
using Groove.AspNetCore.UnitOfWork;
using Kendo.Mvc.UI;

namespace Domains.GoGo.Services
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

		private readonly int pageSize = 5;

		public RequestService(IMapper mapper, IUnitOfWork uow, IRequestRepository repository)
        {
            _uow = uow;
            _repository = repository;
            _mapper = mapper;
        }

		public PagedData<RequestModel> GetWaitingRequest(int pageNumber )
		{
			IEnumerable<RequestModel> WaitingRequestList = _repository.GetWaitingRequestAsync(pageNumber, pageSize);

			var totalPage = _repository.GetWaitingRequestQuantity();

			var pagedData = Pagination.PagedResult(WaitingRequestList, pageNumber, totalPage, pageSize);
			
			return pagedData;

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

		public async Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value)
		{
			return await _repository.GetDataSource(value);
		}
	}
}
