﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domains.GoGo.Entities;
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

        public async Task<int> ChangeShipmentStatusById(string id, string status)
        {
            return await _shipmentRepository.ChangeShipmentStatusById(id, status);
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

		public async Task UpdateShipmentByIdAsync(string code, FormShipmentModel model)
		{

            //var entity = _uow.GetRepository<IShipmentRepository>().GetEntityById(model.Id);

		    var entity = _mapper.Map<Shipment>(model);

            entity.Status = "Pending"; // TODO: Create ShipmentStatus class for Constant instead of hard code

		    _shipmentRequestRepository.UpdateShipmentRequest(model.RequestIdList, model.Id);
			_uow.GetRepository<IShipmentRepository>().Update(entity);
				
            await _uow.SaveChangesAsync();
        }


		public DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request, string userId)
		{
			return _shipmentRepository.GetAllAsync(request, userId);
		}

		public Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id)
        {
            return _shipmentRepository.GetShipmentAssignedModel(id);
        }

		public ShipmentDetailModel GetShipmentById(string Id)
		{
			var result = _shipmentRepository.GetShipmentById(Id);

			result.RequestList = _requestRepository.GetRequestsByShipmentId(result.Id);
			result.RequestIdList = _requestRepository.GetRequestIdList(result.Id);

			return result;
		}

	}
}
