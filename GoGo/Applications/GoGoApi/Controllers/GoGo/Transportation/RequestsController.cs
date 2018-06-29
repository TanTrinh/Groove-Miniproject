using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
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

		[Route("RequestList")]
		[HttpGet]
		public IActionResult GetAllAsync([DataSourceRequest]DataSourceRequest request)
		{
			
			return Ok(_service.GetAllAsync(request));
		}

		[Route("datasource")]
		[HttpGet]
		public async Task<IActionResult> GetDataSource(string value, int warehouseId)
		{
	
			return Ok(await _service.GetDataSource(value, warehouseId));
		}

        [Route("GetDetail")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string code)
        {

            return Ok(await _service.GetRequestByCode(code));
        }

    }
}