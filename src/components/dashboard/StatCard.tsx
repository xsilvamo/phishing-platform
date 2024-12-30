import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: number;
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className = '' }: StatCardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4">
          <span className={`text-sm ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
          <span className="text-gray-400 text-sm ml-2">vs mes pasado</span>
        </div>
      )}
    </div>
  );
}