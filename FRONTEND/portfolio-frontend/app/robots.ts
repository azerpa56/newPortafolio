import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://alejandro-zerpa.tech/sitemap.xml',
    host: 'https://alejandro-zerpa.tech',
  };
}
