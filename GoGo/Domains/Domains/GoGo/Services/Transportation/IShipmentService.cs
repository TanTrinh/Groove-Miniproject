using Domains.GoGo.Models;
using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.Common.Identity;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
	public interface IShipmentService
    {
		Task<int> CreateShipmentAsync(FormShipmentModel model);
		DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request);

		Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id);
        Task<int> ChangeStatus(string code, string status);

		ShipmentDetailModel GetShipmentByCode(string Code);
		Task UpdateShipmentAsync(FormShipmentModel model);

	
		Task<int> CreateShipmentAsync(CreateShipmentModel model);
        Task<string> ChangeStatus(string code, string status);
        Task<IEnumerable<ShipmentViewModel>> GetShipmentAssignedModel(long? id);
        Task<ShipmentViewModel> GetShipmentAsync(string code);
    }
}
