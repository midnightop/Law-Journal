import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date('2026-04-07'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bare-acts`,
      lastModified: new Date('2026-04-07'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-laws`,
      lastModified: new Date('2026-04-07'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
