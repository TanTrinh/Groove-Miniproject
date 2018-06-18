using Domains.GoGo.Models.Transportation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
   public interface IRequestRepository
    {
        Task<RequestDetailModel> GetRequestDetailAsync(int? id);
    }
}
