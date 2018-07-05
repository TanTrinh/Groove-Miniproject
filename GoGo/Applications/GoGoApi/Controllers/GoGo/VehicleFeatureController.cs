using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Fleet_management;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.GoGo
{
<<<<<<< HEAD
    [Route("api/vehicle-feature")]
=======
    // TODO: remove this class
>>>>>>> 120efd78a3831fea5b41fbe2d4be09bb2027ac49
    public class VehicleFeatureController : BaseController
    {
        private readonly IVehicleFeatureService _vehicleFeatureService;
        public VehicleFeatureController(IVehicleFeatureService vehicleFeatureService)
        {
            _vehicleFeatureService = vehicleFeatureService;
        }

        [Route("filter-list/{displayName}")]
        [HttpGet]
        public async Task<IActionResult> GetOnFilter(string displayName)
        {
            var result = await _vehicleFeatureService.GetOnFilter(displayName);
            return Ok(result);
        }
    }
}