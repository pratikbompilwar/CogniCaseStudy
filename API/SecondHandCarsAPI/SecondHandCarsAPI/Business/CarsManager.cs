using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SecondHandCarsAPI.Model;

namespace SecondHandCarsAPI.Business
{
    public static class CarsManager
    {

        public static List<JCars.WareHouse> GetAllCars()
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
