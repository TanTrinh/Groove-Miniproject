using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/warehouse")]
    public class WarehouseController : BaseController
    {
        private readonly IWarehouseService _warehouseService;
        public WarehouseController(IWarehouseService warehouseService)
        {
            _warehouseService = warehouseService;
        }

        [Route("customer/{id}")]
        [HttpGet]
        public async Task<IActionResult> GetWarehousesOfCustomerAsync(int id)
        {
            var result = await _warehouseService.GetWarehousesOfCustomer(id);
            return Ok(result);
        }

        [Route("filter-list/{displayName}")]
        [HttpGet]
        public async Task<IActionResult> GetOnFilter(string displayName)
        {
            var result = await _warehouseService.GetOnFilter(displayName);
            return Ok(result);
        }
    }
}