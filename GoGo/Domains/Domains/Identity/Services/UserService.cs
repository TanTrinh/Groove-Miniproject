using AutoMapper;
using Domains.Identity.Entities;
using Domains.Identity.Models;
using Domains.Identity.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
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

        public Task<UserReadModel> GetUserProfileAsync(long id)
        {
            return _userRepository.FindByUserIdAsync(id);
        }

        public Task<IEnumerable<UserListModel>> GetUsersAsync(long? id)
        {
            return _userRepository.GetUserListAsync(id);
        }
    }
}
