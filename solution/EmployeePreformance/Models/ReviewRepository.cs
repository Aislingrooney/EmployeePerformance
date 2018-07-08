using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeePreformance.Models
{
    public class ReviewRepository : IReviewRepository
    {
        private List<Review> reviewList = new List<Review>();
        private int _nextId = 1;
        public ReviewRepository()
        {

            // Add reviews records to display
            reviewList.Add(new Review { ReviewID = 1, EmployeeID = 1, ReviewNotes = "Training Needed" });
            reviewList.Add(new Review { ReviewID = 2, EmployeeID = 2, ReviewNotes = "No Action Required" });
            reviewList.Add(new Review { ReviewID = 3, EmployeeID = 3, ReviewNotes = "Follow up in 4 months" });
            reviewList.Add(new Review { ReviewID = 4, EmployeeID = 4, ReviewNotes = "Training Needed" });
            reviewList.Add(new Review { ReviewID = 5, EmployeeID = 5, ReviewNotes = "Training Needed" });
            reviewList.Add(new Review { ReviewID = 6, EmployeeID = 6, ReviewNotes = "Training Needed" });
            reviewList.Add(new Review { ReviewID = 7, EmployeeID = 7, ReviewNotes = "Training Needed" });
            reviewList.Add(new Review { ReviewID = 8, EmployeeID = 8, ReviewNotes = "No Action Required" });
            reviewList.Add(new Review { ReviewID = 9, EmployeeID = 9, ReviewNotes = "No Action Required" });
        }
        public Review Get(int id)
        {
            // Code to find a record in database
            return reviewList.Find(p => p.ReviewID == id);
        }
        public IEnumerable<Review> GetAll()
        {
            // Code to get the list of all the records in database
            return reviewList;
        }
        public Review Add(Review item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            // Code to save record into database
            item.ReviewID = _nextId++;
            reviewList.Add(item);
            return item;
        }
        public bool Update(Review item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            // Code to update record into database
            int index = reviewList.FindIndex(p => p.ReviewID == item.ReviewID);
            if (index == -1)
            {
                return false;
            }
            reviewList.RemoveAt(index);
            reviewList.Insert(index, item);
            return true;
        }
        public bool Delete(int id)
        {
            // Code to remove the records from database
            reviewList.RemoveAll(p => p.ReviewID == id);
            return true;
        }
    }
}