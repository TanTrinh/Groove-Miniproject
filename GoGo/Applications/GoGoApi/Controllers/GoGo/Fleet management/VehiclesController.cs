using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Fleet_management;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/Vehicles")]
    [ApiController]
    public class VehiclesController : BaseController
    {
        private readonly IVehicleService _service;

        public VehiclesController(IVehicleService service)
        {
            _service = service;
        }

        [Route("datasource")]
        [HttpGet]
        public async Task<IActionResult> GetDataSource(string licensePlate)
        {

            return Ok(await _service.GetDataSource(licensePlate));
        }

        [Route("GetDetail")]
        [HttpGet]
        public async Task<IActionResult> GetRequestDetailAsync(int Id)
        {

            return Ok(await _service.GetVehicleDetailAsync(Id));
        }
    }
}