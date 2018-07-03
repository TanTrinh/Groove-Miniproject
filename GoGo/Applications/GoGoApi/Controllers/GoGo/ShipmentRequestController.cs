using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api")]
    [Authorize(Roles = "Driver,Coordinator")]
    public class ShipmentRequestController : BaseController
    {
        private IRequestService _serviceRequest;
        private IShipmentService _serviceShipment;
        private IShipmentRequestService _serviceShipmentRequest;
        private IProblemMessageService _serviceProblemMessage;
        public ShipmentRequestController(
            IRequestService serviceRequest, 
            IShipmentService serviceShipment,
            IShipmentRequestService serviceShipmentRequest, 
            IProblemMessageService serviceProblemMessage)
        {
            _serviceRequest = serviceRequest;
            _serviceShipment = serviceShipment;
            _serviceShipmentRequest = serviceShipmentRequest;
            _serviceProblemMessage = serviceProblemMessage;
        }
        // TODO: move to shipment controller
        [Route("shipment")]
        [HttpGet]
        public async Task<IActionResult> GetShipmentDetailAsync(string shipmentCode)
        {
            return Ok(await _serviceShipment.GetShipmentAsync(shipmentCode));
        }

        // TODO: move to shipment controller
        [Route("shipment/request")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string requestCode)
        {
            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(requestCode));
        }

        [Route("shipment/{code}feedback")]
        [HttpPut]
        public async Task<IActionResult> ShipmentFeedback([FromBody]string shipmentCode, string status)
        {
            string code = await _serviceShipment.ChangeStatus(shipmentCode, status);
            return Ok(await _serviceShipment.GetShipmentAsync(shipmentCode));
        }

        [Route("shipment/{code}/locationpicking")]
        [HttpGet]
        public async Task<IActionResult> GetLocationPicking(string code)
        {
            return Ok(await _serviceShipmentRequest.GetPositionPicking(code));
        }

        [Route("shipment/request")]
        [HttpGet]
        public async Task<IActionResult> GetRequestList(string code)
        {
            return Ok(await _serviceShipmentRequest.GetRequestListAsync(code));
        }

        [Route("shipment/request/{code}/haveProblem")]
        [HttpPut]
        public async Task<IActionResult> Problem([FromBody]ProblemMessageModel problemMessage)
        {
            if (problemMessage.IsSolve == false)
            {
                int result = await _serviceProblemMessage.
                    SaveProblemMessageAsync(problemMessage.RequestCode, problemMessage.Message);
            }
            string code = await _serviceShipmentRequest.Problem(problemMessage.RequestCode, !problemMessage.IsSolve);
            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
        }
    }
}