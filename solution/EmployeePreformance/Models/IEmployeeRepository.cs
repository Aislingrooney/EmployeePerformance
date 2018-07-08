namespace EmployeePreformance.Models
{
    interface IEmployeeRepository
    {
        Employee Add(Employee item);
        bool Delete(int id);
        Employee Get(int id);
        System.Collections.Generic.IEnumerable<Employee> GetAll();
        bool Update(Employee item);
    }
}