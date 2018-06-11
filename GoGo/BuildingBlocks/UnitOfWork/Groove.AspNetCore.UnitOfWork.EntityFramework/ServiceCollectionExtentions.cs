using Groove.AspNetCore.UnitOfWork;
using Groove.AspNetCore.UnitOfWork.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceCollectionExtentions
    {
        public static void AddUnitOfWork<TDbContext>(this IServiceCollection services) where TDbContext : DbContext, IUnitOfWorkContext
        {
            services.AddScoped<IUnitOfWorkContext, TDbContext>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

    }
}
