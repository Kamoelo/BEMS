"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { DollarSign, Download, Eye, Calendar, TrendingUp } from "lucide-react";

interface PayrollRecord {
  id: number;
  employeeName: string;
  employeeId: string;
  position: string;
  baseSalary: number;
  overtime: number;
  bonuses: number;
  deductions: number;
  netPay: number;
  payPeriod: string;
  status: "paid" | "pending" | "processing";
}

export default function PayrollPage() {
  const [selectedMonth, setSelectedMonth] = useState("2025-10");
  
  const [payrollRecords] = useState<PayrollRecord[]>([
    {
      id: 1,
      employeeName: "John Doe",
      employeeId: "EMP001",
      position: "Software Engineer",
      baseSalary: 6250,
      overtime: 500,
      bonuses: 1000,
      deductions: 750,
      netPay: 7000,
  payPeriod: "October 2025",
      status: "paid"
    },
    {
      id: 2,
  employeeName: "Ntokozo",
      employeeId: "EMP002",
      position: "HR Manager",
      baseSalary: 5417,
      overtime: 0,
      bonuses: 500,
      deductions: 650,
      netPay: 5267,
  payPeriod: "October 2025",
      status: "paid"
    },
    {
      id: 3,
  employeeName: "Yomelelani",
      employeeId: "EMP003",
      position: "Marketing Specialist",
      baseSalary: 4583,
      overtime: 200,
      bonuses: 300,
      deductions: 550,
      netPay: 4533,
  payPeriod: "October 2025",
      status: "processing"
    },
    {
      id: 4,
  employeeName: "Siya",
      employeeId: "EMP004",
      position: "Designer",
      baseSalary: 5000,
      overtime: 150,
      bonuses: 400,
      deductions: 600,
      netPay: 4950,
  payPeriod: "October 2025",
      status: "pending"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalPayroll = payrollRecords.reduce((sum, record) => sum + record.netPay, 0);
  const totalEmployees = payrollRecords.length;
  const averageSalary = totalPayroll / totalEmployees;
  const paidEmployees = payrollRecords.filter(r => r.status === "paid").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Payroll Management</h1>
          
          {/* Month Selector */}
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="text-teal-600" size={24} />
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              title="Select month"
              style={{color: "black"}}
              placeholder="Select month"
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Payroll</p>
                <p className="text-2xl font-bold text-gray-900">R{totalPayroll.toLocaleString()}</p>
              </div>
              <DollarSign className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Employees</p>
                <p className="text-2xl font-bold text-blue-600">{totalEmployees}</p>
              </div>
              <TrendingUp className="text-blue-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Salary</p>
                <p className="text-2xl font-bold text-purple-600">R{Math.round(averageSalary).toLocaleString()}</p>
              </div>
              <DollarSign className="text-purple-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Paid</p>
                <p className="text-2xl font-bold text-green-600">{paidEmployees}/{totalEmployees}</p>
              </div>
              <DollarSign className="text-green-500" size={32} />
            </div>
          </div>
        </div>

        {/* Payroll Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Payroll Records</h2>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2">
              <Download size={20} />
              Export Report
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Employee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Position</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Base Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Overtime</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bonuses</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Deductions</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Net Pay</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payrollRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{record.employeeName}</p>
                        <p className="text-xs text-gray-500">{record.employeeId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{record.position}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">R{record.baseSalary.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">R{record.overtime.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-green-600">R{record.bonuses.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-red-600">-R{record.deductions.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">R{record.netPay.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-800" title="Download Payslip">
                          <Download size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payroll Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payroll Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Base Salaries:</span>
                <span className="font-medium text-black">R{payrollRecords.reduce((sum, r) => sum + r.baseSalary, 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Overtime:</span>
                <span className="font-medium text-black">R{payrollRecords.reduce((sum, r) => sum + r.overtime, 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Bonuses:</span>
                <span className="font-medium text-green-600">R{payrollRecords.reduce((sum, r) => sum + r.bonuses, 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Deductions:</span>
                <span className="font-medium text-red-600">-R{payrollRecords.reduce((sum, r) => sum + r.deductions, 0).toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold text-black">
                <span className="text-black">Net Payroll:</span>
                <span className="text-black font-bold">R{totalPayroll.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 flex items-center justify-center gap-2">
                <DollarSign size={20} />
                Process Payroll
              </button>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <Download size={20} />
                Generate Payslips
              </button>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <Calendar size={20} />
                View Tax Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

