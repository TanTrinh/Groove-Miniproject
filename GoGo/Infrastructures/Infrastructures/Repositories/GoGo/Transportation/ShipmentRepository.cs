using AutoMapper;
using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Domains.GoGo.Repositories.Transportation;
using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using System;
using System.Collections.Generic;
using Groove.AspNetCore.DataBinding.AutoMapperExtentions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Domains.GoGo.Models;

namespace Infrastructures.Repositories.GoGo.Transportation
{
    public class ShipmentRepository : GenericRepository<Shipment, int>, IShipmentRepository
    {
        private readonly IMapper _mapper;
        private readonly IShipmentRequestRepository _shipmentRequestRepository;
        public ShipmentRepository(IMapper mapper, IShipmentRequestRepository shipmentRequestRepository, IUnitOfWorkContext uoWContext) : base(uoWContext)
        {
            _mapper = mapper;
            _shipmentRequestRepository = shipmentRequestRepository;
        }
        public async Task<string> ChangeStatus(string code, string status)
        {
            try
            {
                var shipment = await this.dbSet.Where(p => p.Code == code).FirstAsync();
                shipment.Status = status;
                this.context.Update(shipment);
                await this.context.SaveChangesAsync();
                return shipment.Status;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        public async Task<IEnumerable<ShipmentViewModel>> GetShipmentAssignedModel(long? id)
        {
            var query = this.dbSet
                        .Include(p => p.Vehicle)
                        .Where(p => p.DriverId == id)
                        .Select(p => new ShipmentViewModel
                        {
                            Code = p.Code,
                            LicensePlate = p.Vehicle.LicensePlate,
                            EndDate = p.EndDate,
                            StartDate = p.StartDate,
                            VehicleID = p.VehicleId,
                            RequestQuality = p.RequestQuantity,
                            Status = p.Status,
                            
                        });
            return await query.ToListAsync();
        }


        public async Task<ShipmentViewModel> GetShipmentAsync(string code)
        {
            int totalPackage = _shipmentRequestRepository.GetTotalRequest(code);
            var query = this.dbSet
                        .Include(p => p.Vehicle)
                        .Where(p => p.Code == code)
                        .Select(p => new ShipmentViewModel
                        {
                            Code = p.Code,
                            StartDate = p.StartDate,
                            EndDate = p.EndDate,
                            Status = p.Status,
                            RequestQuality = p.RequestQuantity,
                            LicensePlate = p.Vehicle.LicensePlate,
                            PackageQuality = totalPackage
                        });
            return await query.FirstAsync();
        }
    }
}
