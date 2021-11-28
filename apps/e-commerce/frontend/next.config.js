// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { createSecureHeaders } = require('next-secure-headers')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false
  },
  poweredByHeader: false,
  headers: async () => [{ source: '/(.*)', headers: createSecureHeaders() }],
};

module.exports = withNx(nextConfig);
