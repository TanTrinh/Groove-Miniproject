using AutoMapper;
using Domains.Identity.Entities;
using Domains.Identity.Models;
using Domains.Identity.Repositories;
using Groove.AspNetCore.Common.Exceptions;
using Groove.AspNetCore.Common.Identity;
using Groove.AspNetCore.Common.Messages;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Identity.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManagement;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(
            IMapper mapper,
            IUserRepository userRepository,
            UserManager<User> userManagement)
        {
            _userManagement = userManagement;
            _userRepository = userRepository;
            _mapper = mapper;
        }
        
        public async Task<long> CreateUserAsync(UserCreateModel model, UserIdentity<long> issuer)
        {
            var user = _mapper.Map<User>(model);
            user.CreateBy(issuer).UpdateBy(issuer);

            var identityResult = await _userManagement.CreateAsync(user, model.Password);

            if (!identityResult.Succeeded)
            {
                throw CreateException(identityResult.Errors);
            }

            IdentityResult resultRole = await _userManagement.AddToRoleAsync(user, model.Role);

            return user.Id;
        }

        //Get the user profile
        public Task<UserReadModel> GetUserProfileAsync(long? id)
        {
            return _userRepository.FindByUserIdAsync(id);
        }

        //Get the user detail in list
        public Task<UserReadModel> GetUserDetailAsync(long? id)
        {
            return _userRepository.FindByUserIdAsync(id);
        }

        //Get list of user with specific role by role id
        public Task<IEnumerable<UserListModel>> GetUsersAsync(long? id)
        {
            return _userRepository.GetUserListAsync(id);
        }

        private UserDefinedException CreateException(IEnumerable<IdentityError> errors)
        {
            var exception = new UserDefinedException();
            exception.UserDefinedMessage = new ExceptionMessage();
            exception.UserDefinedMessage.Details = new List<ExceptionMessage>();

            foreach (var error in errors)
            {
                exception.UserDefinedMessage.Details.Add(new ExceptionMessage
                {
                    Message = error.Description
                });
            }
            exception.UserDefinedMessage.Message = exception.UserDefinedMessage.Details.First().Message;

            return exception;
        }
    }
}
