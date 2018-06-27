using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using AutoMapper;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories;
using Domains.GoGo;
using Domains.GoGo.Models;
using Domains.Core;

namespace Infrastructures.Repositories.GoGo
{
    public class WarehouseRepository : GenericRepository<WareHouse, int>, IWarehouseRepository
    {
        private readonly IMapper _mapper;

        public WarehouseRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }
        public async Task<IEnumerable<DataSourceValue<int>>> WarehouseOfCustomerModelAsync(int id)
        {
            return await this.dbSet.Where(p => p.OwnerId == id).MapQueryTo<DataSourceValue<int>>(_mapper).ToListAsync();
        }

        public async Task<IEnumerable<DataSourceValue<int>>> GetOnFilter(string displayName)
        {
            return await this.dbSet.Where(p => p.NameWarehouse.Contains(displayName) && p.OwnerId == 77 )
                .MapQueryTo<DataSourceValue<int>>(_mapper).ToListAsync(); //77 is get on claim
        }
    }
}
