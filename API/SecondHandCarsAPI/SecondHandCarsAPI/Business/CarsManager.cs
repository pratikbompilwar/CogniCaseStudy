using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SecondHandCarsAPI.Model;

namespace SecondHandCarsAPI.Business
{
    public static class CarsManager
    {

        public static List<JCars.Vehicle> GetAllCars()
        {           

            using (StreamReader r = new StreamReader("Data/warehouses.json"))
            {
                
                List<JCars.Vehicle> allvehicales = new List<JCars.Vehicle>();

                string jsonStr = r.ReadToEnd();
              
                List<JCars.WareHouse> allWareHouseData = JsonConvert.DeserializeObject<List<JCars.WareHouse>>(jsonStr);

                foreach(JCars.WareHouse warehouse in allWareHouseData)
                {
                    allvehicales.AddRange(warehouse.cars.vehicles);
                }


                return allvehicales;
            }


        }

        public static List<JCars.WareHouse> GetAllData()
        {

            using (StreamReader r = new StreamReader("Data/warehouses.json"))
            {
                string jsonStr = r.ReadToEnd();

                List<JCars.WareHouse> allWareHouseData = JsonConvert.DeserializeObject<List<JCars.WareHouse>>(jsonStr);

                return allWareHouseData;
            }


        }

    }
}
