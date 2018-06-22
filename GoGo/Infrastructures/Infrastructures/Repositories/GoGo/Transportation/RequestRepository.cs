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

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

		public IEnumerable<RequestModel> GetWaitingRequestAsync(int pageNumber, int pageSize)
		{
			return this.dbSet.Include(p => p.WareHouse)
							.Where(p => p.WareHouse.Id == p.WareHouseId)
							.Where(p => p.Status == "Pending")
							.Skip(pageSize * (pageNumber - 1))
							.Take(pageSize)
							.MapQueryTo<RequestModel>(_mapper)
							.ToList();
	}

		public int GetWaitingRequestQuantity()
		{
			return this.dbSet.Where(p => p.Status == "Pending").Count();
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
			return this.dbSet.MapQueryTo<RequestModel>(_mapper).ToDataSourceResult(request);
		}
	}
}
