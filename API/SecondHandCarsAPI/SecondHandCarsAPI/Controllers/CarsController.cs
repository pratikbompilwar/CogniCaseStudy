﻿//using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using SecondHandCarsAPI.Business;
using SecondHandCarsAPI.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SecondHandCarsAPI.Controllers
{
    [System.Web.Http.Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        // GET: api/<CarsController>
        // Gets all the cars in all warehouse

        [Route("getallcars")]
        [HttpGet]
        public List<JCars.WareHouse> Get()
        {
           
            var result = CarsManager.GetAllCars();
            
            return result;
        }

        

    }
}
