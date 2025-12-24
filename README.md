# Bklit Analytics Extension

Keep track of your website analytics right from your macOS menu bar. See your top countries, pageviews, and visitor stats from the last 24 hours at a glance.

## Features

- 📊 **Menu Bar Integration**: View total pageviews directly in your menu bar
- 🌍 **Top Countries**: See your top 5 countries with flags, views, and unique visitors
- 🔄 **Auto-refresh**: Data updates every 5 minutes automatically
- ⚡ **Lightning Fast**: Cached data loads instantly when you click
- 🎨 **Light & Dark Mode**: Icons adapt to your system theme

## Getting Started

### 1. Get Your API Credentials

Before using this extension, you'll need API credentials from your Bklit dashboard:

1. Log in to your [Bklit Dashboard](https://app.bklit.com)
2. Navigate to **Settings > API Tokens**
3. Click **Create New Token**
4. Assign the token to your project
5. Copy the API token (starts with `bk_live_`)
6. Go to your project settings and copy your **Project ID** (starts with `cl`)

### 2. Configure the Extension

After installing the extension:

1. Run **Bklit Analytics** from Raycast
2. You'll be prompted to enter your credentials:
   - **API Token**: Paste your Bklit API token
   - **Project ID**: Paste your project ID
   - **Dashboard URL** (optional): Leave blank for production or enter your custom URL

That's it! The extension will appear in your menu bar showing your analytics.

## Usage

### Menu Bar Display

The menu bar shows:

- 📈 Total pageviews from the last 24 hours
- 🎯 Custom Bklit icon (adapts to light/dark mode)

### Dropdown Menu

Click the menu bar icon to see:

- **Top 5 Countries**: Ranked by pageviews with visitor counts
- **Quick Actions**:
  - Open your Bklit Dashboard
  - Refresh data manually
  - Access preferences

### Keyboard Shortcuts

- `⌘ R` - Refresh data
- `⌘ ,` - Open preferences

## Privacy & Performance

- Your API token is stored securely in Raycast's encrypted preferences
- Analytics data is cached locally for instant display
- Updates every 5 minutes in the background (minimal API usage)
- No data is collected or shared outside of Bklit

## Support

Need help? Have questions?

- [Bklit Documentation](https://bklit.com/docs)
- [Report an Issue](https://github.com/bklit/bklit-raycast-extension/issues)

## License

MIT
