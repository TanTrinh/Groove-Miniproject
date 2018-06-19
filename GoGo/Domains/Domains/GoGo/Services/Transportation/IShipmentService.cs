using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.Common.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
	public interface IShipmentService
    {
		Task<int> CreateShipmentAsync(CreateShipmentModel model);
    }
}
