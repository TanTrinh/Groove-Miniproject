using System.Collections.Generic;
using System.Text;

namespace Domains.GoGo.Entities.Fleet
{
    public class VehicleFeatureRequest
    {
		public int Id{ get; set; }

		public string RequestId { get; set; }
		public Request Request { get; set; }

		public int VehileFeatureId { get; set; }
		public VehicleFeature VehicleFeature { get; set; }
	}
}
