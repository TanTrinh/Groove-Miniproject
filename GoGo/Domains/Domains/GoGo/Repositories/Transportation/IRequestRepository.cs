using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IRequestRepository
    {
        Task<IEnumerable<Request>> GetWaitingRequestAsync();
    }
}
