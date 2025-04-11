import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
        API_URL: process.env.API_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        API_SECRET: process.env.API_SECRET,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};
 
export default withNextIntl(nextConfig);