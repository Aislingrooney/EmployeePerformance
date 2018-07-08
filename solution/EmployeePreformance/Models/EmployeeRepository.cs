using System;
using System.Collections.Generic;

namespace EmployeePreformance.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private List<Employee> employeeList = new List<Employee>();
        private int _nextId = 1;
        public EmployeeRepository()
        {
            employeeList.Add(new Employee { EmployeeID = 1, FirstName = "Anna", LastName = "Smyth", Department = "IT", JobTitle = "CIO", NINumber = "AB123456C" });
            employeeList.Add(new Employee { EmployeeID = 2, FirstName = "Lucy", LastName = "Donnelly", Department = "Human Resources", JobTitle = "Payrole Manager", NINumber = "DE789012F"});
            employeeList.Add(new Employee { EmployeeID = 3, FirstName = "Mike", LastName = "Matthews", Department = "Finance", JobTitle = "Financial Admin", NINumber = "GH345678I"});
            employeeList.Add(new Employee { EmployeeID = 4, FirstName = "John", LastName = "Williamson", Department = "IT", JobTitle = "Infrastructure", NINumber = "JK901234L"});
            employeeList.Add(new Employee { EmployeeID = 5, FirstName = "Katy", LastName = "Katyson", Department = "IT", JobTitle = "Software Developer", NINumber = "MN567890O"});
            employeeList.Add(new Employee { EmployeeID = 6, FirstName = "Leah", LastName = "Neeson", Department = "Human Resources", JobTitle = "Head of Human Resources", NINumber = "PQ1234556R"});
            employeeList.Add(new Employee { EmployeeID = 7, FirstName = "Paul", LastName = "Adams", Department = "Finance", JobTitle = "Accountant", NINumber = "ST789012U"});
            employeeList.Add(new Employee { EmployeeID = 8, FirstName = "Joe", LastName = "Campbell", Department = "Marketing", JobTitle = "Head of Marketing", NINumber = "VW345678X"});
            employeeList.Add(new Employee { EmployeeID = 9, FirstName = "Jane", LastName = "Craig", Department = "Marketing", JobTitle = "Marketing Analyst", NINumber = "YZ901234A"});
        }
        public Employee Get(int id)
        {
            //Find employee with ID passed into method and return for display
            return employeeList.Find(p => p.EmployeeID == id);
        }
        public IEnumerable<Employee> GetAll()
        {
            //Return all employees 
            return employeeList;
        }
        public Employee Add(Employee item)
        {
            //if item passed to method is empty, throw exception
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            //otherwise add employee to list and return new ID for employee
            item.EmployeeID = _nextId++;
            employeeList.Add(item);
            return item;
        }
        public bool Update(Employee item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            //Find employee with ID which has been passed into method
            int index = employeeList.FindIndex(p => p.EmployeeID == item.EmployeeID);
            //if no record can be found return a false result
            if (index == -1)
            {
                return false;
            }
            //otherwise remove relevant employee from list and add the details in its position
            employeeList.RemoveAt(index);
            employeeList.Insert(index, item);
            return true;
        }
        public bool Delete(int id)
        {
            // Remove employee with ID passed from list.
            employeeList.RemoveAll(p => p.EmployeeID == id);
            return true;
        }
    }
}