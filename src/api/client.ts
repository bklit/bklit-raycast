import { getPreferenceValues } from "@raycast/api";
import type { ApiResponse, Preferences } from "../types";

const DEFAULT_DASHBOARD_URL = "https://app.bklit.co";

export async function fetchTopCountries(): Promise<ApiResponse> {
  const preferences = getPreferenceValues<Preferences>();
  const dashboardUrl = preferences.dashboardUrl || DEFAULT_DASHBOARD_URL;
  const endpoint = `${dashboardUrl}/api/raycast/top-countries`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${preferences.apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: preferences.projectId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `HTTP ${response.status}`;

      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }

      return {
        success: false,
        error: errorMessage,
      };
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top countries:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}

