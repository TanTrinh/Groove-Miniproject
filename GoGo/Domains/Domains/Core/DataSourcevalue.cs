using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Core
{
	/// <summary>
	/// Dropdownlist/compobox,..
	/// </summary>
	/// <typeparam name="TKey"></typeparam>
    public class DataSourceValue<TKey>
    {
		public TKey Value { get; set; }
		public string DisplayName { get; set; }
    }
}
