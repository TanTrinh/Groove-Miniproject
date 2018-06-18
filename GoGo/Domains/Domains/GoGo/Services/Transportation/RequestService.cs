using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;


namespace Domains.GoGo.Services.Transportation
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;


        public RequestService(IMapper mapper, IRequestRepository repository, IUnitOfWork uow)
        {
            _mapper = mapper;
            _repository = repository;
            _uow = uow;
        }
        public Task<RequestDetailModel> GetRequestDetails(int? id)
        {
            return _repository.GetRequestDetailAsync(id);
        }


    }
}
