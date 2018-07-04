using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services;
using Domains.GoGo.Services.Transportation;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        private readonly IProblemMessageService _problemMessageService;
        public ShipmentsController(IRequestService service, IShipmentService Shipmentservice, IShipmentRequestService shipmentRequestService, IProblemMessageService problemMessageService)
        {
            _service = service;
            _Shipmentservice = Shipmentservice;
            _shipmentRequestService = shipmentRequestService;
            _problemMessageService = problemMessageService;

        }
        // TODO: change route to POST ""
        [Route("Create")]
        [HttpPost]
        public async Task<IActionResult> CreateShipment(FormShipmentModel model)
        {
            //var userIdentity = GetCurrentIdentity<long>();

            var shipmentId = await _Shipmentservice.CreateShipmentAsync(model);
            await _shipmentRequestService.CreateShipmentRequestAsync(model.RequestIdList, shipmentId);

            return Ok();
        }

        // TODO: replace route by PUT "{code}/activate"
        // TODO: replace route by PUT "{code}/deactivate"
        [Route("updateStatus")]
        [HttpPut]
        public async Task<IActionResult> ChangeShipmentStatus(string code, string status)
        {
            return Ok(await _Shipmentservice.ChangeStatus(code, status));
        }

        [Route("datasource")]
        [HttpGet]
        public IActionResult GetShipments([DataSourceRequest]DataSourceRequest request)
        {

            return Ok(_Shipmentservice.GetAllAsync(request));
        }

        // TODO: change route to GET "{code}" instead of use the query string
        [Route("Detail")]
        [HttpGet]
        public IActionResult GetShipmentDetail(string Code)
        {
            return Ok(_Shipmentservice.GetShipmentByCode(Code));
        }

        // TODO: change route to PUT "{code}" 
        [Route("update")]
        [HttpPut]
        public async Task<IActionResult> UpdateShipment(FormShipmentModel model)
        {
            await _Shipmentservice.UpdateShipmentAsync(model);

            return Ok();
        }

        //DUC
        [Route("{shipmentCode}")]
        [HttpGet]
        public async Task<IActionResult> GetShipmentDetailAsync(string shipmentCode)
        {
            var t = await _Shipmentservice.GetShipmentAsync(shipmentCode);
            return Ok(t);
        }


        [Route("{code}/request/{requestCode}/changestatus")]
        [Authorize(Roles = "Driver,Coordinator")]
        [HttpPut]
        public async Task<IActionResult> ChangeDeliveryStatus([FromBody]string requestCode, string status)
        {
            string code = await _shipmentRequestService.ChangeStatusRequestAsync(requestCode, status);
            return Ok(await _shipmentRequestService.GetCurrentRequestAsync(code));
        }

        [Route("{shipmentCode}/locationpicking")]
        [HttpGet]
        public async Task<IActionResult> GetLocationPicking(string shipmentCode)
        {
            return Ok(await _shipmentRequestService.GetPositionPicking(shipmentCode));
        }

        [Route("request/{requestCode}")]
        //[Authorize(Roles = "Driver,Coordinator")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string requestCode)
        {
            return Ok(await _shipmentRequestService.GetCurrentRequestAsync(requestCode));
        }

        [Route("{shipmentCode}/requestList")]
        [HttpGet]
        public async Task<IActionResult> GetRequestList(string shipmentCode)
        {
            return Ok(await _shipmentRequestService.GetRequestListAsync(shipmentCode));
        }

        [Route("{shipmentCode}/changestatus/{status}")]
        [HttpPut]
        public async Task<IActionResult> ShipmentFeedback(string shipmentCode, string status)
        {
            string code = await _Shipmentservice.ChangeDeliveryStatus(shipmentCode, status);
            return Ok(await _Shipmentservice.GetShipmentAsync(code));
        }
        [Route("request/{requestCode}/changestatus/{status}")]
        [HttpPut]
        public async Task<IActionResult> ChangeStatusRequest(string requestCode, string status)
        {
            string code = await _shipmentRequestService.ChangeStatusRequestAsync(requestCode, status);
            return Ok(await _shipmentRequestService.GetCurrentRequestAsync(code));
        }
        [Route("request/{requestCode}/sendproblem")]
        [HttpPost]
        public async Task<IActionResult> SaveProblem(string requestCode, [FromBody]Message message)
        {
            int result = await _problemMessageService.SaveProblemMessageAsync(requestCode, message.message);
            string code = await _shipmentRequestService.Problem(requestCode, true);
            return Ok(await _shipmentRequestService.GetCurrentRequestAsync(code));
        }
        [Route("request/{requestCode}/resolveproblem")]
        [HttpPut]
        public async Task<IActionResult> ResolveProblem (string requestCode)
        {
            string code = await _shipmentRequestService.Problem(requestCode, false);
            return Ok(await _shipmentRequestService.GetCurrentRequestAsync(code));
        }
    }
    public class Message
    {
        public string message { set; get; }
    }
}
