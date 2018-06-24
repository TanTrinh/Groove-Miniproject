using AutoMapper;
using Domains.GoGo.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Models.Fleet_management
{
    public class DriverModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
    }

    public class DriverModelMapper : Profile
    {
        public DriverModelMapper()
        {
            var mappers = CreateMap<Shipment, DriverModel>();
            CreateMap<DriverModel, Shipment>();

            mappers.ForMember(p => p.Id, opt => opt.MapFrom(s => s.DriverId));
            mappers.ForMember(p => p.Id, opt => opt.MapFrom(s => s.Driver.UserName));
            mappers.ForMember(p => p.Id, opt => opt.MapFrom(s => s.Driver.PhoneNumber));
        }
    }
}
