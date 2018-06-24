using AutoMapper;
using Domains.GoGo.Repositories.Transportation;
using Domains.GoGo.Services.Transportation;
using Domains.Identity.Entities;
using Domains.Identity.Repositories;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Services.Fleet_management
{
    public class DriverService : IDriverService
    {
        private readonly IShipmentRepository _shipmentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public DriverService(IMapper mapper, IUnitOfWork uow, IShipmentRepository repository)
        {
            _uow = uow;
            _shipmentRepository = repository;
            _mapper = mapper;
        }

    }
}
