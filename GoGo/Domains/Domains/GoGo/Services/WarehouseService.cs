using AutoMapper;
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

        public Task<IEnumerable<WarehouseOfCustomerModel>> GetWarehousesOfCustomer(int id)
        {
            return _repository.WarehouseOfCustomerModelAsync(id);
        }
    }
}
