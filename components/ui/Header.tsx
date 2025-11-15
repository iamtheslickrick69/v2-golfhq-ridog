"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  LogOut,
  Trophy,
  BookOpen,
  MessageSquare,
  MapPin,
  Users,
  ShoppingBag,
  LayoutDashboard,
  Menu,
  X
} from "lucide-react";
import { Dropdown, DropdownButton } from "./Dropdown";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: "My Journal", href: "/journal", icon: <BookOpen className="w-4 h-4" /> },
    { label: "My Caddy", href: "/my-caddy", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Tour Card", href: "/tour-card", icon: <Trophy className="w-4 h-4" /> },
    { label: "Courses", href: "/courses", icon: <MapPin className="w-4 h-4" /> },
    { label: "Community", href: "/community", icon: <Users className="w-4 h-4" /> },
    { label: "Pro Shop", href: "/pro-shop", icon: <ShoppingBag className="w-4 h-4" /> },
  ];

  const userMenuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="w-4 h-4" />
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-4 h-4" />
    },
    {
      label: "Sign Out",
      onClick: () => console.log("Sign out"),
      icon: <LogOut className="w-4 h-4" />
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-golf-green to-emerald-600 flex items-center justify-center"
            >
              <Trophy className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-golf-green to-emerald-600 bg-clip-text text-transparent">
              GolfHQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-golf-green hover:bg-golf-green/5 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <Dropdown
              trigger={
                <DropdownButton className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-golf-green hover:bg-golf-green/5 transition-all duration-200">
                  <User className="w-4 h-4" />
                  <span>Jason Adams</span>
                </DropdownButton>
              }
              items={userMenuItems}
              align="right"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-golf-green/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-neutral-200/50 py-4"
          >
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:text-golf-green hover:bg-golf-green/5 transition-all duration-200"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-neutral-200/50 my-2" />

              {userMenuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    if (item.href) window.location.href = item.href;
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:text-golf-green hover:bg-golf-green/5 transition-all duration-200 text-left"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
