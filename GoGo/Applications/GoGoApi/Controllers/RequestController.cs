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

namespace GoGoApi.Controllers
{
    [Route("api/request")]
    public class RequestController : BaseController
    {
        private readonly IRequestService _requestService;
        public RequestController(IRequestService requestService)
        {
            _requestService = requestService;
        }

        [Route("")]
        [HttpPost]
        public async Task<IActionResult> CreateRequest([FromBody]RequestModel model)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            //var userIdentity = GetCurrentIdentity<long>();
            var result = await this._requestService.CreateCustomerRequest(model, null);
            return OkValueObject(result);
        }

        [Route("{id}")]
        [HttpGet]
        public  IActionResult GetRequest(int id)
        {
            var result = _requestService.FindCustomerRequest(id);
            return Ok(result);
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> UpateRequest([FromBody]RequestModel model)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var userIdentity = GetCurrentIdentity<long>();
            var result = await this._requestService.UpdateCustomerRequest(model, null);
            return OkValueObject(result);
        }
    }
}