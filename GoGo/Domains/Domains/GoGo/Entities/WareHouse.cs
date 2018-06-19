﻿using Domains.Identity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo
{
    public class WareHouse
    {
		public int Id { get; set; }

        public string NameWarehouse { set; get; }
		public string PhoneNumber { get; set; }
		public double Latitude { get; set; }
        public double Longitude{ get; set; }

        public long OwnerId { get; set; }
		public User Owner { get; set; }		
	}
}
