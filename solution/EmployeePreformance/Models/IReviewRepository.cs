namespace EmployeePreformance.Models
{
    interface IReviewRepository
    {
        Review Add(Review item);
        bool Delete(int id);
        Review Get(int id);
        System.Collections.Generic.IEnumerable<Review> GetAll();
        bool Update(Review item);
    }
}