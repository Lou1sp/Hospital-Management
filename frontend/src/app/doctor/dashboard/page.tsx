"use client"

import React, { useState } from 'react';
import { Search, Mail, Bell, Menu, Clock, Phone, FileText, MessageSquare, Calendar, User, Settings, LogOut, CreditCard, Home } from 'lucide-react';

export default function MedicalDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const stats = [
    { title: 'Total Patient', value: '2000+', subtitle: 'Till Today', icon: '👥', color: 'bg-blue-50' },
    { title: 'Today Patient', value: '068', subtitle: '21 Dec-2021', icon: '👨‍⚕️', color: 'bg-blue-50' },
    { title: 'Today Appointments', value: '085', subtitle: '21 Dec-2021', icon: '🕐', color: 'bg-blue-50' }
  ];

  const todayAppointments = [
    { name: 'M.J. Mical', diagnosis: 'Health Cheakup', time: 'On Going', status: 'ongoing' },
    { name: 'Sanath Deo', diagnosis: 'Health Cheakup', time: '12:30 PM', status: 'scheduled' },
    { name: 'Loeara Phanj', diagnosis: 'Report', time: '01:00 PM', status: 'scheduled' },
    { name: 'Komola Haris', diagnosis: 'Common Cold', time: '01:30 PM', status: 'scheduled' }
  ];

  const appointmentRequests = [
    { name: 'Maria Sarafat', condition: 'Cold', actions: ['check', 'close', 'message'] },
    { name: 'Jhon Deo', condition: 'Over switting', actions: ['check', 'close', 'message'] }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'appointment', label: 'Appoinment', icon: Calendar },
    { id: 'appointment-page', label: 'Appoinment Page', icon: FileText },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gradient-to-b from-gray-50 to-white p-6 border-r border-gray-200">
            {/* Doctor Profile */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">👨‍⚕️</div>
                </div>
              </div>
              <h3 className="font-bold text-blue-900 text-lg">Dr. Marttin Deo</h3>
              <p className="text-xs text-gray-600">MBBS, FCPS - MD (Medicinal), MCPS</p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeMenu === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Mail className="text-gray-600" size={22} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                  <Bell className="text-gray-600" size={22} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
                  <Search className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-gray-600"
                  />
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Menu className="text-gray-600" size={22} />
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className={`${stat.color} rounded-2xl p-6 shadow-sm`}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-blue-600">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-gray-500 text-xs mt-1">{stat.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Patient Summary Chart */}
              <div className="col-span-1 bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Patients Summaey December 2021</h3>
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="40" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#1E40AF" strokeWidth="40"
                      strokeDasharray="251 502" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#FCD34D" strokeWidth="40"
                      strokeDasharray="125 502" strokeDashoffset="-251" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-100 rounded"></div>
                    <span className="text-gray-700">New Patients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-gray-700">Old Patients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-900 rounded"></div>
                    <span className="text-gray-700">Total Patients</span>
                  </div>
                </div>
              </div>

              {/* Today Appointment */}
              <div className="col-span-1 bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-blue-900 mb-4">Today Appoinment</h3>
                <div className="space-y-3">
                  {todayAppointments.map((apt, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {apt.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">{apt.name}</p>
                          <p className="text-xs text-gray-600">{apt.diagnosis}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        apt.status === 'ongoing' ? 'bg-blue-200 text-blue-700' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {apt.time}
                      </span>
                    </div>
                  ))}
                  <button className="text-blue-600 font-medium text-sm hover:underline">See All</button>
                </div>
              </div>

              {/* Next Patient Details */}
              <div className="col-span-1 bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-blue-900 mb-4">Next Patient Details</h3>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-bold text-blue-900">Sanath Deo</p>
                      <p className="text-xs text-gray-600">Health Cheakup</p>
                      <p className="text-xs text-gray-500 mt-1">Patient ID: 0220092020005</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                    <div>
                      <p className="text-gray-500">D.O.B</p>
                      <p className="font-semibold">15 January 1989</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Sex</p>
                      <p className="font-semibold">Male</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Appoinment</p>
                      <p className="font-semibold">15 Dec - 2021</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Weight</p>
                      <p className="font-semibold">59 Kg</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Hight</p>
                      <p className="font-semibold">172 cm</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Reg. Date</p>
                      <p className="font-semibold">10 Dec 2021</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="font-semibold text-sm mb-2">Patient History</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Asthma</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Hypertention</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">Fever</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                      <Phone size={14} /> (308) 555-0103
                    </button>
                    <button className="px-3 bg-gray-100 rounded-lg">
                      <FileText size={16} className="text-gray-600" />
                    </button>
                    <button className="px-3 bg-gray-100 rounded-lg">
                      <MessageSquare size={16} className="text-gray-600" />
                    </button>
                  </div>
                  <p className="font-semibold text-sm">Last Prescriptions</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              {/* Patient Review */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Patients Review</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Excellent', color: 'bg-blue-600', width: '80%' },
                    { label: 'Great', color: 'bg-green-500', width: '20%' },
                    { label: 'Good', color: 'bg-orange-400', width: '15%' },
                    { label: 'Avarage', color: 'bg-cyan-400', width: '10%' }
                  ].map((review, idx) => (
                    <div key={idx}>
                      <p className="text-sm text-gray-600 mb-1">{review.label}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${review.color} h-2 rounded-full`} style={{ width: review.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointment Request */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-blue-900 mb-4">Appoinment Request</h3>
                <div className="space-y-3">
                  {appointmentRequests.map((req, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">{req.name}</p>
                          <p className="text-xs text-gray-600">{req.condition}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">✓</button>
                        <button className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">✕</button>
                        <button className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">💬</button>
                      </div>
                    </div>
                  ))}
                  <button className="text-blue-600 font-medium text-sm hover:underline">See All</button>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Calander</h3>
                  <span className="text-sm text-blue-600 font-medium">December - 2021</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
                  {['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'].map((day) => (
                    <div key={day} className="font-semibold text-gray-600">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
                    <div
                      key={day}
                      className={`py-2 rounded-lg ${
                        day === 21 ? 'bg-blue-600 text-white font-bold' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div key={`next-${day}`} className="py-2 text-gray-300">{day < 10 ? `0${day}` : day}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}