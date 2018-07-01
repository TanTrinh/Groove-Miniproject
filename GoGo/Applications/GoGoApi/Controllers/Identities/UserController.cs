using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domains.Identity.Models;
using Domains.Identity.Services;
using Groove.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoGoApi.Controllers.Identities
{
    [Route("api/user")]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        // TODO: route should be ""
        [Route("list")]
        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> GetUsers(long? id)
        {
            return Ok(await _userService.GetUsersAsync(id));
        }

        // TODO: route should be ""
        [Route("create")]
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateUser([FromBody]UserCreateModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = await _userService.CreateUserAsync(model, GetCurrentIdentity<long>());

            return OkValueObject(userId);
        }

        // TODO: route shoule be "{id}"
        [Route("edit")]
        [HttpPut]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> UpdateUser(long id, [FromBody]UserUpdateModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = await _userService.UpdateUserAsync(id, model, GetCurrentIdentity<long>());

            return OkValueObject(userId);
        }
        // TODO: route should be "{id}/editview" or consider to remove this API & use GetUserDetail instead
        // Get the value of user need to update
        [Route("edit")]
        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> ViewUserUpdate(long id)
        {
            return Ok(await _userService.GetUserUpdateAsync(id));
        }

        // TODO: Move to profile controller
        // TODO: Remove Id, Id should be get from access token
        // TODO: Rename function to UpdateMyUserProfile
        // TODO: Route should be ""
        [Route("profile/edit")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateUserProfile(long id, [FromBody]UserProfileUpdateModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = await _userService.UpdateUserProfileAsync(id, model, GetCurrentIdentity<long>());

            return OkValueObject(userId);
        }

        // TODO: Move to profile controller
        // TODO: Remove Id, Id should be get from access token
        // TODO: Rename function to GetMyUserProfileForUpdate or remove this API & use user GetUserProfile instead
        // TODO: Route shoule be "myprofile/editview"

        [Route("profile/edit")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> ViewUserProfileUpdate(long id)
        {
            return Ok(await _userService.GetUserUpdateAsync(id));
        }

        // TODO: Move to profile controller
        // TODO: Remove Id, Id should be get from access token
        // TODO: Rename function to GetMyUserProfile
        // TODO: Route shoule be "myprofile"
        [Route("profile")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserProfile()
        {
            //var result = await _userService.GetUserProfileAsync(GetCurrentUserId<long>());
            return Ok(await _userService.GetUserProfileAsync(GetCurrentUserId<long>()));
        }


        // TODO: route should be {id}
        [Route("detail")]
        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> GetUserDetail(long? id)
        {
            return Ok(await _userService.GetUserDetailAsync(id));
        }
    }
}