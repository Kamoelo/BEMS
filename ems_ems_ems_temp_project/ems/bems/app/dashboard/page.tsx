"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Users, DollarSign, Clock, TrendingUp, Calendar, CheckCircle, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");

  const stats = {
    totalEmployees: 5,
    activeEmployees: 4,
    totalPayroll: 285000,
    avgAttendance: 94.5,
    newHires: 3,
    pendingTasks: 7
  };

  const recentActivities = [
    { id: 1, type: "hire", message: "John Smith joined as Software Engineer", time: "2 hours ago" },
  { id: 2, type: "payroll", message: "Payroll processed for October 2025", time: "1 day ago" },
    { id: 3, type: "attendance", message: "Attendance report generated", time: "2 days ago" },
    { id: 4, type: "update", message: "Employee data updated for 5 employees", time: "3 days ago" }
  ];

  const upcomingEvents = [
  { id: 1, title: "Payroll Processing", date: "Oct 30, 2025", type: "payroll" },
  { id: 2, title: "Performance Reviews", date: "Oct 05, 2025", type: "review" },
  { id: 3, title: "Team Meeting", date: "Oct 08, 2025", type: "meeting" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
          
          {/* Period Selector */}
          <div className="mt-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              title="Select period"
            >
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-quarter">This Quarter</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEmployees}</p>
                <p className="text-xs text-green-600">+{stats.newHires} new this month</p>
              </div>
              <Users className="text-blue-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Employees</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeEmployees}</p>
                <p className="text-xs text-gray-500">{((stats.activeEmployees / stats.totalEmployees) * 100).toFixed(1)}% active rate</p>
              </div>
              <TrendingUp className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Payroll</p>
                <p className="text-2xl font-bold text-purple-600">R{stats.totalPayroll.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Average: R{Math.round(stats.totalPayroll / stats.totalEmployees).toLocaleString()}</p>
              </div>
              <DollarSign className="text-purple-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                <p className="text-2xl font-bold text-teal-600">{stats.avgAttendance}%</p>
                <p className="text-xs text-green-600">+2.3% from last month</p>
              </div>
              <Clock className="text-teal-500" size={32} />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {activity.type === "hire" && <Users className="text-blue-500" size={20} />}
                    {activity.type === "payroll" && <DollarSign className="text-green-500" size={20} />}
                    {activity.type === "attendance" && <Clock className="text-orange-500" size={20} />}
                    {activity.type === "update" && <CheckCircle className="text-teal-500" size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events & Quick Actions */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <Calendar className="text-teal-500" size={16} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 flex items-center justify-center gap-2">
                  <Users size={16} />
                  Add Employee
                </button>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                  <Clock size={16} />
                  Mark Attendance
                </button>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                  <DollarSign size={16} />
                  Process Payroll
                </button>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="text-yellow-500 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Pending Tasks</p>
                    <p className="text-xs text-yellow-600">{stats.pendingTasks} tasks require attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-sm font-medium text-blue-800">System Status</p>
                    <p className="text-xs text-blue-600">All systems operational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
