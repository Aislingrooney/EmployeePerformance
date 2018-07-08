using System.Web.Mvc;
using EmployeePreformance.Models;

namespace EmployeePreformance.Controllers
{
    public class EmployeeController : Controller
    {
        static readonly IEmployeeRepository repository = new EmployeeRepository();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllEmployees()
        {
            //use JSON to get all employees from repository
            return Json(repository.GetAll(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult CreateEmployee(Employee item)
        {
            //Call add method in repository and return item added as JSON result to be displayed on screen
            item = repository.Add(item);
            return Json(item, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EditEmployee(int EmployeeID, Employee employee)        
        {
            //Find employee with ID Passed to method, call update method in repository return JSON result which displays all employees
            employee.EmployeeID = EmployeeID;
            if (repository.Update(employee))
            {
                return Json(repository.GetAll(), JsonRequestBehavior.AllowGet);
            }
            return Json(null);        
        }

        public JsonResult Delete(int id)
        {
            //Call the delete method in repository, it sucess, return true, otherwise return false
            if (repository.Delete(id))            
            {
                return Json(new { Status = true }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { Status = false }, JsonRequestBehavior.AllowGet);
        }
    }
}