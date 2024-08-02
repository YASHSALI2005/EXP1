import java.util.Scanner;

public class SalaryCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Input
        System.out.print("Enter employee number: ");
        int empno = scanner.nextInt();
        
        System.out.print("Enter employee name: ");
        String empname = scanner.next();  // Assuming single word name
        
        System.out.print("Enter basic salary: ");
        double basic = scanner.nextDouble();
        
        // Constants for calculations
        double DA = 0.7 * basic;
        double HRA = 0.3 * basic;
        double CCA = 240;
        double PF = 0.1 * basic;
        double PT = 100;
        
        // Calculating gross salary
        double grossSalary = basic + DA + HRA + CCA;
        
        // Calculating net salary
        double netSalary = grossSalary - PF - PT;
        
        // Output
        System.out.println("\nEmployee Details:");
        System.out.println("Employee Number: " + empno);
        System.out.println("Employee Name: " + empname);
        System.out.println("Basic Salary: Rs." + basic);
        System.out.println("DA: Rs." + DA);
        System.out.println("HRA: Rs." + HRA);
        System.out.println("CCA: Rs." + CCA);
        System.out.println("PF: Rs." + PF);
        System.out.println("PT: Rs." + PT);
        System.out.println("----------------------------");
        System.out.println("Gross Salary: Rs." + grossSalary);
        System.out.println("Net Salary: Rs." + netSalary);
        
        scanner.close();
    }
}
