using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.GoGo.Services.Fleet_management;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers
{
    [Route("api/MasterData/Warehouses")]
    [ApiController]
    public class WarehousesController : BaseController
	{
		private readonly IWarehouseService _service;

		public WarehousesController(IWarehouseService service)
		{
			_service = service;
		}

		[Route("")]
		[Authorize(Roles = "Coordinator")]
		[HttpGet]
		public async Task<IActionResult> GetDataSource([FromQuery]string value)
		{

			return Ok(await _service.GetDataSource(value));
		}

		[Route("{id}")]
		[Authorize(Roles = "Coordinator")]
		[HttpGet]
		public async Task<IActionResult> GetWarehouseDetailAsync(int id)
		{

			return Ok(await _service.GetWarehouseDetailAsync(id));
		}
	}
}