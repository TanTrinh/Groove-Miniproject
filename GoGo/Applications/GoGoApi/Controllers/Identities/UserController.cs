using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.Identities
{
    [Route("api/user")]
    public class UserController : BaseController
    {
        //private readonly IUserService _userService;
        //public UserController(IUserService userService)
        //{
        //    _userService = userService;
        //}

        //[Route("")]
        //[HttpPost]
        //[Authorize]
        //public async Task<IActionResult> CreateUser([FromBody]UserCreateModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var userId = await _userService.CreateUserAsync(model, GetCurrentIdentity<long>());

        //    return OkValueObject(userId);
        //}

        //[Route("{id}")]
        //[HttpPut]
        //[Authorize]
        //public async Task<IActionResult> UpdateUser(long id, [FromBody]UserUpdateModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    await _userService.UpdateUserAsync(id, model, GetCurrentIdentity<long>());

        //    return Ok();
        //}

        //[Route("{id}")]
        //[HttpGet]
        //[Authorize]
        //public async Task<IActionResult> GetUser(long id)
        //{
        //    var result = await _userService.FindUserAsync(id);
        //    return Ok(result);
        //}
    }
}