import java.util.*;
class Employee
{
public static void main (String args[])
{
int Eno;
String Ename;
float Esalary;
double Gross_salary;
Scanner sc=new Scanner(System.in);
System.out.println("enter the number");
Eno=sc.nextint();
System.out.println("enter the name");
Ename=sc.next();
System.put.println("enter the salary");
Esalary=sc.nextfloat();
float DA=(70*Esalary)/100;
double HRA=(30*Esalary)/100;
int CCA=240;
double PF=(10*Esalary)/100;
int PT=100;
Gross_salary=(DA+HRA+CCA)-PF-PT;
System.out.println("employee no="+Eno);
System.out.println("employee name="+Ename);
System.out.println("employee salary="+Esalary);
System.out.ptintln("empolyee gross salary"+Gross_salary);
}}