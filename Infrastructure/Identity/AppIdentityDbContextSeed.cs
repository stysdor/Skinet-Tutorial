﻿using Core.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "bob@test.com",
                    Address = new Address 
                    {
                        FirstName = "Bob",
                        LastName = "Bobity",
                        City = "New York",
                        ZipCode = "90210",
                        Street = "10 The Street"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        
        }
    }
}
