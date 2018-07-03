using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Fleet_management;
using Groove.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/MasterData/Drivers")]
    [ApiController]
    public class DriversController : BaseController
    {
        private readonly IDriverService _service;

        public DriversController(IDriverService service)
        {
            _service = service;
        }

        [Route("datasource")]
        [HttpGet]
        public async Task<IActionResult> GetDataSource(string driverName)
        {

            return Ok(await _service.GetDataSource(driverName));
        }

        [Route("GetDetail")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(string Id)
        {

            return Ok(await _service.GetDriverDetail(Id));
        }
    }
}