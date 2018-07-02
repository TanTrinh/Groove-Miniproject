﻿using Domains.GoGo.Entities;
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

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class RequestRepository : GenericRepository<Request, int>, IRequestRepository
    {
        private readonly IMapper _mapper;

        public RequestRepository(IMapper mapper, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
        }

        public async Task<IEnumerable<WaitingRequestModel>> GetWaitingRequestAsync()
        {
            return await this.dbSet.Where(p => p.Status == "Wait").MapQueryTo<WaitingRequestModel>(_mapper).ToListAsync();
        }
        public async Task<RequestDetailModel> GetRequestDetailAsync(int? id)
        {
            return await this.dbSet.Where(p => p.Id == id).MapQueryTo<RequestDetailModel>(_mapper).FirstAsync();
        }

        public Task<string> ChangeStatus(int? id, string status)
        {
            throw new NotImplementedException();
        }

        public async Task<LocationModel> GetPositionWarehouseAsync(string code)
        {
            var query = this.dbSet
                .Include(p => p.WareHouse)
                .Where(p => p.Code == code)
                .Select(p => new LocationModel
                {
                    Address = p.Address,
                    Latitude=p.WareHouse.Latitude,
                    Longitude=p.WareHouse.Longitude
                });
            return await query.FirstAsync();
        }
       public async Task<int> GetRequestID(string code)
        {
            return await this.dbSet.Where(p => p.Code == code).Select(p => p.Id).FirstAsync();
        }
    }
}
