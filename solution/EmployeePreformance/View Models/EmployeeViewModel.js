function EmployeeViewModel() {
    var self = this;
    //Set up observables for each property within the Employee Model
    self.EmployeeID = ko.observable("");
    self.FirstName = ko.observable("");
    self.LastName = ko.observable("");
    self.Department = ko.observable("");
    self.JobTitle = ko.observable("");
    self.NINumber = ko.observable("");

    //Declare an employee object
    var Employee = {
        EmployeeID: self.EmployeeID,
        FirstName: self.FirstName,
        LastName: self.LastName,
        Department: self.Department,
        JobTitle: self.JobTitle,
        NINumber: self.NINumber
    };

    //Make Employee an observable so that we can do things to it
    self.Employee = ko.observable();
    //Set up a list of employees
    self.Employees = ko.observableArray();

    //Use some AJAX to call the GetAllEmployees method
    $.ajax({
        url: '@Url.Action("GetAllEmployees", "Employee")',
        cache: false,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        data: {},
        //If sucessful add returned JSON result to the Employees list
        success: function (data) {
            self.Employees(data);
        }
    });

    
    self.create = function () {
        //Sense Check - are all fields complete?
        if (Employee.FirstName() != "" && Employee.LastName() != "" && Employee.Department() != "" && Employee.JobTitle() != "" && Employee.NINumber() != "" && Employee.Country() != "") {
            $.ajax({
                //Call Create Employee Method
                url: '@Url.Action("CreateEmployee", "Employee")',
                cache: false,
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: ko.toJSON(Employee),
                //if sucessful, add data to employees list
                success: function (data) {
                    self.Employees.push(data);
                    self.FirstName("");
                    self.LastName("");
                    self.Department("");
                    self.JobTitle("");
                    self.NINumber("");
                }
                //if fail, show an alert box with the error
            }).fail(
                function (xhr, textStatus, err) {
                    alert(err);
                });
        } else {
            //if all fields arent comlpete, display alert box asking users to do so
            alert('All values must be complete to proceed.');
        }
    }

    // Delete employee
    self.delete = function (Employee) {
        if (confirm('Are you sure to Delete "' + Employee.FirstName + '" employee ??')) {
            var id = Employee.EmployeeID;
            $.ajax({
                //call delete employee method
                url: '@Url.Action("DeleteEmployee", "Employee")',
                cache: false,
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: ko.toJSON(id),
                success: function (data) {
                    //if sucessful, delete employee and show user an alert informating of sucess
                    self.Employees.remove(Employee);
                      alert("Record Deleted Successfully");
                }
            }).fail(
                //otherwise show alert with error message
                function (xhr, textStatus, err) {
                    alert(err);
                });
        }
    }

    // Edit employee
    self.edit = function (Employee) {
        self.Employee(Employee);
    }
    // Update employee
    self.update = function () {
        var Employee = self.Employee();
        alert(Employee.EmployeeID);
        debugger;
        $.ajax({
            //Call edit employee controller method
            url: '@Url.Action("EditEmployee", "Employee")',
            cache: false,
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            data: ko.toJSON(Employee),
            success: function (data) {
                //update the employee list with all the data - including updated employee
                alert(data);
                self.Employees.removeAll();
                self.Employees(data); //Put the response in ObservableArray
                self.Employee(null);
                alert("Record Updated Successfully");
            }
        })
            //if falure, show alert with error message
            .fail(
            function (xhr, textStatus, err) {
                alert(err);
            });
    }
}

//set up view model and apply bindings.
var viewModel = new EmployeeViewModel();
ko.applyBindings(viewModel);