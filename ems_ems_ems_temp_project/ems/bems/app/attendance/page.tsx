"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Calendar, Clock, CheckCircle, XCircle, Users } from "lucide-react";

interface AttendanceRecord {
  id: number;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "present" | "absent" | "late";
  hoursWorked: number;
}

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [attendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: 1,
      employeeName: "John Doe",
      date: "2025-10-15",
      checkIn: "09:00",
      checkOut: "17:30",
      status: "present",
      hoursWorked: 8.5
    },
    {
      id: 2,
  employeeName: "Ntokozo",
      date: "2025-10-15",
      checkIn: "09:15",
      checkOut: "17:45",
      status: "late",
      hoursWorked: 8.5
    },
    {
      id: 3,
  employeeName: "Yomelelani",
      date: "2025-10-15",
      checkIn: "-",
      checkOut: "-",
      status: "absent",
      hoursWorked: 0
    },
    {
      id: 4,
  employeeName: "Siya",
      date: "2025-10-15",
      checkIn: "08:45",
      checkOut: "17:15",
      status: "present",
      hoursWorked: 8.5
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="text-green-500" size={20} />;
      case "late":
        return <Clock className="text-yellow-500" size={20} />;
      case "absent":
        return <XCircle className="text-red-500" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      case "absent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalEmployees = attendanceRecords.length;
  const presentEmployees = attendanceRecords.filter(r => r.status === "present").length;
  const lateEmployees = attendanceRecords.filter(r => r.status === "late").length;
  const absentEmployees = attendanceRecords.filter(r => r.status === "absent").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Attendance Management</h1>
          
          {/* Date Selector */}
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="text-teal-600" size={24} />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              title="Select date"
              placeholder="Select date"
              style={{color: "black"}}
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{totalEmployees}</p>
              </div>
              <Users className="text-blue-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Present</p>
                <p className="text-2xl font-bold text-green-600">{presentEmployees}</p>
              </div>
              <CheckCircle className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Late</p>
                <p className="text-2xl font-bold text-yellow-600">{lateEmployees}</p>
              </div>
              <Clock className="text-yellow-500" size={32} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Absent</p>
                <p className="text-2xl font-bold text-red-600">{absentEmployees}</p>
              </div>
              <XCircle className="text-red-500" size={32} />
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Attendance Record</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Employee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Check In</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Check Out</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Hours Worked</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{record.employeeName}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{record.checkIn}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{record.checkOut}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {record.hoursWorked > 0 ? `${record.hoursWorked}h` : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2">
              <CheckCircle size={20} />
              Mark Attendance
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Calendar size={20} />
              View Monthly Report
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
              <Clock size={20} />
              Export Timesheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

