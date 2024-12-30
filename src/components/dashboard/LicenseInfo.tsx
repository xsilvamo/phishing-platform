import React from 'react';
import { Calendar, Shield } from 'lucide-react';
import type { User } from '../../types';

interface LicenseInfoProps {
  user: User;
}

export function LicenseInfo({ user }: LicenseInfoProps) {
  const daysUntilExpiration = Math.ceil(
    (new Date(user.licenseExpiration).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="h-5 w-5 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">License Status</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Status</span>
          <span className="text-green-400 font-medium">Active</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Expires in</span>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-white">{daysUntilExpiration} days</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">License Type</span>
          <span className="text-white capitalize">{user.role}</span>
        </div>
      </div>
    </div>
  );
}