/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL;
module.exports = {
  siteUrl,
  exclude: ["/404", "/maintenance"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/maintenance"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
