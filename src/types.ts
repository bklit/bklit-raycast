export interface Preferences {
  apiToken: string;
  projectId: string;
  dashboardUrl?: string;
}

export interface TopCountryData {
  country: string;
  countryCode: string;
  views: number;
  uniqueVisitors: number;
}

export interface ApiResponse {
  success: boolean;
  data?: TopCountryData[];
  error?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
}

