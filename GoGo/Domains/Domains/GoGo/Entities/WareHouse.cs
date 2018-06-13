using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo
{
    public class WareHouse
    {
		public string Id { get; set; }

		public string PhoneNumber { get; set; }
		public string Address { get; set; }

		public long OwnerId { get; set; }
		public User Owner { get; set; }		
	}
}
