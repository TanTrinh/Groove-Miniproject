using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;

namespace GoGoApi.Controllers
{
    [Route("api/Coordinator")]
    [ApiController]
    public class CoordinatorController : BaseController
    {
        private readonly IRequestService _service;
		private readonly IShipmentService _Shipmentservice;
		private readonly IShipmentRequestService _shipmentRequestService;

		public CoordinatorController(IRequestService service, IShipmentService Shipmentservice, IShipmentRequestService shipmentRequestService)
        {
            _service = service;
			_Shipmentservice = Shipmentservice;
			_shipmentRequestService = shipmentRequestService;
		}

		[Route("WaitingRequest")]
		[HttpGet]
		public IActionResult GetAllAsync(int pageNumber)
		{
			var userIdentity = GetCurrentIdentity<int>();
			var roles = this.User.Claims.Where(p => p.Type == ClaimTypes.Role).ToList();

			//if (roles.Any("coordinator", true))
			//{
			//	_service.GetWaitingRequest(pageNumber, null);
			//}
			//else
			//{
			//	_service.GetWaitingRequest(pageNumber, userIdentity.Id);
			//}
			return Ok(_service.GetWaitingRequest(pageNumber));
		}

		[Route("CreateShipment")]
		[HttpPost]
		public async Task<IActionResult> CreateShipment(CreateShipmentModel model)
		{
			//var userIdentity = GetCurrentIdentity<long>();

			var shipmentId = await _Shipmentservice.CreateShipmentAsync(model);
			await _shipmentRequestService.CreateShipmentRequestAsync(model.RequestIdList, shipmentId);

			return Ok();
		}
	}
}