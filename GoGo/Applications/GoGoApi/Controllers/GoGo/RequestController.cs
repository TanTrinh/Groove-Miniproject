using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services.Transportation;
using Microsoft.AspNetCore.Mvc;
using Groove.AspNetCore.Mvc;
using Domains.Helpers;
using Domains.GoGo.Services;
using System.Collections;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace GoGoApi.Controllers
{
    [Route("api/request")]
    public class RequestController : BaseController
    {
        private readonly IRequestService _requestService;
        private readonly IVehicleFeatureRequestService _vehicleFeatureRequestService;

        public RequestController(IRequestService requestService, IVehicleFeatureRequestService vehicleFeatureRequestService)
        {
            _requestService = requestService;
            _vehicleFeatureRequestService = vehicleFeatureRequestService;
        }

        [Route("/api/request")]
        [HttpGet]
        [Authorize]
        public IActionResult GetRequests([DataSourceRequest]DataSourceRequest request)
        {
            var userId = GetCurrentUserId<long>();
            //var roles = this.User.Claims.Where(p => p.Type == ClaimTypes.Role).ToList();
            var result = _requestService.GetCustomerRequests(request, userId);
            return Ok(result);
        }

        [Route("/api/request/{code}/{status}")]
        [HttpGet]
        [Authorize]
        public IActionResult ChangeStatus(string code, string status)
        {
            if (status != "Inactive" && status != "Pending")
            {
                return BadRequest();
            }
            var result = _requestService.ChangeStatus(code, status);
            return  Ok(result);
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateRequest([FromBody]RequestModel model)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var userId = GetCurrentUserId<long>();
            var requestResult = await this._requestService.CreateCustomerRequest(model, userId);
            var saveToFeature = await this._vehicleFeatureRequestService.CreateVehicleFeatureRequest(requestResult, model.VehicleFeature.Value);
            return OkValueObject(requestResult);
        }

        [Route("{requestId}")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetRequestAsync(int requestId)
        {
            var userId = GetCurrentUserId<long>();
            var requestResult = await _requestService.FindCustomerRequestAsync(requestId,userId);
            var featureResult = _vehicleFeatureRequestService.FindVehicleFeature(requestId);
            requestResult.VehicleFeature = featureResult;
            return Ok(requestResult);
        }

        [Route("{id}")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateRequest([FromBody]RequestModel model)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = GetCurrentUserId<long>();
            var requestResult = await this._requestService.UpdateCustomerRequest(model, userId);
            var featureResult = await this._vehicleFeatureRequestService.UpdateVehicleFeatureAsync(requestResult, model.VehicleFeature.Value);
            return OkValueObject(requestResult);
        }
    }
}