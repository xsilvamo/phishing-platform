import React from 'react';
import { Play, Pause, CheckCircle } from 'lucide-react';
import type { Campaign } from '../../types';

interface CampaignListProps {
  campaigns: Campaign[];
  onSelectCampaign: (campaign: Campaign) => void;
}

export function CampaignList({ campaigns, onSelectCampaign }: CampaignListProps) {
  const getStatusIcon = (status: Campaign['status']) => {
    switch (status) {
      case 'en_progreso':
        return <Play className="h-5 w-5 text-green-400" />;
      case 'borrador':
        return <Pause className="h-5 w-5 text-yellow-400" />;
      case 'completado':
        return <CheckCircle className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Campañas Recientes</h2>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            onClick={() => onSelectCampaign(campaign)}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                {getStatusIcon(campaign.status)}
              </div>
              <div>
                <h3 className="text-white font-medium">{campaign.name}</h3>
                <p className="text-gray-400 text-sm">
                  {new Date(campaign.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">{campaign.stats.sent} sent</p>
              <p className="text-gray-400 text-sm">
                {((campaign.stats.opened / campaign.stats.sent) * 100).toFixed(1)}% abiertos
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}