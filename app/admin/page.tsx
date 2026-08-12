"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Store,
  Compass,
  BarChart2,
  Settings,
  LogOut,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Download,
  Briefcase,
  CreditCard,
  ShoppingCart,
  Clock,
  Package,
  CheckCircle2,
  AlertCircle,
  XCircle,
  RefreshCw,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

// Sidebar Links
const sidebarLinks = [
  { name: "Overview", icon: LayoutDashboard, active: true },
  { name: "Admin Team", icon: Users, active: false },
  { name: "Reservations", icon: Calendar, active: false },
  { name: "Sellers Management", icon: Store, active: false },
  { name: "Umrah Packages", icon: Compass, active: false },
  { name: "Financial Reports", icon: BarChart2, active: false },
  { name: "Users", icon: Users, active: false },
  { name: "Settings", icon: Settings, active: false },
];

// Metrics Data
const metrics = [
  {
    title: "Total Revenue",
    value: "$1.24M",
    trend: "+12%",
    trendType: "up",
    icon: CreditCard,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
  {
    title: "Total Bookings",
    value: "2,482",
    trend: "+8%",
    trendType: "up",
    icon: ShoppingCart,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
  {
    title: "Active Sellers",
    value: "142",
    trend: "+2%",
    trendType: "up",
    icon: Store,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
  {
    title: "Total Users",
    value: "24.8K",
    trend: "+15%",
    trendType: "up",
    icon: Users,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
  {
    title: "Pending Reviews",
    value: "18",
    trend: null,
    trendType: "neutral",
    icon: Clock,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
  {
    title: "New Orders Today",
    value: "42",
    trend: "-4%",
    trendType: "down",
    icon: Package,
    iconBg: "",
    iconColorStyle: { color: "rgba(201, 168, 76, 1)" },
    iconBgStyle: { backgroundColor: "rgba(201, 168, 76, 0.1)" }
  },
];

// Activity Log Data
const activityLog = [
  {
    timestamp: "10:45 AM",
    userSeller: "Ahmed Al-Farsi",
    action: "Booking Created",
    status: "Paid",
    amount: "$3,450",
    statusColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
  },
  {
    timestamp: "10:12 AM",
    userSeller: "Lux Travels",
    action: "Product Listed",
    status: "Pending",
    amount: "-",
    statusColor: "bg-amber-500/10 text-amber-600 border border-amber-500/20"
  },
  {
    timestamp: "09:55 AM",
    userSeller: "Sara Khan",
    action: "Account Registered",
    status: "Active",
    amount: "-",
    statusColor: "bg-blue-500/10 text-blue-600 border border-blue-500/20"
  },
  {
    timestamp: "09:30 AM",
    userSeller: "Global Umrah",
    action: "Payment Received",
    status: "Verified",
    amount: "$12,400",
    statusColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
  },
  {
    timestamp: "09:15 AM",
    userSeller: "Mecca Supplies",
    action: "Review Approved",
    status: "Listed",
    amount: "-",
    statusColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
  },
  {
    timestamp: "08:45 AM",
    userSeller: "Omar Bakir",
    action: "Booking Created",
    status: "Failed",
    amount: "$2,100",
    statusColor: "bg-rose-500/10 text-rose-600 border border-rose-500/20"
  },
  {
    timestamp: "08:20 AM",
    userSeller: "Zamzam Group",
    action: "Withdrawal Request",
    status: "Processing",
    amount: "$8,000",
    statusColor: "bg-amber-500/10 text-amber-600 border border-amber-500/20"
  },
  {
    timestamp: "07:55 AM",
    userSeller: "Admin (Hassan)",
    action: "Seller Approved",
    status: "Active",
    amount: "-",
    statusColor: "bg-blue-500/10 text-blue-600 border border-blue-500/20"
  },
];

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAF9] font-cairo relative overflow-hidden">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* 1. Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 lg:static lg:translate-x-0 z-50 w-[280px] bg-[#0c0c0c] text-white flex flex-col justify-between py-6 shrink-0 border-r border-[#262626] transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <div>
          {/* Logo & Super Admin Badge */}
          <div className="mb-10 px-6 flex items-start justify-between">
            <div>
              <Link href="/">
                <img src="/Logo.png" alt="UMRAH Mall" className="h-[36px] w-auto object-contain mb-3" />
              </Link>
              <div className="inline-block bg-[#D3BD67]/15 text-[#D3BD67] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                Super Admin
              </div>
            </div>
            {/* Mobile Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive = activeMenu === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setActiveMenu(link.name);
                    setSidebarOpen(false); // Auto close sidebar on mobile menu select
                  }}
                  className={`flex items-center gap-3.5 w-full px-6 py-3.5 rounded-none text-sm font-semibold transition-all duration-150 border-l-4 ${isActive
                      ? "bg-[rgba(201,168,76,0.1)] text-[rgba(201,168,76,1)] border-[rgba(201,168,76,1)]"
                      : "text-gray-400 hover:text-[rgba(201,168,76,1)] hover:bg-[rgba(201,168,76,0.1)] border-transparent"
                    }`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <link.icon className="w-4.5 h-4.5" />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Logout Button */}
        <div className="px-6">
          <button
            onClick={() => alert("Logging out...")}
            className="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:text-rose-500 hover:bg-rose-500/5 transition-all duration-150"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <LogOut className="w-4.5 h-4.5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header Top-Bar */}
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-bold text-gray-800">Admin Panel</h2>
          </div>
          <Link href="/">
            <img src="/Logo.png" alt="UMRAH Mall" className="h-[28px] w-auto object-contain" />
          </Link>
        </div>

        <main className="flex-1 min-w-0 flex flex-col p-6 md:p-8 lg:p-10 gap-8 overflow-y-auto">
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Platform Overview</h1>
              <p className="text-xs text-gray-500 mt-1 font-medium">Monday, Jan 20, 2026</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#D3BD67] hover:bg-[#b8a24c] text-white text-xs font-bold rounded-xl shadow-md shadow-[#D3BD67]/10 transition-colors self-start sm:self-center">
              <Download className="w-4 h-4" />
              <span>Generate Report</span>
            </button>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {metrics.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-4 relative overflow-hidden group hover:border-[#D3BD67]/20 transition-all">
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`p-2.5 rounded-xl ${item.iconBg}`}
                    style={item.iconBgStyle}
                  >
                    <item.icon className="w-5 h-5" style={item.iconColorStyle} />
                  </div>
                  {item.trend && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${item.trendType === "up"
                        ? "text-emerald-600 bg-emerald-500/10"
                        : "text-rose-600 bg-rose-500/10"
                      }`}>
                      {item.trendType === "up" ? "↑" : "↓"} {item.trend.replace(/[+-]/g, '')}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.title}</p>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">{item.value}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Revenue Over Time Line Chart */}
            <div className="lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Revenue Over Time (6M)</h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D3BD67]" />
                  <span className="font-semibold">Revenue</span>
                </div>
              </div>

              {/* SVG Line Chart */}
              <div className="relative w-full h-[260px] flex items-end justify-center">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D3BD67" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#D3BD67" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="50" y1="20" x2="450" y2="20" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="60" x2="450" y2="60" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="100" x2="450" y2="100" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="140" x2="450" y2="140" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="180" x2="450" y2="180" stroke="#e5e7eb" strokeWidth="1" />

                  {/* Shaded Area Under Line */}
                  <path
                    d="M 50 140 L 130 120 L 210 130 L 290 90 L 370 80 L 450 60 L 450 180 L 50 180 Z"
                    fill="url(#chartGlow)"
                  />

                  {/* Main Trend Line */}
                  <path
                    d="M 50 140 L 130 120 L 210 130 L 290 90 L 370 80 L 450 60"
                    fill="none"
                    stroke="#D3BD67"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data Points */}
                  <circle cx="50" cy="140" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />
                  <circle cx="130" cy="120" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />
                  <circle cx="210" cy="130" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />
                  <circle cx="290" cy="90" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />
                  <circle cx="370" cy="80" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />
                  <circle cx="450" cy="60" r="5" fill="white" stroke="#D3BD67" strokeWidth="2.5" className="hover:scale-125 transition-transform" />

                  {/* X Axis Labels */}
                  <text x="50" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Aug</text>
                  <text x="130" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Sep</text>
                  <text x="210" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Oct</text>
                  <text x="290" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Nov</text>
                  <text x="370" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Dec</text>
                  <text x="450" y="195" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-semibold">Jan</text>
                </svg>
              </div>
            </div>

            {/* Bookings by Type Donut Chart */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Bookings by Type</h3>

              {/* Circular Ring Graphic */}
              <div className="relative flex items-center justify-center h-[180px]">
                <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
                  <circle cx="70" cy="70" r="50" fill="transparent" stroke="#f3f4f6" strokeWidth="18" />
                  {/* Gold: 65% (Circumference is 314.16. 314.16 * 0.65 = 204.2) */}
                  <circle
                    cx="70"
                    cy="70"
                    r="50"
                    fill="transparent"
                    stroke="#D3BD67"
                    strokeWidth="18"
                    strokeDasharray="314.16"
                    strokeDashoffset="109.95"
                    strokeLinecap="round"
                  />
                  {/* Black: 35% (Circumference 314.16. 314.16 * 0.35 = 109.95) */}
                  {/* Offset starts where gold ends: -204.2 */}
                  <circle
                    cx="70"
                    cy="70"
                    r="50"
                    fill="transparent"
                    stroke="#161616"
                    strokeWidth="18"
                    strokeDasharray="109.95 204.2"
                    strokeDashoffset="-204.2"
                  />
                </svg>
                {/* Inner Text Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">2,482</span>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Total</span>
                </div>
              </div>

              {/* Labels Legends */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D3BD67]" />
                    <span className="text-gray-500">Umrah Packages</span>
                  </div>
                  <span className="text-gray-900">65%</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#161616]" />
                    <span className="text-gray-500">Retail Products</span>
                  </div>
                  <span className="text-gray-900">35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log Table */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Platform Activity Log</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-[10px] text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">User / Seller</th>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs font-medium">
                  {activityLog.map((log, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/40 transition-colors">
                      <td className="px-6 py-4 text-gray-400 font-normal">{log.timestamp}</td>
                      <td className="px-6 py-4 text-gray-900 font-bold">{log.userSeller}</td>
                      <td className="px-6 py-4 text-gray-500">{log.action}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold ${log.statusColor}`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900 font-bold">{log.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Financial Summary Bottom Bar */}
          <div className="bg-[#0c0c0c] text-white rounded-2xl border border-[#262626] p-6 lg:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
              <div className="flex flex-col gap-1.5 pl-0 md:pl-4 first:pl-0">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Revenue</span>
                <span className="text-xl lg:text-2xl font-bold text-[#D3BD67]">$4,520,000</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-4 md:pt-0 pl-0 md:pl-8">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Platform Commission (15%)</span>
                <span className="text-xl lg:text-2xl font-bold text-[#D3BD67]">$678,000</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-4 md:pt-0 pl-0 md:pl-8">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Payouts to Sellers</span>
                <span className="text-xl lg:text-2xl font-bold text-[#D3BD67]">$3,842,000</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-4 md:pt-0 pl-0 md:pl-8">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Net Profit</span>
                <span className="text-xl lg:text-2xl font-bold text-[#D3BD67]">$420,000</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
