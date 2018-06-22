using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/Shipments")]
    [ApiController]
    public class ShipmentsController : BaseController
	{
		private readonly IRequestService _service;
		private readonly IShipmentService _Shipmentservice;
		private readonly IShipmentRequestService _shipmentRequestService;

		public ShipmentsController(IRequestService service, IShipmentService Shipmentservice, IShipmentRequestService shipmentRequestService)
		{
			_service = service;
			_Shipmentservice = Shipmentservice;
			_shipmentRequestService = shipmentRequestService;
		}

		[Route("Create")]
		[HttpPost]
		public async Task<IActionResult> CreateShipment(CreateShipmentModel model)
		{
			//var userIdentity = GetCurrentIdentity<long>();

			var shipmentId = await _Shipmentservice.CreateShipmentAsync(model);
			await _shipmentRequestService.CreateShipmentRequestAsync(model.RequestIdList, shipmentId);

			return Ok();
		}

		[Route("ShipmentList")]
		[HttpGet]
		public IActionResult GetAllAsync([DataSourceRequest]DataSourceRequest request)
		{

			return Ok(_Shipmentservice.GetAllAsync(request));
		}
	}
}