using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;

namespace Domains.GoGo.Services
{
    public class RequestServicec : IRequestService
    {
        private readonly IRequestRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public RequestServicec(IMapper mapper, IUnitOfWork uow, IRequestRepository repository)
        {
            _uow = uow;
            _repository = repository;
            _mapper = mapper;
        }

        public Task<IEnumerable<Request>> GetWaitingRequest()
        {
            return _repository.GetWaitingRequestAsync();
        }
    }
}
