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
        public class parameterCode
        {
            public string ShipmentCode { set; get; }
            public string RequestCode { set; get; }
        }
       
        [Route("changeStatus")]
        [HttpPost]
        public async Task<IActionResult> changeStatus([FromBody]parameter p)
        {
            string code = await _serviceShipmentRequest.ChangeStatusRequestAsync(p.code, p.status);
            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
        }
        [Route("shipmentAssigned")]
        [HttpGet]
        public async Task<IActionResult> GetShipmentAssigned(long? id)
        {
            return Ok(await _serviceShipment.GetShipmentAssignedModel(id));
        }
        [Route("shipmentFeedback")]
        [HttpPost]
        public async Task<IActionResult> ShipmentFeedback([FromBody]parameter p)
        {
            string code = await _serviceShipment.ChangeStatus(p.code, p.status);
            return Ok(await _serviceShipment.GetShipmentAsync(code));
        }
        [Route("getLocationPicking")]
        [HttpGet]
        public async Task<IActionResult> GetLocationPicking(string code)
        {
            return Ok(await _serviceShipmentRequest.GetPositionPicking(code));
        }
        [Route("shipmentDetail")]
        [HttpGet]
        public async Task<IActionResult> GetShipment(string code)
        {
            return Ok(await _serviceShipment.GetShipmentAsync(code));
        }
        [Route("shipment/currentRequest")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string code)
        {
             return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
        }


        [Route("shipment/requestList")]
        [HttpGet]
        public async Task<IActionResult> GetRequestList(string code)
        {
            IEnumerable<RequestDetailModel> list = await _serviceShipmentRequest.GetRequestListAsync(code);
            foreach (var item in list)
            {
                item.Address = item.Address.Replace("Thanh pho", "TP. ");
                item.Address = item.Address.Replace("Phường", "P.");
                item.Address = item.Address.Replace("Quận", "Q.");
                item.Address = item.Address.Replace("Thanh pho", "TP. ");
                item.Address = item.Address.Replace("Vietnam", "VN");
                item.Address = item.Address.Replace("Ho Chi Minh", "HCM");
                item.Address = item.Address.Replace("Hồ Chí Minh", "HCM");
            }
            return Ok(list);
        }
    }
}