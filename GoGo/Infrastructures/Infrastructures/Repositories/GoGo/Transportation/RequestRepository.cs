using Domains.GoGo.Entities;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using AutoMapper;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Domains.GoGo.Models.Transportation;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using Domains.Core;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

		public async Task<RequestDetailModel> GetRequestDetailAsync(int? id)
        {
            return await this.dbSet.Where(p => p.Id == id).MapQueryTo<RequestDetailModel>(_mapper).FirstAsync();
        }

        public Task<string> ChangeStatus(int? id, string status)
        {
            throw new NotImplementedException();
        }

		public DataSourceResult GetAllAsync([DataSourceRequest] DataSourceRequest request)
		{
			return this.dbSet.MapQueryTo<RequestsModel>(_mapper).ToDataSourceResult(request);
		}

		public async Task<IEnumerable<DataSourceValue<int>>> GetDataSource(string value, int warehouseId)
		{
			var requestedIdList = this.context.Set<ShipmentRequest>().Where(p => p.Status == "Waiting").Select(p => p.RequestId).ToList();

			return await this.dbSet.Where(p => (( p.Code.Contains(value) || p.Address.Contains(value)) 
									&& !requestedIdList.Contains(p.Id) && p.Status =="Pending" && p.WareHouseId == warehouseId ) )
									.Select(p => new DataSourceValue<int>
									{
										Value = p.Id,
										DisplayName = p.Code
									}).ToListAsync();
		}

        public async Task<RequestsModel> GetRequestByCode(string code)
        {
            return await this.dbSet.Where(p => p.Code == code).MapQueryTo<RequestsModel>(_mapper).FirstAsync();
        }

		public IEnumerable<RequestsModel> GetRequestsByShipmentId(int shipmentId)
		{
			var requestIdList = this.context.Set<ShipmentRequest>().Where(p =>( p.ShipmentId == shipmentId && p.Status == "Waiting")).Select(p => p.RequestId).ToList();

			return this.dbSet.Where(p => (requestIdList.IndexOf(p.Id) != -1)).MapQueryTo<RequestsModel>(_mapper).ToList();
		}

		public IEnumerable<int> GetRequestIdList(int shipmentId)
		{
			return this.context.Set<ShipmentRequest>().Where(p => (p.ShipmentId == shipmentId && p.Status == "Waiting")).Select(p => p.RequestId).ToList();
		}
	}
}
