using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Services.Transportation;
using Microsoft.AspNetCore.Mvc;
using Groove.AspNetCore.Mvc;
using Domains.Helpers;

namespace GoGoApi.Controllers
{
    [Route("api/customer")]
    public class CustomerController : BaseController
    {
        private readonly IRequestService _requestService;
        public CustomerController(IRequestService requestService)
        {
            _requestService = requestService;
        }

        [Route("request")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]RequestModel model)
        {
            if (ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            //var userIdentity = GetCurrentIdentity<long>();
            var result = await this._requestService.CreateAsync(model, null);
            return OkValueObject(result);
        }
    }
}