using Domains.GoGo.Entities;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
    public interface IShipmentRequestRepository : IGenericRepository<ShipmentRequest, int>
    {
		void UpdateShipmentRequest(List<int> requestIdList, int shipmentId);
	}
}
