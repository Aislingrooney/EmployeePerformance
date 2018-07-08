function ReviewViewModel() {
    var self = this;
    //set up observables for each of the properties in a review object
    self.ReviewID = ko.observable("");
    self.EmployeeID = ko.observable("");
    self.ReviewNotes = ko.observable("");

    //set up a review object
    var Review = {
        ReviewID: self.ReviewID,
        EmployeeID: self.EmployeeID,
        ReviewNotes: self.ReviewNotes
    };

    //make review object an observable so we can do things to it
    self.Review = ko.observable();
    //make a list of reviews
    self.Reviews = ko.observableArray();

    //use some ajax to go to the controller and get all avaulable reviews
    $.ajax({
        url: '@Url.Action("GetAllReviews", "Review")',
        cache: false,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        data: {},
        success: function (data) {
            self.Reviews(data);
        }
    });

    //function to create reviews
    self.create = function () {
        //some sanity checking - make sure values are not null before doing anything
        if (Review.EmployeeID() != "" && Review.ReviewNotes() != "") {
            //aajax call to add a review
            $.ajax({
                url: '@Url.Action("CreateReview", "Review")',
                cache: false,
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: ko.toJSON(Review),
                success: function (data) {
                    //data is a review, here we want to add it to our list of reviews
                    self.Reviews.push(data);
                    self.EmployeeID("");
                    self.ReviewNotes("");
                }
                //if it fails, we display an alert with the error message
            }).fail(
                function (xhr, textStatus, err) {
                    alert(err);
                });
        } else {
            //if any inputed values are null, display an alert telling user to input all data
            alert('Employee Number and Review Notes must have a value to proceed.');
        }
    }

    // Edit Review
    self.edit = function (Review) {
        self.Review(Review);
    }
    //// Update Review
    self.update = function () {
        var Review = self.Review();
        //Show an alert with the review ID in which the user is about to edit
        alert(Review.ReviewID);
        debugger;
        $.ajax({
            //Call edit review method to edit the review
            url: '@Url.Action("EditReview", "Review")',
            cache: false,
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            data: ko.toJSON(Review),
            //if this is sucessful, add new information to review list 
            success: function (data) {
                alert(data);
                self.Reviews.removeAll();
                self.Reviews(data);
                self.Review(null);
                //inform users update was sucessful
                alert("Record Updated Successfully");
            }
        })
            //if it wasnt sucessful - display an alert with the error message
            .fail(
            function (xhr, textStatus, err) {
                alert(err);
            });
    }
}