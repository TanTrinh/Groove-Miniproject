using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;

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
		public async Task<IActionResult> CreateShipment(FormShipmentModel model)
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
			var userIdentity = GetCurrentIdentity<long>();
			var roles = this.User.Claims.Where(p => p.Type == ClaimTypes.Role).ToList();


			if (roles.Any<Claim>())
			{
				return Ok(_Shipmentservice.GetAllAsync(request, null));
			}
			else
			{
				return  Ok(_Shipmentservice.GetAllAsync(request, userIdentity.Id.ToString()));
			}

		}

		[Route("Detail")]
		[HttpGet]
		public  IActionResult GetShipmentDetail(string Code)
		{	
			return Ok( _Shipmentservice.GetShipmentByCode(Code));
		}

		[Route("update")]
		[HttpPut]
		public async Task<IActionResult> UpdateShipment(FormShipmentModel model)
		{
            await _Shipmentservice.UpdateShipmentAsync(model);

            return Ok();
		}
	}
}
