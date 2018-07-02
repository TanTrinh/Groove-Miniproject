using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/dont")]
    public class ShipmentRequestController : BaseController
    {
        private IRequestService _serviceRequest;
        private IShipmentService _serviceShipment;
        private IShipmentRequestService _serviceShipmentRequest;
        public ShipmentRequestController(
            IRequestService serviceRequest, 
            IShipmentService serviceShipment, 
            IShipmentRequestService serviceShipmentRequest)
        {
            _serviceRequest = serviceRequest;
            _serviceShipment = serviceShipment;
            _serviceShipmentRequest = serviceShipmentRequest;
        }
        [Route("shipment")]
        [Authorize(Roles ="Driver,Coordinator")]
        [HttpGet]
        public async Task<IActionResult> GetShipmentDetailAsync(string shipmentCode)
        {
            return Ok(await _serviceShipment.GetShipmentAsync(shipmentCode));
        }
        [Route("shipment/request")]
        [Authorize(Roles = "Driver,Coordinator")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string code)
        {
            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
        }


    }
}