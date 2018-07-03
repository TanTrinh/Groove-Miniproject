using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Domains.Core;
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
	// TODO: change `Shipments` to `Shipment` because Pluralizing is hard to manage and It's useless here
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
		// TODO: change route to POST ""
		// Done
		[Route("")]
		[HttpPost]
		public async Task<IActionResult> CreateShipment(FormShipmentModel model)
		{
			var shipmentId = await _Shipmentservice.CreateShipmentAsync(model);
			await _shipmentRequestService.CreateShipmentRequestAsync(model.RequestIdList, shipmentId);

			return Ok();
		}

		// TODO: replace route by PUT "{code}/activate"
		// TODO: replace route by PUT "{code}/deactivate"
		// Done
		[Route("{id}/activate")]
		[HttpPut]
		public async Task<IActionResult> ActivateShipment(string id)
		{
			return Ok(await _Shipmentservice.ChangeShipmentStatusById(id, ShipmentStatus.PENDING));
		}

		[Route("{id}/deactivate")]
		[HttpPut]
		public async Task<IActionResult> DeactivateShipment(string id)
		{
			return Ok(await _Shipmentservice.ChangeShipmentStatusById(id, ShipmentStatus.INACTIVE));
		}

		[Route("list/{queryString}")]
		[HttpGet]
		public IActionResult GetShipments(DataSourceRequest queryString)
		{
			var userIdentity = GetCurrentIdentity<long>();
			var roles = this.User.Claims.Where(p => p.Type == ClaimTypes.Role).Select(p=>p.Value).ToList();


			if (roles.Any(p=> p == ApplicationRoles.COORDINATOR))
			{
				return Ok(_Shipmentservice.GetAllAsync(queryString, null));
			}
			else
			{
				return Ok(_Shipmentservice.GetAllAsync(queryString, userIdentity.Id.ToString()));
			}

		}

		[Route("{id}")]
		[HttpGet]
		public IActionResult GetShipmentDetail(string id)
		{
			return Ok(_Shipmentservice.GetShipmentById(id));
		}

		// TODO: change route to PUT "{code}" 
		// Done
		[Route("{id}")]
		[HttpPut]
		public async Task<IActionResult> UpdateShipment(string id, FormShipmentModel model)
		{
			await _Shipmentservice.UpdateShipmentByIdAsync(id, model);

			return Ok();
		}
	}
}
