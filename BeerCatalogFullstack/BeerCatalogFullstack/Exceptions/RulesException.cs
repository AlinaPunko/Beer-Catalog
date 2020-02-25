using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.Exceptions
{
    [Serializable]
    public class RulesException : Exception
    {
        private readonly List<ErrorInfo> errors;

        public RulesException(string propertyName, string errorMessage, string prefix = "")
        {
            errors = Errors;
            errors.Add(new ErrorInfo($"{prefix}{propertyName}", errorMessage));
        }

        public RulesException(string propertyName, string errorMessage, object onObject, string prefix = "")
        {
            errors = Errors;
            errors.Add(new ErrorInfo($"{prefix}{propertyName}", errorMessage, onObject));
        }

        public RulesException()
        {
            errors = Errors;
        }

        public RulesException(List<ErrorInfo> errors)
        {
            this.errors = errors;
        }

        public List<ErrorInfo> Errors
        {
            get
            {
                return errors ?? new List<ErrorInfo>();
            }
        }
    }
}
