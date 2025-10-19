"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BarChart3, PieChart, TrendingUp, Download, Calendar, Users, DollarSign, Clock } from "lucide-react";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState("overview");
  const [dateRange, setDateRange] = useState("last-30-days");

  const reportTypes = [
    { id: "overview", name: "Overview", icon: BarChart3 },
    { id: "attendance", name: "Attendance", icon: Clock },
    { id: "payroll", name: "Payroll", icon: DollarSign },
    { id: "employees", name: "Employees", icon: Users },
  ];

  const mockData = {
    overview: {
      totalEmployees: 45,
      activeEmployees: 42,
      newHires: 3,
      totalPayroll: 285000,
      avgAttendance: 94.5,
      departmentBreakdown: [
        { name: "IT", count: 15, percentage: 33.3 },
        { name: "Sales", count: 12, percentage: 26.7 },
        { name: "Marketing", count: 8, percentage: 17.8 },
        { name: "HR", count: 5, percentage: 11.1 },
        { name: "Finance", count: 5, percentage: 11.1 },
      ]
    },
    attendance: {
      averageAttendance: 94.5,
      onTimeRate: 87.2,
      lateArrivals: 12.8,
      absenteeism: 5.5,
      monthlyTrend: [
        { month: "Jul", attendance: 95.2 },
        { month: "Aug", attendance: 93.8 },
        { month: "Sep", attendance: 94.5 },
        { month: "Oct", attendance: 96.1 },
        { month: "Nov", attendance: 94.7 },
        { month: "Dec", attendance: 93.9 },
      ]
    },
    payroll: {
      totalPayroll: 285000,
      averageSalary: 6333,
      highestPaid: 12000,
      lowestPaid: 3500,
      salaryDistribution: [
        { range: "30k-40k", count: 8 },
        { range: "40k-60k", count: 15 },
        { range: "60k-80k", count: 12 },
        { range: "80k-100k", count: 7 },
        { range: "100k+", count: 3 },
      ]
    }
  };

  const renderOverviewReport = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">{mockData.overview.totalEmployees}</p>
            </div>
            <Users className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Employees</p>
              <p className="text-2xl font-bold text-green-600">{mockData.overview.activeEmployees}</p>
            </div>
            <TrendingUp className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Payroll</p>
              <p className="text-2xl font-bold text-purple-600">R{mockData.overview.totalPayroll.toLocaleString()}</p>
            </div>
            <DollarSign className="text-purple-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
              <p className="text-2xl font-bold text-teal-600">{mockData.overview.avgAttendance}%</p>
            </div>
            <Clock className="text-teal-500" size={32} />
          </div>
        </div>
      </div>

      {/* Department Breakdown */}
      <div  className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Department Breakdown</h3>
        <div className="space-y-4">
          {mockData.overview.departmentBreakdown.map((dept) => (
            <div key={dept.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-teal-500 rounded"></div>
                <span className={
                  dept.name === "IT" ? "font-medium text-blue-700" :
                  dept.name === "Sales" ? "font-medium text-pink-700" :
                  dept.name === "Marketing" ? "font-medium text-green-700" :
                  dept.name === "Finance" ? "font-medium text-purple-700" :
                  "font-medium text-gray-800"
                }>{dept.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{dept.count} employees</span>
                <span className="text-sm text-gray-500">{dept.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAttendanceReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Attendance</p>
              <p className="text-2xl font-bold text-green-600">{mockData.attendance.averageAttendance}%</p>
            </div>
            <Clock className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">On-Time Rate</p>
              <p className="text-2xl font-bold text-blue-600">{mockData.attendance.onTimeRate}%</p>
            </div>
            <TrendingUp className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold text-yellow-600">{mockData.attendance.lateArrivals}%</p>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absenteeism</p>
              <p className="text-2xl font-bold text-red-600">{mockData.attendance.absenteeism}%</p>
            </div>
            <Clock className="text-red-500" size={32} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Attendance Trend</h3>
        <div className="space-y-3">
          {mockData.attendance.monthlyTrend.map((month) => (
            <div key={month.month} className="flex items-center justify-between">
              <span className="font-medium text-black">{month.month}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-teal-500 h-2 rounded-full attendance-bar-width-${month.attendance}`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-black">{month.attendance}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPayrollReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Payroll</p>
              <p className="text-2xl font-bold text-green-600">R{mockData.payroll.totalPayroll.toLocaleString()}</p>
            </div>
            <DollarSign className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Salary</p>
              <p className="text-2xl font-bold text-blue-600">R{mockData.payroll.averageSalary.toLocaleString()}</p>
            </div>
            <TrendingUp className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Highest Paid</p>
              <p className="text-2xl font-bold text-purple-600">R{mockData.payroll.highestPaid.toLocaleString()}</p>
            </div>
            <TrendingUp className="text-purple-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lowest Paid</p>
              <p className="text-2xl font-bold text-orange-600">R{mockData.payroll.lowestPaid.toLocaleString()}</p>
            </div>
            <DollarSign className="text-orange-500" size={32} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Salary Distribution</h3>
        <div className="space-y-3">
          {mockData.payroll.salaryDistribution.map((range) => (
            <div key={range.range} className="flex items-center justify-between">
              <span className="font-medium text-black">{range.range}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-teal-500 h-2 rounded-full salary-bar-width-${Math.round((range.count / 45) * 100)}`}
                  ></div>
                </div>
                <span className="text-sm font-medium text-black">{range.count} employees</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEmployeeReport = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Employee Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Employee Growth</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Q1 2025:</span>
              <span className="font-medium text-black">+5 employees</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Q2 2025:</span>
              <span className="font-medium text-black">+3 employees</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Q3 2025:</span>
              <span className="font-medium text-black">+2 employees</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-3">Turnover Rate</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Annual Turnover:</span>
              <span className="font-medium text-black">8.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Voluntary Exits:</span>
              <span className="font-medium text-black">6.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Involuntary Exits:</span>
              <span className="font-medium text-black">2.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportContent = () => {
    switch (selectedReport) {
      case "overview":
        return renderOverviewReport();
      case "attendance":
        return renderAttendanceReport();
      case "payroll":
        return renderPayrollReport();
      case "employees":
        return renderEmployeeReport();
      default:
        return renderOverviewReport();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "black" }}>Reports & Analytics</h1>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-teal-600" size={20} />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                style={{ color: "black" }}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                
                title="Select date range"
              >
                <option value="last-7-days">Last 7 days</option>
                <option value="last-30-days">Last 30 days</option>
                <option value="last-90-days">Last 90 days</option>
                <option value="last-year">Last year</option>
              </select>
            </div>
            
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2">
              <Download size={20} />
              Export Report
            </button>
          </div>
        </div>

        {/* Report Type Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {reportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedReport(type.id)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    selectedReport === type.id
                      ? "bg-teal-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Report Content */}
        {renderReportContent()}
      </div>
    </div>
  );
}

