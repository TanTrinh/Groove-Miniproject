using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/Request")]
    [ApiController]
    public class CoordinatorController : ControllerBase
    {
        private readonly IRequestService _service;

        public CoordinatorController(IRequestService service)
        {
            _service = service;
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok( await _service.GetWaitingRequest());
        }
    }
}