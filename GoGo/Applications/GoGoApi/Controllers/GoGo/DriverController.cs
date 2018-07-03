using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/Request")]
    public class DriverController : Controller
    {
        private IRequestService _serviceRequest;
        private IShipmentService _serviceShipment;
        public DriverController(IRequestService serviceRequest, IShipmentService serviceShipment)
        {
            _serviceRequest = serviceRequest;
            _serviceShipment = serviceShipment;
        }

        [Route("detail")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetail(int? id)
        {
            return Ok(await _serviceRequest.GetRequestDetails(id));
        }
        [Route("changeStatus")]
        [HttpPost]
        public async Task<IActionResult> ChangeStatus(int? id, string status)
        {
            return Ok(await _serviceRequest.ChangeStatus(id, status));
        }
        [Route("shipmentAssigned")]
        [HttpGet]
        public async Task<IActionResult> GetShipmentAssigned(long? id)
        {
            return Ok(await _serviceShipment.GetShipmentAssignedModel(id));
        }
    }
}