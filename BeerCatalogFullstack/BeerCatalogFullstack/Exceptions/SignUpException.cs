using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace BeerCatalogFullstack.Exceptions
{
    public class SignUpException : Exception
    {
        private readonly List<IdentityError> errors;

        public SignUpException(List<IdentityError> errors)
        {
            this.errors = errors;
        }

        public List<IdentityError> Errors => errors ?? new List<IdentityError>();
    }
}
