/**
 * Blog Posts - Fully Static Content
 * Define all blog posts here with frontmatter-like data
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "web-design-trends-2025",
    title: "Web Design Trends to Watch in 2025",
    excerpt:
      "Discover the latest web design trends that will dominate 2025, from AI-powered interfaces to sustainable design practices.",
    author: "Lucky Tech Dev",
    date: "2025-12-15",
    category: "Design",
    readTime: 6,
    featured: true,
    image: "🎨",
    content: `Web design is constantly evolving, and 2025 brings exciting new trends that blend creativity with functionality.

## 1. AI-Powered Personalization

Artificial Intelligence is revolutionizing how websites interact with users. In 2025, expect to see more personalized experiences that adapt in real-time to user behavior, preferences, and needs. This means:
- Dynamic content that changes based on user interactions
- Intelligent chatbots that understand context and provide meaningful responses
- Predictive interfaces that anticipate user needs before they click

## 2. Sustainable Web Design

As environmental concerns grow, sustainable web design is becoming a priority. This includes:
- Optimizing images and reducing file sizes
- Using eco-friendly hosting solutions
- Implementing dark mode options to reduce energy consumption
- Minimizing unnecessary animations and heavy scripts

## 3. Inclusive and Accessible Design

Web accessibility is no longer optional. In 2025, we're seeing:
- WCAG 2.1 AA compliance as a standard
- Better support for screen readers and assistive technologies
- Color contrast improvements
- Keyboard navigation enhancements

## 4. Immersive 3D Experiences

WebGL and modern browsers now support sophisticated 3D experiences without plugins. Look for:
- 3D product visualizations
- Interactive 3D backgrounds
- Virtual tours and experiences
- 3D animations that enhance storytelling

## 5. Voice and Gesture Interfaces

As users become more mobile-centric, voice and gesture controls are gaining importance:
- Voice search optimization
- Gesture-based navigation
- Voice-activated features
- Haptic feedback integration

## Conclusion

The web design landscape in 2025 is all about creating experiences that are intelligent, inclusive, and sustainable. By embracing these trends, you'll ensure your website stays ahead of the curve and provides exceptional value to your users.`,
  },

  {
    id: "2",
    slug: "seo-strategies-small-business",
    title: "Essential SEO Strategies for Small Businesses",
    excerpt:
      "Learn practical SEO techniques to improve your search rankings and attract more organic traffic without breaking the bank.",
    author: "Lucky Tech Dev",
    date: "2025-12-08",
    category: "SEO",
    readTime: 8,
    featured: true,
    image: "🔍",
    content: `Search Engine Optimization doesn't have to be complicated or expensive. Here are essential strategies every small business should implement.

## 1. Keyword Research and Planning

Start with understanding what your customers are searching for:
- Use free tools like Google Keyword Planner
- Target long-tail keywords with lower competition
- Focus on keywords with commercial intent
- Create a keyword map for your website structure

## 2. On-Page Optimization

Optimize each page to rank higher:
- Include target keywords in titles and meta descriptions
- Use proper heading hierarchy (H1, H2, H3)
- Write compelling content that answers user questions
- Optimize image alt text
- Ensure fast page loading speeds

## 3. Local SEO

For service-based businesses, local SEO is crucial:
- Claim and optimize your Google Business Profile
- Build local citations on relevant directories
- Encourage customer reviews
- Create location-specific content
- Use local schema markup

## 4. Content Marketing

Create content that ranks and converts:
- Write blog posts targeting your keywords
- Develop comprehensive guides and resources
- Create helpful how-to content
- Update old content to maintain relevance
- Use internal linking strategically

## 5. Technical SEO

Ensure your website is search engine friendly:
- Fix broken links and 404 errors
- Implement SSL certificates (HTTPS)
- Create an XML sitemap
- Make your site mobile-responsive
- Improve Core Web Vitals

## 6. Link Building

Quality backlinks improve authority:
- Reach out to industry contacts for guest posting
- Create linkable assets (guides, tools, infographics)
- Monitor competitor backlinks
- Build relationships with relevant websites

## Getting Started

You don't need a huge budget. Start with keyword research, optimize your existing content, and focus on providing genuine value to your audience. SEO is a long-term strategy, but the results are worth the effort.`,
  },

  {
    id: "3",
    slug: "react-performance-tips",
    title: "React Performance Optimization Tips",
    excerpt:
      "Improve your React application's performance with these practical optimization techniques and best practices.",
    author: "Lucky Tech Dev",
    date: "2025-11-30",
    category: "Development",
    readTime: 10,
    featured: false,
    image: "⚡",
    content: `React is powerful, but poorly optimized React applications can be slow. Here are key strategies to maximize performance.

## 1. Code Splitting and Lazy Loading

Reduce initial bundle size:
- Use dynamic imports for large components
- Implement route-based code splitting with Next.js
- Lazy load images with loading="lazy"
- Use React.lazy() for component-level code splitting

## 2. Memoization

Prevent unnecessary re-renders:
- Use React.memo for functional components
- Implement useMemo for expensive calculations
- Use useCallback for stable function references
- Profile components to identify bottlenecks

## 3. State Management Optimization

Keep state management efficient:
- Avoid storing unnecessary data in state
- Use local state instead of global when possible
- Implement proper state structure (normalized data)
- Consider using Context API or Zustand instead of Redux if you don't need it

## 4. Image Optimization

Images are usually the biggest performance culprit:
- Use modern formats like WebP
- Serve appropriately sized images
- Implement responsive images with srcset
- Use the Next.js Image component for automatic optimization

## 5. Bundle Analysis

Know what's in your bundle:
- Use webpack-bundle-analyzer
- Identify and remove unused dependencies
- Check for duplicate packages
- Monitor bundle size in CI/CD

## 6. Virtual Scrolling

For long lists:
- Implement virtual scrolling for large datasets
- Use libraries like react-window or react-virtualized
- Only render visible items to the DOM
- Dramatically improve performance with thousands of items

## 7. Database and API Optimization

Server-side matters too:
- Implement proper caching strategies
- Use pagination for large datasets
- Compress API responses
- Implement GraphQL if beneficial for your use case

## Measurement and Monitoring

Always measure before and after optimization:
- Use React DevTools Profiler
- Monitor Core Web Vitals with Lighthouse
- Set up performance budgets
- Use real user monitoring (RUM) tools

## Conclusion

Performance optimization is an ongoing process. Start with measurement, identify bottlenecks, and apply targeted optimizations. Your users will appreciate the faster, smoother experience.`,
  },
];

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}
