using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class Request
    {
		public string Id { get; set; }

		public DateTime PickingDate { get; set; }
		public DateTime DeliveryDate { get; set; }

		public string DeliveryAddress { get; set; }
		public int PackageQuantity { get; set; }

		public string Status { get; set; }

		public long IssuerId { get; set; }
		public string WareHouseId { get; set; }

		public User Issuer { get; set; }
		public WareHouse WareHouse { get; set; }
		
	}
}
