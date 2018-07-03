using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Domains.Helpers;
using Groove.AspNetCore.Common.Identity;
using Groove.AspNetCore.UnitOfWork;
using Kendo.Mvc.UI;

namespace Domains.GoGo.Services.Transportation
{
	public class ShipmentService : IShipmentService
	{
		
		private readonly IShipmentRepository _shipmentRepository;
		private readonly IShipmentRequestRepository _shipmentRequestRepository;
		private readonly IRequestRepository _requestRepository;
		private readonly IUnitOfWork _uow;
		private readonly IMapper _mapper;

		public ShipmentService(IMapper mapper, IUnitOfWork uow, IShipmentRepository repository, IRequestRepository requestRepository, IShipmentRequestRepository shipmentRequestRepository)
		{
			_uow = uow;
			_shipmentRepository = repository;
			_mapper = mapper;
			_requestRepository = requestRepository;
			_shipmentRequestRepository = shipmentRequestRepository;
		}

        public async Task<string> ChangeStatus(string code, string status)
        {
            return await _shipmentRepository.ChangeStatus(code, status);
        }

        public async Task<int> CreateShipmentAsync(FormShipmentModel model)
		{
			var entity = _mapper.Map<Shipment>(model);

			//get Created Date
			entity.CreatedDate = DateTime.Parse(String.Format("{0:G}", DateTime.Now)); // TODO: Use DateTime.Now only

			entity.Code = Helper.GenerateCode(DateTime.Now, 100);

			entity.Status = "inActive"; // TODO: Create ShipmentStatus class for Constant instead of hard code

			_uow.GetRepository<IShipmentRepository>().Create(entity);

			await _uow.SaveChangesAsync();
			
			return entity.Id;
		}

		public async Task UpdateShipmentAsync(FormShipmentModel model)
		{

     //       var entity = _uow.GetRepository<IShipmentRepository>().GetEntityById(model.Id);

            // TODO: Get Old entity from database first, then copy new data to Old Entity, then update
           var entity = _mapper.Map<Shipment>(model);
            entity.Status = "Pending"; // TODO: Create ShipmentStatus class for Constant instead of hard code

            _shipmentRequestRepository.UpdateShipmentRequest(model.RequestIdList, model.Id);
			_uow.GetRepository<IShipmentRepository>().Update(entity);
				
            await _uow.SaveChangesAsync();
        }


		public DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request)
		{
			return _shipmentRepository.GetAllAsync(request);
		}

		public Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id)
        {
            return _shipmentRepository.GetShipmentAssignedModel(id);
        }

		public ShipmentDetailModel GetShipmentByCode(string Code)
		{
			var result = _shipmentRepository.GetShipmentByCode(Code);

			result.RequestList = _requestRepository.GetRequestsByShipmentId(result.Id);
			result.RequestIdList = _requestRepository.GetRequestIdList(result.Id);

			return result;
		}

	}
}
