using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.Common.Identity;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
    class RequestService : IRequestService
    {
        private readonly IRequestRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public RequestService(IMapper mapper, IUnitOfWork uow, IRequestRepository repository)
        {
            this._uow = uow;
            this._repository = repository;
            this._mapper = mapper;
        }

        public async Task<int> CreateAsync(RequestModel model, UserIdentity<long> issuer)
        {
            var entity = this._mapper.Map<Request>(model);

            _repository.Create(entity);
            //_uow.GetRepository<IRequestRepository>().Create(entity);

            await _uow.SaveChangesAsync();
            return entity.Id;
        }
    }
}
