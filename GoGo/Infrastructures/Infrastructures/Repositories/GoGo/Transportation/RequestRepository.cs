using Domains.GoGo.Repositories;
using Domains.GoGo.Entities;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper mapper;
        public RequestRepository(
            IMapper mapper,
            IUnitOfWorkContext dbContext)
            : base(dbContext)
        {
            this.mapper = mapper;
        }
    }
}
