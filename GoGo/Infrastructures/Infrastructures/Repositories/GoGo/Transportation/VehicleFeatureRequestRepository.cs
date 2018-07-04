using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Entities.Fleet;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class VehicleFeatureRequestRepository : GenericRepository<VehicleFeatureRequest, int>, IVehicleFeatureRequestRepository
    {
        private readonly IMapper _mapper;

        public VehicleFeatureRequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

        //public void SaveChangesAsync(VehicleFeatureRequest entity)
        //{
        //    this.context.Add(entity);
        //    this.context.SaveChangesAsync();
        //}
    }
}
