"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Settings, User, Bell, Shield, Database, Palette, Globe, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    general: {
      companyName: "BEMS Corporation",
      companyEmail: "Emparace@bems.com",
      companyPhone: "01125310",
      address: "1632 Mmabatho Mahikeng",
      timezone: "America/New_York",
      dateFormat: "MM/DD/YYYY",
      currency: "ZAR"
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      attendanceAlerts: true,
      payrollReminders: true,
      systemUpdates: false
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5
    },
    appearance: {
      theme: "light",
      primaryColor: "#0d9488",
      fontSize: "medium",
      sidebarCollapsed: false
    }
  });

  const tabs = [
    { id: "general", name: "General", icon: Settings },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "appearance", name: "Appearance", icon: Palette },
  ];

  const handleSettingChange = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    alert("Settings saved successfully!");
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Company Name</label>
          <input
            type="text"
            value={settings.general.companyName}
            onChange={(e) => handleSettingChange("general", "companyName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Company Email</label>
          <input
            type="email"
            value={settings.general.companyEmail}
            onChange={(e) => handleSettingChange("general", "companyEmail", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Phone Number</label>
          <input
            type="tel"
            value={settings.general.companyPhone}
            onChange={(e) => handleSettingChange("general", "companyPhone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Timezone</label>
          <select
            value={settings.general.timezone}
            onChange={(e) => handleSettingChange("general", "timezone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Date Format</label>
          <select
            value={settings.general.dateFormat}
            onChange={(e) => handleSettingChange("general", "dateFormat", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Currency</label>
          <select
            value={settings.general.currency}
            onChange={(e) => handleSettingChange("general", "currency", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="CAD">CAD (C$)</option>
          </select>
        </div>
      </div>
      
      <div>
  <label className="block text-sm font-medium mb-2 text-black-force">Company Address</label>
        <textarea
          value={settings.general.address}
          onChange={(e) => handleSettingChange("general", "address", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-black-force">Email Notifications</h4>
            <p className="text-sm text-black-force">Receive notifications via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.emailNotifications}
              onChange={(e) => handleSettingChange("notifications", "emailNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-black-force">SMS Notifications</h4>
            <p className="text-sm text-black-force">Receive notifications via SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.smsNotifications}
              onChange={(e) => handleSettingChange("notifications", "smsNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-black-force">Push Notifications</h4>
            <p className="text-sm text-black-force">Receive browser push notifications</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.pushNotifications}
              onChange={(e) => handleSettingChange("notifications", "pushNotifications", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-black-force">Attendance Alerts</h4>
            <p className="text-sm text-black-force">Get notified about attendance issues</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.attendanceAlerts}
              onChange={(e) => handleSettingChange("notifications", "attendanceAlerts", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-black-force">Payroll Reminders</h4>
            <p className="text-sm text-black-force">Get reminded about payroll processing</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.payrollReminders}
              onChange={(e) => handleSettingChange("notifications", "payrollReminders", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Session Timeout (minutes)</label>
          <input
            type="number"
            value={settings.security.sessionTimeout}
            onChange={(e) => handleSettingChange("security", "sessionTimeout", parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Password Expiry (days)</label>
          <input
            type="number"
            value={settings.security.passwordExpiry}
            onChange={(e) => handleSettingChange("security", "passwordExpiry", parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Max Login Attempts</label>
          <input
            type="number"
            value={settings.security.loginAttempts}
            onChange={(e) => handleSettingChange("security", "loginAttempts", parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-black-force">Two-Factor Authentication</h4>
          <p className="text-sm text-black-force">Add an extra layer of security to your account</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) => handleSettingChange("security", "twoFactorAuth", e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
        </label>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Theme</label>
          <select
            value={settings.appearance.theme}
            onChange={(e) => handleSettingChange("appearance", "theme", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Font Size</label>
          <select
            value={settings.appearance.fontSize}
            onChange={(e) => handleSettingChange("appearance", "fontSize", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-black-force">Primary Color</label>
          <input
            type="color"
            value={settings.appearance.primaryColor}
            onChange={(e) => handleSettingChange("appearance", "primaryColor", e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
  <h4 className="font-medium mb-4 text-black-force">Data Backup</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-black-force">Last backup:</span>
            <span className="text-sm text-black-force">October 15, 2025 at 2:30 PM</span>
          </div>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
            Create Backup Now
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
  <h4 className="font-medium mb-4 text-black-force">Data Export</h4>
        <div className="space-y-4">
          <p className="text-sm text-black-force">Export your data in various formats for external use.</p>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Export as CSV
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Export as Excel
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Export as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "notifications":
        return renderNotificationSettings();
      case "security":
        return renderSecuritySettings();
      case "appearance":
        return renderAppearanceSettings();
      case "data":
        return renderDataSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black-force">Settings</h1>
          <p className="text-black-force">Manage your system preferences and configurations</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "border-teal-500 text-teal-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon size={18} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>

          {/* Save Button */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleSave}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2"
            >
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

