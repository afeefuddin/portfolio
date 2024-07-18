/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
          rule.test?.test?.('.svg'),
        )
    
        config.module.rules.push(
          // Reapply the existing rule, but only for svg imports ending in ?url
          {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },
          // Convert all other *.svg imports to React components
          {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
          },
        )
    
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i
        config.resolve.alias.canvas = false;
        return config
      },
      async redirects(){
        return [
          {
            source: '/linkedin',
            destination: 'https://www.linkedin.com/in/afeef-uddin-2ab567247/',
            permanent: true,
          },
          {
            source: '/resume',
            destination: 'https://drive.google.com/file/d/1mxpB3T7vzIH0n3b3kaV7akmOO5l3iT9H/view?usp=sharing',
            permanent: true,
          }
        ]
      }
}

module.exports = nextConfig
