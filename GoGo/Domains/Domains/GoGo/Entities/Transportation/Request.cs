using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities
{
    public class Request
    {
		public int Id { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime PickingDate { get; set; }
		public DateTime DeliveryDate { get; set; }
        
		public double DeliveryLatitude { get; set; }
        public double DeliveryLongitude{ get; set; }

        public int PackageQuantity { get; set; }

        public string Code { set; get; }
		public string Status { get; set; }

		public long IssuerId { get; set; }
		public int WareHouseId { get; set; }

		public User Issuer { get; set; }
		public WareHouse WareHouse { get; set; }
		
	}
}
