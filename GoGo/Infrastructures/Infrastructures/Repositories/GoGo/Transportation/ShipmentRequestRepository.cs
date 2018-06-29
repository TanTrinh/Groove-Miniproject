using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class ShipmentRequestRepository : GenericRepository<ShipmentRequest, int>, IShipmentRequestRepository
	{
		private readonly IMapper _mapper;

		public ShipmentRequestRepository(IMapper mapper, ApplicationDbContext uoWContext) : base(uoWContext)
		{
			_mapper = mapper;
		}
	}
}
