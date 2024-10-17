/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  compiler: {
    reactRemoveProperties: {
      properties: ['^data-testid$'],
    },
  },
};

export default nextConfig;
