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

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

        public async Task<IEnumerable<WaitingRequestModel>> GetWaitingRequestAsync()
        {
            return await this.dbSet.Where(p => p.Status == "Wait").MapQueryTo<WaitingRequestModel>(_mapper).ToListAsync();
        }
    }
}
