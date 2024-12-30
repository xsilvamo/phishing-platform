export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user';
  licenseExpiration: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'borrador' | 'en_progreso' | 'completado';
  startDate: Date;
  endDate: Date;
  stats: {
    sent: number;
    opened: number;
    clicked: number;
    submitted: number;
  };
}