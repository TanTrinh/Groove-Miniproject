using Groove.AspNetCore.EntityFramework;
using System;
using Domains.GoGo.Entities;
using System.Collections.Generic;
using System.Text;

namespace Infrastructures.EntityConfigurations.GoGo
{
	public class RequestConfig : EntityConfiguration<Request>
	{
		public override void OnConfigure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Request> builder)
		{
			builder.HasKey(p => p.Id);

			builder.HasOne(p => p.Issuer);
			builder.HasOne(p => p.WareHouse);
		}
	}
}
