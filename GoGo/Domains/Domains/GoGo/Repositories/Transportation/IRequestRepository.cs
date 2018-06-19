using Domains.GoGo.Entities;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IRequestRepository : IGenericRepository<Request, int>
    {
    }
}
