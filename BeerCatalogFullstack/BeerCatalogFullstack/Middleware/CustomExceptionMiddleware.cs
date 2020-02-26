using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Linq;
using System.Threading.Tasks;
using BeerCatalogFullstack.Exceptions;

namespace BeerCatalogFullstack.Middleware
{
    public class CustomExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly JsonSerializerSettings jsonSettings;

        public CustomExceptionMiddleware(RequestDelegate next)
        {
            this.next = next ?? throw new ArgumentNullException(nameof(next));

            jsonSettings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Formatting = Formatting.Indented,
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (SignUpException e)
            {
                if (context.Response.HasStarted)
                {
                    throw;
                }

                context.Response.StatusCode = 400;
                context.Response.Headers.Add("exception", "signUpException");
                string json = JsonConvert.SerializeObject(e.Errors.Select(error => error.Description), jsonSettings);
                await context.Response.WriteAsync(json);
            }
            catch (Exception e)
            {
                if (context.Response.HasStarted)
                {
                    throw;
                }

                context.Response.StatusCode = 500;
                context.Response.ContentType = "application/json";
                context.Response.Headers.Add("exception", "signInException");
                string json = JsonConvert.SerializeObject(new { e.Message }, jsonSettings);
                await context.Response.WriteAsync(json);
            }
        }
    }
}
