using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class ShipmentRecord
    {
		public string Id { get; set; }

		public long CoordinatorId { get; set; }
		public User Coordinator { get; set; }

		public string ShipmentId { get; set; }
		public Shipment Shipment { get; set; }

		public string Status { get; set; }
		public string Note { get; set; }
	}
}
