using AutoMapper;
using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Identity.Models
{
    public class UserListModel
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }

    public class UserListModelMapper : Profile
    {
        public UserListModelMapper()
        {
            CreateMap<User, UserListModel>();
        }
    }
}
