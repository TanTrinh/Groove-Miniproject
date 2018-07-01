using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
    public interface IShipmentRequestService
    {
		Task CreateShipmentRequestAsync(IEnumerable<int> requestIdList, int shipmentId);
		void UpdateShipmentRequest(List<int> requestIdList, int shipmentId);
	}
}
