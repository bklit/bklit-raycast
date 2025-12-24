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

export interface DeviceUsageData {
  mobile: {
    views: number;
    percentage: number;
  };
  desktop: {
    views: number;
    percentage: number;
  };
  total: number;
}

export interface DeviceUsageApiResponse {
  success: boolean;
  data?: DeviceUsageData;
  error?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
}

export interface ReferrerData {
  referrer: string;
  views: number;
  percentage: number;
}

export interface ReferrerApiResponse {
  success: boolean;
  data?: ReferrerData[];
  error?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
}

export interface PageData {
  path: string;
  views: number;
}

export interface PageApiResponse {
  success: boolean;
  data?: PageData[];
  error?: string;
  period?: {
    startDate: string;
    endDate: string;
  };
}

