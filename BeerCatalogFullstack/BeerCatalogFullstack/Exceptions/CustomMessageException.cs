using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.Exceptions
{
    public class CustomMessageException : Exception
    {
        public string ExceptionMessage { get; set; } = string.Empty;

        public CustomMessageException() : base() { }

        public CustomMessageException(string exceptionMessage) : base(exceptionMessage)
        {
            ExceptionMessage = exceptionMessage;
        }

        public CustomMessageException(string exceptionMessage, string message) : base(message)
        {
            ExceptionMessage = exceptionMessage;
        }

        public CustomMessageException(string exceptionMessage, string message, Exception innerException) : base(message, innerException)
        {
            ExceptionMessage = exceptionMessage;
        }
    }
}
