using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class ProblemMessage
    {
		public string Id { get; set; }

		public string ShipmentId { get; set; }
		public Shipment Shipment { get; set; }

		public string Message { get; set; }
	}
}
