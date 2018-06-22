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

namespace Infrastructures.Repositories.GoGo
{
    public class WarehouseRepository : GenericRepository<WareHouse, int>, IWarehouseRepository
    {
        private readonly IMapper _mapper;

        public WarehouseRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }
        public async Task<IEnumerable<WarehouseOfCustomerModel>> WarehouseOfCustomerModelAsync(int id)
        {
            return await this.dbSet.Where(p => p.OwnerId == id).MapQueryTo<WarehouseOfCustomerModel>(_mapper).ToListAsync();
        }
    }
}
