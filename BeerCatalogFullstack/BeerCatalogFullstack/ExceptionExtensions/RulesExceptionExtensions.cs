using BeerCatalogFullstack.Exceptions;
using Nancy.Extensions;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BeerCatalogFullstack.ExceptionExtensions
{
    public static class RulesExceptionExtensions
    {
        public static void AddModelStateErrors(this RulesException ex, ModelStateDictionary modelState)
        {
            foreach (var error in ex.Errors)
            {
                modelState.AddModelError(error.PropertyName, error.ErrorMessage);
            }
        }

        public static void AddModelStateErrors(this IEnumerable<RulesException> errors, ModelStateDictionary modelState)
        {
            foreach (RulesException ex in errors)
            {
                ex.AddModelStateErrors(modelState);
            }
        }

        public static IEnumerable Errors(this ModelStateDictionary modelState)
        {
            if (!modelState.IsValid)
            {
                return modelState.ToDictionary(kvp => kvp.Key.ToCamelCase(),
                    kvp => kvp.Value
                        .Errors
                        .Select(e => e.ErrorMessage).ToArray())
                        .Where(m => m.Value.Count() > 0);
            }
            return null;
        }

        public static IEnumerable Errors(this ModelStateDictionary modelState, bool fixName = false)
        {
            if (!modelState.IsValid)
            {
                return modelState.ToDictionary(kvp => fixName ? kvp.Key.Replace("model.", string.Empty).ToCamelCase() : kvp.Key.ToCamelCase(),
                    kvp => kvp.Value
                        .Errors
                        .Select(e => string.IsNullOrWhiteSpace(e.ErrorMessage) ? "Invalid value entered." : e.ErrorMessage).ToArray())
                        .Where(m => m.Value.Count() > 0);
            }
            return null;
        }
    }
}
