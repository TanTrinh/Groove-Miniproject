using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Core
{
    public class ShipmentStatus
    {
        public const string INACTIVE = "INACTIVE";
        public const string PENDING = "PENDING";
        public const string ACCEPTED = "ACCEPTED";
        public const string REJECTED = "REJECTED";
        public const string LOADING = "LOADING";
        public const string SHIPPING = "SHIPPING";
        public const string COMPLETED = "COMPLETED";
    }

    public class ShipmentRequestStatus
    {
        public const string INACTIVE = "INACTIVE";
        public const string CREATED = "CREATED";
        public const string UPDATED = "UPDATED";

        public const string PENDING = "PENDING";
        public const string SHIPPING = "SHIPPING";
        public const string UNLOADING = "UNLOADING";
        public const string COMPLETED = "COMPLETED";
    }

    public class RequestStatus
    {
        public const string INACTIVE = "INACTIVE";
    }
}
