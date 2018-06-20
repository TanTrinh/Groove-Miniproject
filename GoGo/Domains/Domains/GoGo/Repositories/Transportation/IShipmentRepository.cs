using Domains.GoGo.Entities;
using Domains.GoGo.Models.Transportation;
using Groove.AspNetCore.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domains.GoGo.Repositories.Transportation
{
	public interface IShipmentRepository : IGenericRepository<Shipment, int>
    {
        //Task CreateShipmentAsync(CreateShipmentModel model);
        Task<IEnumerable<ShipmentAssignedModel>> GetShipmentAssignedModel(long? id);
    }
}