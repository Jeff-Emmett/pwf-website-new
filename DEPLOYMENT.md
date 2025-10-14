# Cloudflare Pages Deployment Guide

This guide will help you deploy your Pilates with Fadia website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Wrangler CLI installed: `npm install -g wrangler`
3. Your domain (optional, Cloudflare Pages provides a free subdomain)

## Setup Steps

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Create Cloudflare KV Namespace

```bash
# Create KV namespace for production
wrangler kv:namespace create "STORAGE"

# Create KV namespace for preview
wrangler kv:namespace create "STORAGE" --preview
```

Update the `wrangler.toml` file with the actual namespace IDs returned from the commands above.

### 3. Set Environment Variables

In your Cloudflare Pages dashboard, go to Settings > Environment Variables and add:

**Production Environment:**
- `JWT_SECRET`: A secure random string for JWT signing
- `MAILCHIMP_API_KEY`: Your Mailchimp API key
- `MAILCHIMP_SERVER_PREFIX`: Your Mailchimp server prefix (e.g., "us1")
- `MAILCHIMP_LIST_ID`: Your Mailchimp list ID

**Preview Environment:**
- Same variables as production (or use test values)

### 4. Build and Deploy

```bash
# Build the client
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

### 5. Configure Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains"
3. Add your domain
4. Follow the DNS configuration instructions

## Development

For local development:

```bash
# Start the development server
npm run dev
```

This will start the Vite development server on `http://localhost:5173`.

## API Endpoints

The following API endpoints are available:

- `GET /api/classes` - Get all classes
- `GET /api/classes/:id` - Get specific class
- `POST /api/newsletter` - Subscribe to newsletter
- `POST /api/contact` - Send contact message
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (requires JWT token)
- `GET /api/bookings` - Get user bookings (requires JWT token)
- `POST /api/bookings` - Create booking (requires JWT token)

## Authentication

The application now uses JWT tokens instead of sessions:

1. Users register/login and receive a JWT token
2. The token is stored in localStorage
3. All authenticated requests include the token in the Authorization header
4. Tokens are verified on each request

## Data Storage

Data is stored in Cloudflare KV:

- User accounts
- Newsletter subscriptions
- Contact messages
- User bookings

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed
- Check that TypeScript compilation passes: `npm run check`

### API Issues
- Verify environment variables are set correctly
- Check Cloudflare Functions logs in the dashboard
- Ensure KV namespace is properly configured

### Authentication Issues
- Verify JWT_SECRET is set
- Check that tokens are being sent in Authorization headers
- Ensure token format is correct (Bearer <token>)

## Security Notes

1. **JWT Secret**: Use a strong, random secret for JWT signing
2. **Environment Variables**: Never commit sensitive data to version control
3. **CORS**: The middleware handles CORS for all requests
4. **Input Validation**: All API endpoints validate input using Zod schemas

## Performance

- Static assets are served from Cloudflare's global CDN
- API functions run at the edge for low latency
- KV storage provides fast data access
- Images are optimized and cached

## Monitoring

- Check Cloudflare Pages analytics for traffic and performance
- Monitor function invocations and errors in the dashboard
- Set up alerts for critical errors if needed
