using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Exceptions
{
    public class SignUpException : Exception
    {
        public IReadOnlyList<IdentityError> Errors { get; set; }

        public SignUpException(IReadOnlyList<IdentityError> errors)
        {
            Errors = errors;
        }

    }
}
