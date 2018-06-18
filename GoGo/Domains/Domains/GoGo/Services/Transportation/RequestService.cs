using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
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
    }
}
