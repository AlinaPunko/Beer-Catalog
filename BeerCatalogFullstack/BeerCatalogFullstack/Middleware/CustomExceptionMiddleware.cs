using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BeerCatalogFullstack.Middleware
{
    public class CustomExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly JsonSerializerSettings _jsonSettings;

        public CustomExceptionMiddleware(RequestDelegate next)
        {
            this.next = next ?? throw new ArgumentNullException(nameof(next));

            _jsonSettings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Formatting = Formatting.Indented,
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public async Task Invoke(HttpContext context)
        {
            //try
            //{
            //    await next(context);
            //}
            //catch (RulesException re)
            //{
            //    if (context.Response.HasStarted)
            //    {
            //        throw;
            //    }

            //    context.Response.StatusCode = 400;
            //    context.Response.Headers.Add("exception", "validationException");
            //    var modelState = new ModelStateDictionary();
            //    re.AddModelStateErrors(modelState);
            //    var json = JsonConvert.SerializeObject(modelState.Errors(true), _jsonSettings);
            //    await context.Response.WriteAsync(json);
            //}
            //catch (CustomMessageException cm)
            //{
            //    if (context.Response.HasStarted)
            //    {
            //        throw;
            //    }

            //    context.Response.StatusCode = 500;
            //    context.Response.ContentType = "application/json";
            //    context.Response.Headers.Add("exception", "messageException");
            //    var json = JsonConvert.SerializeObject(new { Message = cm.ExceptionMessage }, _jsonSettings);
            //    await context.Response.WriteAsync(json);
            //}
        }
    }
}
