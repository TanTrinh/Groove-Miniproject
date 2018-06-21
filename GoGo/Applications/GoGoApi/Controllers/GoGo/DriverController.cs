using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/Driver")]
    public class DriverController : Controller
    {
        private IRequestService _serviceRequest;
        private IShipmentService _serviceShipment;
        private IShipmentRequestService _serviceShipmentRequest;
        public DriverController(IRequestService serviceRequest, IShipmentService serviceShipment, IShipmentRequestService serviceShipmentRequest)
        {
            _serviceRequest = serviceRequest;
            _serviceShipment = serviceShipment;
            _serviceShipmentRequest = serviceShipmentRequest;
        }
        public class parameter
        {
            public string code { set; get; }
            public string status { set; get; }
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
        [Route("shipmentfeedback")]
        [HttpPost]
        public async Task<IActionResult> AcceptOrReject([FromBody]parameter p)
        {
            try
            {
                return Ok(Json(await _serviceShipment.ChangeStatus(p.code, p.status)));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("shipmentPicking")]
        [HttpGet]
        public async Task<IActionResult> GetLocationPicking(string code)
        {
            return Ok(await _serviceShipmentRequest.GetPositionPicking(code));
        }
        [Route("shipment")]
        [HttpGet]
        public async Task<IActionResult> GetShipment(string code)
        {
            return Ok(await _serviceShipment.GetShipmentAsync(code));
        }
    }
}