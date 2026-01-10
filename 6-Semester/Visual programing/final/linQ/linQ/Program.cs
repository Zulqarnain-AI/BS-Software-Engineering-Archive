// This example demonstrates how to use LINQ to query a DataSet in C#.
//class Program
//{
//    static void Main(String[] args)
//    {
//        int[] age = { 21, 34, 11, 47, 20, 18, 30 };
//        var a = from i in age where i < 20 select i;
//        foreach (var i in a)
//        {
//            Console.Write(i + "\n");
//        }
//        //var b = from i in age orderby i ascending select i;  
//        //Console.WriteLine(b);  
//        //foreach (var i in b)  
//        //{   
//        //    Console.Write(i + " ");  
//        //}  
//    }
//}

// This example demonstrates how to use LINQ to query a DataSet in C#.
//using System;
//using System.Data;
//using System.Linq;

//class Program
//{
//    static void Main()
//    {
//        DataSet ds = new DataSet();
//        DataTable dt = new DataTable("Employees");
//        dt.Columns.Add("Id", typeof(int));
//        dt.Columns.Add("Name", typeof(string));
//        dt.Columns.Add("Salary", typeof(double));

//        // Add some sample data 
//        dt.Rows.Add(1, "Ali", 50000);
//        dt.Rows.Add(2, "Sara", 60000);
//        dt.Rows.Add(3, "Ahmed", 45000);
//        ds.Tables.Add(dt);

//        var highSalaryEmployees = from row in ds.Tables["Employees"].AsEnumerable()
//                                  where row.Field<double>("Salary") <= 50000
//                                  select row;

//        foreach (var row in highSalaryEmployees)
//        {
//            //Console.WriteLine($"ID: {row["Id"]}, Name: {row["Name"]},Salary: { row["Salary"]} "); 
//            Console.WriteLine(row["id"] + " " + row["name"] + " " + row["salary"]);
//        }
//    }
//}


using DataAccessLayer;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Linq;
using System.Xml.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;

class Program
{
    static void Main()
    {
        string xmlData = @" 
        <Employees> 
            <Employee> 
                <Id>1</Id> 
                <Name>Ali</Name> 
                <Salary>50000</Salary> 
            </Employee> 
            <Employee> 
                <Id>2</Id> 
                <Name>Sara</Name> 
                <Salary>60000</Salary> 
            </Employee> 
        </Employees>";

        XDocument doc = XDocument.Parse(xmlData);

        var highSalaryEmployees = from emp in doc.Descendants("Employee")
                                  where (double)emp.Element("Salary") >50000
                                  select new
                                  {
                                      Id = emp.Element("Id").Value,
                                      Name = emp.Element("Name").Value,
                                      Salary = emp.Element("Salary").Value
                                  };

        foreach (var emp in highSalaryEmployees)
        {
            Console.WriteLine($"ID: {emp.Id}, Name: {emp.Name}, Salary:{ emp.Salary}"); 
        }
    }
}







// Data Access Layer - DataAccessLayer.cs (Class Library) 
using System; 
using System.Data.SqlClient; 
namespace DataAccessLayer
{
    public class DataAccess
    {
        private string connectionString = "your_connection_string_here";
        public string GetCustomerData(int customerId)
        {
            string customerName = string.Empty;
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                @CustomerID"; 
            string query = "SELECT Name FROM Customers WHERE CustomerID = 
            SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@CustomerID", customerId);
                connection.Open();
                customerName = command.ExecuteScalar()?.ToString();
            }
            return customerName;
        }
    }
} 
 
// Business Layer - BusinessLayer.cs (Class Library) 
using System; 
using DataAccessLayer; 
 
namespace BusinessLayer
{
    public class CustomerBusiness
    {
        private DataAccess dataAccess = new DataAccess();

        public string GetCustomerName(int customerId)
        {
            return dataAccess.GetCustomerData(customerId);
        }
    }
} 
 
// Presentation Layer - Form1.cs (Windows Forms Application) 
using System; 
using System.Windows.Forms; 
using BusinessLayer; 
 
namespace PresentationLayer



