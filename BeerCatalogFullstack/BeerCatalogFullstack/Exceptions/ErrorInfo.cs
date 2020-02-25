using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.Exceptions
{
    public class ErrorInfo
    {
        private readonly object onObject;

        public ErrorInfo(string propertyName, string errorMessage)
        {
            this.PropertyName = propertyName;
            this.ErrorMessage = errorMessage;
            onObject = null;
        }

        public ErrorInfo(string propertyName, string errorMessage, object onObject)
        {
            this.PropertyName = propertyName;
            this.ErrorMessage = errorMessage;
            this.onObject = onObject;
        }

        public string ErrorMessage { get; }

        public string PropertyName { get; }
    }
}
