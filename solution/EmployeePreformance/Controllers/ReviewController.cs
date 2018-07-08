using System.Web.Mvc;
using EmployeePreformance.Models;

namespace EmployeePreformance.Controllers
{
    public class ReviewController : Controller
    {
        static readonly IReviewRepository repository = new ReviewRepository();
        
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult GetAllReviews()
        {
            //return a JSON result with all abailable reviews
            return Json(repository.GetAll(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult CreateReview(Review item)
        {
            //use add method in repository to add review, return new review as JSON result
            item = repository.Add(item);
            return Json(item, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EditReview(int ReviewID, Review Review)
        {
            //Update review which has the ID passed into method, return all reviews once this is complete, otherwise, return null value.
            Review.ReviewID = ReviewID;
            if (repository.Update(Review))
            {
                return Json(repository.GetAll(), JsonRequestBehavior.AllowGet);
            }
            return Json(null);
        }
    }
}