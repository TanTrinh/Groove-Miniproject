using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class ShipmentRequest
    {
		public string Id { get; set; }

		public int RequestOrder { get; set; }

		public string Status { get; set; }
		public string Note { get; set; }

		public string ShipmentId { get; set; }
		public string RequestId { get; set; }
		public long CustomerId { get; set; }

		public Shipment Shipment { get; set; }
		public Request Request { get; set; }
		public User Customer { get; set; }


	}
}
