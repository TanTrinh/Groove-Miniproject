using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    // TODO: change Requests to `Request` because Pluralizing is hard to manage and It's useless here
    [Route("api/Requests")]
    [ApiController]
    public class RequestsController : BaseController
	{
		private readonly IRequestService _service;
		private readonly IShipmentService _Shipmentservice;
		private readonly IShipmentRequestService _shipmentRequestService;

		public RequestsController(IRequestService service, IShipmentService Shipmentservice, IShipmentRequestService shipmentRequestService)
		{
			_service = service;
			_Shipmentservice = Shipmentservice;
			_shipmentRequestService = shipmentRequestService;
		}

		[Route("filter/{warehouseId}/{value}")]
		[Authorize(Roles = "Coordinator")]
		[HttpGet]
		public async Task<IActionResult> GetDataSource(int warehouseId, string value)
		{
	
			return Ok(await _service.GetDataSource(value, warehouseId));
		}

        [Route("{id}")]
		[Authorize(Roles = "Coordinator")]
		[HttpGet]
        public async Task<IActionResult> GetRequestDetailByIdAsync(string id)
        {

            return Ok(await _service.GetRequestByIdAsync(id));
        }

    }
}