// TODO: remove this class
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Domains;
//using Domains.GoGo.Models;
//using Domains.GoGo.Models.Transportation;
//using Domains.GoGo.Services;
//using Domains.GoGo.Services.Transportation;
//using Microsoft.AspNetCore.Mvc;
//namespace GoGoApi.Controllers.GoGo
//{
//    // TODO: Move this controller to requestController or change the API url
//    [Route("api/Request")]
//    public class DriverController : Controller
//    {
//        private IRequestService _serviceRequest;
//        private IShipmentService _serviceShipment;
//        private IShipmentRequestService _serviceShipmentRequest;
//        private IProblemMessageService _serviceProblemMessage;
//        public DriverController(IRequestService serviceRequest, IShipmentService serviceShipment, IShipmentRequestService serviceShipmentRequest, IProblemMessageService serviceProblemMessage)
//        {
//            _serviceRequest = serviceRequest;
//            _serviceShipment = serviceShipment;
//            _serviceShipmentRequest = serviceShipmentRequest;
//            _serviceProblemMessage = serviceProblemMessage;
//        }
//        public class parameter
//        {
//            public string code { set; get; }
//            public string status { set; get; }
//        }
//        [Route("detail")]
//        [HttpGet]
//        public async Task<IActionResult> GetRequestDetail(int? id)
//        {
//            return Ok(await _serviceRequest.GetRequestDetails(id));
//        }

//        [Route("{code}/changestatus")]
//        [HttpPost]
//        public async Task<IActionResult> changeStatus([FromBody]string requestCode,string status)
//        {
//            string code = await _serviceShipmentRequest.ChangeStatusRequestAsync(requestCode, status);
//            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
//        }
//        //[Route("shipmentAssigned")]
//        //[HttpGet]
//        //public async Task<IActionResult> GetShipmentAssigned(long? id)
//        //{
//        //    return Ok(await _serviceShipment.GetShipmentAssignedModel(id));
//        //}
//        [Route("shipmentFeedback")]
//        [HttpPost]
//        public async Task<IActionResult> ShipmentFeedback([FromBody]parameter p)
//        {
//            string code = await _serviceShipment.ChangeDeliveryStatus(p.code, p.status);
//            return Ok(await _serviceShipment.GetShipmentAsync(code));
//        }
//        [Route("getLocationPicking")]
//        [HttpGet]
//        public async Task<IActionResult> GetLocationPicking(string code)
//        {
//            return Ok(await _serviceShipmentRequest.GetPositionPicking(code));
//        }
//        [Route("shipmentDetail")]
//        [HttpGet]
//        public async Task<IActionResult> GetShipment(string code)
//        {
//            return Ok(await _serviceShipment.GetShipmentAsync(code));
//        }
//        [Route("shipment/request")]
//        [HttpGet]
//        public async Task<IActionResult> GetRequestDetailAsync(string code)
//        {
//            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
//        }


//        [Route("shipment/requestList")]
//        [HttpGet]
//        public async Task<IActionResult> GetRequestList(string code)
//        {
//            return Ok(await _serviceShipmentRequest.GetRequestListAsync(code));
//        }
//        public class LatLng
//        {
//            public double latitude { set; get; }
//            public double longitude { set; get; }
//        }
        

//        [Route("shipment/request/haveProblem")]
//        [HttpPost]
//        public async Task<IActionResult> Problem([FromBody]ProblemMessageModel problemMessage)
//        {
//            if (problemMessage.IsSolve == false) { 
//                int result = await _serviceProblemMessage.SaveProblemMessageAsync(problemMessage.RequestCode, problemMessage.Message);
//            }
//            string code = await _serviceShipmentRequest.Problem(problemMessage.RequestCode, !problemMessage.IsSolve);
//            return Ok(await _serviceShipmentRequest.GetCurrentRequestAsync(code));
//        }
//    }
//}