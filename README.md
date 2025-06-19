# Pilates with Fadia

A modern Pilates studio website built with React, TypeScript, and Express.

## Features

- 🧘‍♀️ Class information and details
- 📧 Contact form and newsletter signup
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 📸 Instagram feed integration (via Curator.io)
- 🔐 User authentication (in-memory storage)

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Storage**: In-memory storage (no database required)
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pwf-website-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   **For Local Development:**
   
   Create a `.env` file in the root directory:
   ```bash
   cp env.example .env
   ```
   
   Then edit `.env` with your actual values:
   ```env
   NODE_ENV=development
   SESSION_SECRET=your_secure_session_secret
   MAILCHIMP_API_KEY=your_mailchimp_key
   MAILCHIMP_SERVER_PREFIX=your_mailchimp_server_prefix
   MAILCHIMP_LIST_ID=your_mailchimp_list_id
   ```

   **Getting the values:**
   
   - **SESSION_SECRET**: Generate a random string (e.g., `openssl rand -base64 32`)
   - **MAILCHIMP_API_KEY**: Get from Mailchimp Account → Extras → API Keys
   - **MAILCHIMP_SERVER_PREFIX**: The part after the dash in your API key (e.g., if key is `abc123-us1`, server prefix is `us1`)
   - **MAILCHIMP_LIST_ID**: Get from Mailchimp Audience → Settings → Audience name and defaults

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5000`

## Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Connect your GitHub repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure environment variables in Vercel**
   - Go to your project settings in Vercel
   - Navigate to **Settings** → **Environment Variables**
   - Add each variable:
     ```
     NODE_ENV = production
     SESSION_SECRET = your_secure_session_secret
     MAILCHIMP_API_KEY = your_mailchimp_key
     MAILCHIMP_SERVER_PREFIX = your_mailchimp_server_prefix
     MAILCHIMP_LIST_ID = your_mailchimp_list_id
     ```
   - Select **Production**, **Preview**, and **Development** environments
   - Click **Save**

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Option 2: Manual Deployment with GitHub Actions

1. **Get Vercel tokens**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel login`
   - Get your tokens from Vercel dashboard

2. **Add GitHub secrets**
   - Go to your GitHub repository settings
   - Add these secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

3. **Push to main branch**
   - The GitHub Action will automatically deploy to Vercel

### Environment Variables for Production

Make sure to set these in your Vercel project settings:

```env
NODE_ENV=production
SESSION_SECRET=your_secure_session_secret
MAILCHIMP_API_KEY=your_mailchimp_key
MAILCHIMP_SERVER_PREFIX=your_mailchimp_server_prefix
MAILCHIMP_LIST_ID=your_mailchimp_list_id
```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities and config
│   └── dist/              # Built frontend (generated)
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   ├── auth.ts            # Authentication
│   ├── storage.ts         # In-memory storage
│   └── index.ts           # Server entry point
├── vercel.json            # Vercel configuration
├── env.example            # Environment variables template
└── package.json           # Dependencies and scripts
```

## API Endpoints

- `GET /api/classes` - Get all classes
- `POST /api/newsletter` - Subscribe to newsletter
- `POST /api/contact` - Send contact form

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License 