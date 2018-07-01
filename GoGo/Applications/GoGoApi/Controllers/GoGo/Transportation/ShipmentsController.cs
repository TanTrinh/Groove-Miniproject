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


        [Route("updateStatus")]
        [HttpPut]
        public async Task<IActionResult> ChangeShipmentStatus(string code, string status)
        {
            return Ok(await _Shipmentservice.ChangeStatus(code, status));
        }

        [Route("datasource")]
		[HttpGet]
		public IActionResult GetShipments([DataSourceRequest]DataSourceRequest request)
		{

			return Ok(_Shipmentservice.GetAllAsync(request));
		}

		[Route("Detail")]
		[HttpGet]
		public  IActionResult GetShipmentDetail(string Code)
		{	
			return Ok( _Shipmentservice.GetShipmentByCode(Code));
		}

		[Route("update")]
		[HttpPut]
		public IActionResult UpdateShipment(CreateShipmentModel model)
		{
            _Shipmentservice.UpdateShipment(model);

            return Ok();
		}
	}
}
