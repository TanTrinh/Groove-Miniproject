using Domains.GoGo.Models.Transportation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
    public interface IRequestService
    {
        Task<RequestDetailModel> GetRequestDetails(int? id);
    }
}
