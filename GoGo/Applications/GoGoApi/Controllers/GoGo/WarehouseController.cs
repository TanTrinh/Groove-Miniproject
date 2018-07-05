using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
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

<<<<<<< HEAD
=======
        // TODO: Remove {displayName} from route. {} synctax to use to identify an resource,
        // In this case DisplayName is a query srring only, we should not pass it to the url
>>>>>>> 120efd78a3831fea5b41fbe2d4be09bb2027ac49
        [Route("filter-list/{displayName}")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetOnFilter(string displayName)
        {
            var userId = GetCurrentUserId<long>();
            var result = await _warehouseService.GetOnFilter(displayName, userId);
            return Ok(result);
        }
    }
}