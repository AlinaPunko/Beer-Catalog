using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeerCatalogFullstack.Exceptions
{
    public class SignInException : Exception
    {
        public string ExceptionMessage { get; set; } = string.Empty;

        public SignInException() { }

        public SignInException(string exceptionMessage) : base(exceptionMessage)
        {
            ExceptionMessage = exceptionMessage;
        }

        public SignInException(string exceptionMessage, string message) : base(message)
        {
            ExceptionMessage = exceptionMessage;
        }

        public SignInException(string exceptionMessage, string message, Exception innerException) : base(message, innerException)
        {
            ExceptionMessage = exceptionMessage;
        }
    }
}
