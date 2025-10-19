"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Plus, Edit, Trash2, Search } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  salary: number;
  startDate: string;
}

export default function ManagementPage() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "IT",
      email: "john.doe@company.com",
      phone: "+27635987412",
      salary: 75000,
  startDate: "2025-10-15"
    },
    {
      id: 2,
  name: "Ntokozo",
      position: "HR Manager",
      department: "Human Resources",
      email: "ntokozo@company.com",
      phone: "+27456983571",
      salary: 65000,
  startDate: "2025-10-20"
    },
    {
      id: 3,
  name: "Yomelelani",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "yomelelani@company.com",
      phone: "+27236877965",
      salary: 55000,
  startDate: "2025-10-10"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowAddForm(true);
  };

  const handleSave = (formData: any) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id ? { ...emp, ...formData } : emp
      ));
    } else {
      const newEmployee = {
        id: Math.max(...employees.map(e => e.id)) + 1,
        ...formData
      };
      setEmployees([...employees, newEmployee]);
    }
    setShowAddForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Employee Management</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700"
            >
              <Plus size={20} />
              Add Employee
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Employee Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Position</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{employee.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{employee.position}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{employee.department}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{employee.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{employee.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">R{employee.salary.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(employee)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit employee"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete employee"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Employee Modal */}
      {showAddForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSave={handleSave}
          onCancel={() => {
            setShowAddForm(false);
            setEditingEmployee(null);
          }}
        />
      )}
    </div>
  );
}

function EmployeeForm({ 
  employee, 
  onSave, 
  onCancel 
}: { 
  employee: Employee | null;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    name: employee?.name || "",
    position: employee?.position || "",
    department: employee?.department || "",
    email: employee?.email || "",
    phone: employee?.phone || "",
    salary: employee?.salary || 0,
    startDate: employee?.startDate || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">
          {employee ? "Edit Employee" : "Add New Employee"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Employee name"
              placeholder="Enter employee name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Position"
              placeholder="Enter position"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Department"
              placeholder="Enter department"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Email"
              placeholder="Enter email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Phone"
              placeholder="Enter phone number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
            <input
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Salary"
              placeholder="Enter salary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              title="Start date"
              placeholder="Select start date"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              {employee ? "Update" : "Add"} Employee
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

