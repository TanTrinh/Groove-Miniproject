using AutoMapper;
using Domains.Core;
using Domains.GoGo.Models;
using Domains.GoGo.Repositories;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Fleet_management
{
    public class WarehouseService : IWarehouseService
    {
		private readonly IWarehouseRepository _warehouseRepository;
		private readonly IUnitOfWork _uow;
		private readonly IMapper _mapper;

		public WarehouseService(IMapper mapper, IUnitOfWork uow, IWarehouseRepository repository)
		{
			_uow = uow;
			_warehouseRepository = repository;
			_mapper = mapper;
		}

		public Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value)
		{
			return _warehouseRepository.GetDataSource(value);
		}

		public Task<WarehouseModel> GetWarehouseDetailAsync(int id)
		{
			return _warehouseRepository.GetWarehouseDetailAsync(id);
		}
	}
}
