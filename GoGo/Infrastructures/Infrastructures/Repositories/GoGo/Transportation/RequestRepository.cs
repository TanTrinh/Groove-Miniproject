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

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, string>, IRequestRepository
    {
        private readonly IMapper mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            this.mapper = mapper;
        }

        public async Task<IEnumerable<Request>> GetWaitingRequestAsync()
        {
            return await this.dbSet.Where(p => p.Status == "Wait").MapQueryTo<Request>(mapper).ToListAsync();
        }
    }
}
