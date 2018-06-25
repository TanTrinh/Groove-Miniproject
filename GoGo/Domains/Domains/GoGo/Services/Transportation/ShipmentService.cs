using System;
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
		private readonly IShipmentRepository _repository;
		private readonly IUnitOfWork _uow;
		private readonly IMapper _mapper;

		public ShipmentService(IMapper mapper, IUnitOfWork uow, IShipmentRepository repository)
		{
			_uow = uow;
			_repository = repository;
			_mapper = mapper;
		}

        public async Task<int> ChangeStatus(string code, string status)
        {
            return await _repository.ChangeStatus(code, status);
        }

        public async Task<int> CreateShipmentAsync(CreateShipmentModel model)
		{
			var entity = _mapper.Map<Shipment>(model);

			//get Created Date
			entity.CreatedDate = DateTime.Parse(String.Format("{0:G}", DateTime.Now));

			entity.Code = Helper.GenerateCode(DateTime.Now, 100);

			_uow.GetRepository<IShipmentRepository>().Create(entity);

			await _uow.SaveChangesAsync();
			
			return entity.Id;
		}

		public DataSourceResult GetAllAsync([DataSourceRequest]DataSourceRequest request)
		{
			return _repository.GetAllAsync(request);
		}

		public Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id)
        {
            return _repository.GetShipmentAssignedModel(id);
        }

    }
}
