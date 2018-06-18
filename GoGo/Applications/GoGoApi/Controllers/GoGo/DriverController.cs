using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Transportation;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
    [Route("api/Request")]
    public class DriverController : Controller
    {
        private IRequestService _service;
        public DriverController(IRequestService service)
        {
            _service = service;
        }

        [Route("detail")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetail(int? id)
        {
            return Ok(await _service.GetRequestDetails(id));
        }
    }
}