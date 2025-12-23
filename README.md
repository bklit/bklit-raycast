# Bklit Analytics Extension

View your Bklit analytics directly in your macOS menu bar with this Raycast extension.

## Features

- **Real-time Analytics**: View top 5 countries from the last 24 hours
- **Menu Bar Integration**: Quick access to analytics without opening your browser
- **Auto-refresh**: Data updates every 5 minutes automatically
- **Visual Indicators**: Country flags and formatted numbers for easy reading
- **Quick Actions**: Direct links to your dashboard, refresh, and preferences

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Get your API credentials from your Bklit dashboard:
   - Navigate to **Settings > API Tokens**
   - Create a new token and assign it to your project
   - Copy the token (starts with `bk_live_`)
   - Copy your Project ID from the project settings (starts with `cl`)

3. Run in development mode:

   ```bash
   pnpm dev
   ```

4. Configure the extension in Raycast:
   - **API Token**: Your Bklit API token
   - **Project ID**: Your project ID
   - **Dashboard URL** (optional): Custom dashboard URL (defaults to `https://app.bklit.co`)

## Usage

Once configured, the extension will appear in your menu bar showing:

- Total views count for the last 24 hours
- Flag of your top country

Click the menu bar icon to see:

- Top 5 countries with views and unique visitors
- Total views summary
- Quick links to your dashboard
- Refresh and preferences options

### Keyboard Shortcuts

- `Cmd + R`: Refresh data
- `Cmd + ,`: Open preferences

## Development

```bash
# Install dependencies
pnpm install

# Run in development
pnpm dev

# Lint code
pnpm lint

# Fix linting issues
pnpm fix-lint

# Build for production
pnpm build
```

## Publishing

To publish to the Raycast Store:

```bash
pnpm run publish
```

Follow [Raycast's publishing guidelines](https://developers.raycast.com/basics/publish-an-extension) for more details.

## License

MIT
# bklit-raycast
