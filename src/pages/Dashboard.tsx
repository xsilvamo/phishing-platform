import React from 'react';
import { Mail, Users, MousePointer, FileCheck } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { CampaignList } from '../components/dashboard/CampaignList';
import { LicenseInfo } from '../components/dashboard/LicenseInfo';
import type { Campaign } from '../types';
import type { User } from '../types';

const mockUser: User = {
  id: '1',
  email: 'admin@example.com',
  firstName: 'John',
  lastName: 'Doe',
  role: 'admin',
  licenseExpiration: new Date('2024-12-31'),
};

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Q1 Entrenamiento de Seguridad',
    status: 'en_progreso',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-31'),
    stats: { sent: 1000, opened: 750, clicked: 500, submitted: 300 },
  },
  {
    id: '2',
    name: 'Prueba Departamento IT',
    status: 'completado',
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-02-28'),
    stats: { sent: 500, opened: 400, clicked: 300, submitted: 200 },
  },
];

export function Dashboard() {
  const handleSelectCampaign = (campaign: Campaign) => {
    console.log('Selected campaign:', campaign);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-2">Bienvenido, {mockUser.firstName}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total de Correos Enviados"
            value="15,234"
            icon={Mail}
            trend={12}
          />
          <StatCard
            title="Aperturas Únicas"
            value="8,742"
            icon={Users}
            trend={8}
          />
          <StatCard
            title="Clics en Enlaces"
            value="4,281"
            icon={MousePointer}
            trend={-3}
          />
          <StatCard
            title="Envíos de Formularios"
            value="2,461"
            icon={FileCheck}
            trend={15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CampaignList
              campaigns={mockCampaigns}
              onSelectCampaign={handleSelectCampaign}
            />
          </div>
          <div>
            <LicenseInfo user={mockUser} />
          </div>
        </div>
      </div>
    </div>
  );
}