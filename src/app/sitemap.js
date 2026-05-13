export default function sitemap() {
  const baseUrl = 'https://www.thetous.com'
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-a-call`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tech-solution/web-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tech-solution/shopify-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tech-solution/crm-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/luxeliv`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/dhirsons-jewellery-house`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/omp-grooming`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/executive-cars`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/silvago`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies/prozvofit`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `https://blog.thetous.com`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `https://blog.thetous.com/2025/12/27/why-every-brand-needs-a-strong-visual-identity-in-2026/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `https://blog.thetous.com/2025/03/30/the-secret-sauce-to-scale-your-ecommerce-business-with-paid-ads/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
