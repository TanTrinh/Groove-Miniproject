using AutoMapper;
using Domains.Core;
using Domains.GoGo.Models;
using Domains.GoGo.Repositories;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services
{
    class WarehouseService : IWarehouseService
    {
        private readonly IWarehouseRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public WarehouseService(IMapper mapper, IUnitOfWork uow, IWarehouseRepository repository)
        {
            _uow = uow;
            _repository = repository;
            _mapper = mapper;
        }

        public Task<IEnumerable<DataSourceValue<int>>> GetOnFilter(string displayName)
        {
            return _repository.GetOnFilter(displayName);
        }
    }
}
