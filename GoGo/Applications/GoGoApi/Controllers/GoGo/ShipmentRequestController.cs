using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/shipment-request")]
    public class ShipmentRequestController : BaseController
    {
        private readonly IShipmentRequestService _shipmentRequestService;

        public ShipmentRequestController(IShipmentRequestService shipmentRequestService)
        {
            _shipmentRequestService = shipmentRequestService;
        }

        [Route("{requestId}/status")]
        [HttpGet]
        public IActionResult GetRequestStatus(int requestId)
        {
            var userId = GetCurrentUserId<int>();
            var result = _shipmentRequestService.GetRequestStatus(requestId, userId);
            return Ok(result);
        }
    }
}