using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Domains.Helpers;
using Groove.AspNetCore.UnitOfWork;

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

		public PagedData<WaitingRequestModel> GetWaitingRequest(int pageNumber )
		{
			IEnumerable<WaitingRequestModel> WaitingRequestList = _repository.GetWaitingRequestAsync(pageNumber, pageSize);

			var totalPage = _repository.GetWaitingRequestQuantity();

			var pagedData = Pagination.PagedResult(WaitingRequestList, pageNumber, totalPage, pageSize);
			
			return pagedData;

		}


		public Task<string> ChangeStatus(int? id, string status)
        {
            return _repository.ChangeStatus(id, status);
        }

        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }
    }
}
