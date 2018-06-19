using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;

namespace Domains.GoGo.Services.Transportation
{
    public class ShipmentService : IShipmentService
    {
        private readonly IShipmentRepository _repository;
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ShipmentService(IMapper mapper,IShipmentRepository repository, IUnitOfWork uow)
        {
            _mapper = mapper;
            _repository = repository;
            _uow = uow;
        }

        public Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id)
        {
            return _repository.GetShipmentAssignedModel(id);
        }
    }
}
