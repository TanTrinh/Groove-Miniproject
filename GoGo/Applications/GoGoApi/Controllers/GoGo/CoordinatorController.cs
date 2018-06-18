using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/Coordinator")]
    [ApiController]
    public class CoordinatorController : BaseController
    {
        private readonly IRequestService _service;
		private readonly IShipmentService _Shipmentservice;

		public CoordinatorController(IRequestService service)
        {
            _service = service;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok( await _service.GetWaitingRequest());
        }

		[Route("CreateShipment")]
		[HttpPost]
		public async Task<IActionResult> CreateShipment(CreateShipmentModel model)
		{
			await _Shipmentservice.CreateShipmentAsync(model);

			return Ok();
		}
	}
}