using AutoMapper;
using Domains.Core;
using Domains.GoGo.Models.Fleet_management;
using Domains.GoGo.Repositories.Fleet_management;
using Domains.Identity.Entities;
using Domains.Identity.Repositories;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repositories.GoGo.Fleet_management
{
    public class DriverRepository : GenericRepository<User, long>, IDriverRepository
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly ApplicationDbContext _dbContext;
        public DriverRepository(UserManager<User> userManager, ApplicationDbContext dbContext, IMapper mapper)
            : base(dbContext)
        {
            _userManager = userManager;
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<DriverModel> GetDriverDetail(string id)
        {
             var driverInDb = await _userManager.FindByIdAsync(id);

            _mapper.Map<DriverModel>(driverInDb);

            return _mapper.Map<DriverModel>(driverInDb);
        }

        public async Task<IEnumerable<DataSourceValue<long>>> GetDataSource(string userName)
        { 
            return await this.dbSet.Where(p => p.UserName.Contains(userName)).Select(p => new DataSourceValue<long>
            {
                DisplayName = p.UserName,
                Value = p.Id
            }).ToListAsync();
        }
    }
}
