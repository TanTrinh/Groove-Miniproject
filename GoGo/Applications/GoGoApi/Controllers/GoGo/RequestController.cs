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
using System.Collections;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;

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

        [Route("/api/request")]
        [HttpGet]
        public IActionResult GetRequests([DataSourceRequest]DataSourceRequest request)
        {
            //if (this.User.Claims.Role = "Customer")
            //{
            //    var result = ;
            //}
            //else if (this.User.Claims.Role = "Coodinator")
            //{
            //    var result = ;
            //}
            var result = _requestService.GetCustomerRequests(request);
            return  Ok(result);
        }

        private IEnumerable products = new[] {
           new { ProductName = "Chai", CategoryName = "Beverages", QuantityPerUnit = "10 boxes x 20 bags" },
           new { ProductName = "Chang", CategoryName = "Beverages", QuantityPerUnit = "20 boxes x 20 bags" },
           new { ProductName = "Aniseed Syrup", CategoryName = "Condiments", QuantityPerUnit = "12 - 550 ml bottles" },
           new { ProductName = "Chef Anton's Cajun Seasoning", CategoryName = "Condiments", QuantityPerUnit = "48 - 6 oz jars" },
           new { ProductName = "Chef Anton's Gumbo Mix", CategoryName = "Condiments", QuantityPerUnit = "36 boxes" },
           new { ProductName = "Grandma's Boysenberry Spread", CategoryName = "Condiments", QuantityPerUnit = "12 - 8 oz jars" },
           new { ProductName = "Uncle Bob's Organic Dried Pears", CategoryName = "Produce", QuantityPerUnit = "12 - 1 lb pkgs." },
           new { ProductName = "Northwoods Cranberry Sauce", CategoryName = "Condiments", QuantityPerUnit = "12 - 12 oz jars" },
           new { ProductName = "Mishi Kobe Niku", CategoryName = "Meat/Poultry", QuantityPerUnit = "18 - 500 g pkgs." },
           new { ProductName = "Ikura", CategoryName = "Seafood", QuantityPerUnit = "12 - 200 ml jars" }
       };

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
        public async Task<IActionResult> GetRequestAsync(int id)
        {
            var result = await _requestService.FindCustomerRequestAsync(id);
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