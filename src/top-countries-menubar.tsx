import {
  Icon,
  MenuBarExtra,
  open,
  openExtensionPreferences,
  getPreferenceValues,
} from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { fetchTopCountries } from "./api/client";
import { getCountryFlag, getMenuBarIcon } from "./utils/country-flags";
import { formatNumber, formatNumberLong } from "./utils/formatters";
import type { Preferences } from "./types";

export default function Command() {
  const preferences = getPreferenceValues<Preferences>();
  const dashboardUrl = preferences.dashboardUrl || "https://app.bklit.co";

  // Fetch data with 5-minute cache
  const { data, isLoading, error, revalidate } = useCachedPromise(
    async () => {
      const result = await fetchTopCountries();
      if (!result.success) {
        throw new Error(result.error || "Failed to fetch data");
      }
      return result;
    },
    [],
    {
      initialData: undefined,
      keepPreviousData: true,
    }
  );

  // Calculate total views
  const totalViews = data?.data?.reduce((sum, country) => sum + country.views, 0) || 0;
  const topCountry = data?.data?.[0];

  // Menu bar title
  const menuBarTitle = isLoading
    ? "Loading..."
    : error
    ? "Error"
    : totalViews > 0
    ? formatNumber(totalViews)
    : "No data";

  // Menu bar icon
  const menuBarIcon = isLoading
    ? Icon.CircleProgress
    : error
    ? Icon.ExclamationMark
    : getMenuBarIcon(topCountry?.countryCode);

  return (
    <MenuBarExtra
      icon={menuBarIcon}
      title={menuBarTitle}
      isLoading={isLoading}
      tooltip="Bklit Analytics - Last 24 hours"
    >
      {error ? (
        <>
          <MenuBarExtra.Item
            title="Failed to load analytics"
            icon={Icon.ExclamationMark}
          />
          <MenuBarExtra.Item
            title={error.message || "Unknown error"}
            icon={Icon.Warning}
          />
          <MenuBarExtra.Separator />
          <MenuBarExtra.Item
            title="Open Preferences"
            icon={Icon.Gear}
            onAction={openExtensionPreferences}
          />
          <MenuBarExtra.Item
            title="Retry"
            icon={Icon.ArrowClockwise}
            onAction={revalidate}
          />
        </>
      ) : data?.data && data.data.length > 0 ? (
        <>
          <MenuBarExtra.Section title="Top Countries (24h)">
            {data.data.map((country, index) => (
              <MenuBarExtra.Item
                key={country.countryCode}
                icon={getCountryFlag(country.countryCode)}
                title={`${index + 1}. ${country.country}`}
                subtitle={`${formatNumberLong(country.views)} views • ${formatNumberLong(country.uniqueVisitors)} visitors`}
              />
            ))}
          </MenuBarExtra.Section>

          <MenuBarExtra.Separator />

          <MenuBarExtra.Section>
            <MenuBarExtra.Item
              title={`Total: ${formatNumberLong(totalViews)} views`}
              icon={Icon.BarChart}
            />
          </MenuBarExtra.Section>

          <MenuBarExtra.Separator />

          <MenuBarExtra.Section>
            <MenuBarExtra.Item
              title="Open Dashboard"
              icon={Icon.Globe}
              onAction={() => open(`${dashboardUrl}/projects/${preferences.projectId}`)}
            />
            <MenuBarExtra.Item
              title="Refresh"
              icon={Icon.ArrowClockwise}
              shortcut={{ modifiers: ["cmd"], key: "r" }}
              onAction={revalidate}
            />
            <MenuBarExtra.Item
              title="Preferences"
              icon={Icon.Gear}
              shortcut={{ modifiers: ["cmd"], key: "," }}
              onAction={openExtensionPreferences}
            />
          </MenuBarExtra.Section>
        </>
      ) : (
        <>
          <MenuBarExtra.Item title="No data available" icon={Icon.Info} />
          <MenuBarExtra.Separator />
          <MenuBarExtra.Item
            title="Open Dashboard"
            icon={Icon.Globe}
            onAction={() => open(dashboardUrl)}
          />
          <MenuBarExtra.Item
            title="Refresh"
            icon={Icon.ArrowClockwise}
            onAction={revalidate}
          />
        </>
      )}
    </MenuBarExtra>
  );
}

