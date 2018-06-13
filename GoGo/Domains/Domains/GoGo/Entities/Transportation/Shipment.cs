using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class Shipment
    {
		public string Id { get; set; }

		public int RequestQuantity { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public int VehicleId { get; set; }
		public Vehicle Vehicle { get; set; }

		public long DriverId { get; set; }	
		public User Driver { get; set; }
	}
}
