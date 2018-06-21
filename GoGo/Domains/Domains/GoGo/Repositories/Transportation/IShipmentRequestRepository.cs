using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IShipmentRequestRepository : IGenericRepository<ShipmentRequest, int>
    {
        Task<LocationModel> GetPositionPickingAsync(string code);
        int GetTotalRequest(string code);
        Task<RequestDetailModel> GetRequestDetailModelsAsync(string shipmentCode,string requestCode);
        Task<IEnumerable<RequestDetailModel>> GetRequestListAsync(string code);
    }
}
