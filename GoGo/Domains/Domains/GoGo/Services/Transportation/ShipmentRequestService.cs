using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Services.Transportation
{
	public class ShipmentRequestService : IShipmentRequestService
	{
		private readonly IShipmentRepository _repository;
		private readonly IUnitOfWork _uow;
		private readonly IMapper _mapper;

		public ShipmentRequestService(IShipmentRepository repository, IUnitOfWork uow, IMapper mapper)
		{
			_repository = repository;
			_uow = uow;
			_mapper = mapper;
		}

		public async Task CreateShipmentRequestAsync(List<int> requestIdList, int shipmentId)
		{
			int i = 1;
			foreach (int requestId in requestIdList)
			{
				var entity = new ShipmentRequest();

				entity.RequestId = requestId;
				entity.ShipmentId = shipmentId;
				entity.RequestOrder = i++;
				entity.Note = "Initial";
				entity.Status = "Initial";

				_uow.GetRepository<IShipmentRequestRepository>().Create(entity);
			}

			await _uow.SaveChangesAsync();
		}
	}
}
