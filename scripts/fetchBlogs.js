const fs = require('fs');
const path = require('path');

const WORDPRESS_API_URL = 'https://thetous.com/wp-json/wp/v2/posts?_embed&per_page=10';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'blogs.json');

/**
 * Extracts clean excerpt from WordPress post content
 * Removes HTML tags and metadata, returns first 200 characters
 */
function extractExcerpt(content) {
  if (!content) return '';

  // Remove HTML tags
  let cleanedContent = content.replace(/<[^>]*>/g, ' ');

  // Remove extra whitespace
  cleanedContent = cleanedContent.replace(/\s+/g, ' ').trim();

  // Remove common WordPress metadata patterns
  cleanedContent = cleanedContent.replace(/\[.*?\]/g, '');

  // Get first 200 characters
  const excerpt = cleanedContent.substring(0, 200).trim();

  // Add ellipsis if truncated
  return excerpt.length < cleanedContent.length ? excerpt + '...' : excerpt;
}

/**
 * Fetches blog posts from WordPress API and saves to JSON file
 */
async function fetchBlogs() {
  try {
    console.log('Fetching blogs from WordPress API...');
    console.log(`URL: ${WORDPRESS_API_URL}`);

    const response = await fetch(WORDPRESS_API_URL);

    if (!response.ok) {
      throw new Error(`WordPress API returned status ${response.status}: ${response.statusText}`);
    }

    const posts = await response.json();
    console.log(`Successfully fetched ${posts.length} blog posts`);

    // Transform WordPress posts to our data structure
    const blogs = posts.map(post => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      const authorData = post._embedded?.author?.[0];
      const categories = post._embedded?.['wp:term']?.[0] || [];
      const tags = post._embedded?.['wp:term']?.[1] || [];

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        publishedDate: post.date,
        author: authorData?.name || 'Unknown Author',
        featuredImage: featuredMedia?.source_url || 'https://thetous.com/wp-content/uploads/default-blog.jpg',
        excerpt: extractExcerpt(post.content.rendered),
        categories: categories.map(cat => cat.name),
        tags: tags.map(tag => tag.name),
        link: post.link
      };
    });

    // Ensure output directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      console.log(`Creating directory: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogs, null, 2), 'utf8');
    console.log(`✓ Successfully saved ${blogs.length} blogs to ${OUTPUT_FILE}`);

    // Show summary
    console.log('\nBlog Summary:');
    blogs.slice(0, 3).forEach(blog => {
      console.log(`  - ${blog.title} (${blog.publishedDate})`);
    });
    if (blogs.length > 3) {
      console.log(`  ... and ${blogs.length - 3} more`);
    }

  } catch (error) {
    console.error('Error fetching blogs:', error.message);

    // Check if we have existing blog data
    if (fs.existsSync(OUTPUT_FILE)) {
      console.log('\n⚠ Using existing blog data from cache');
    } else {
      console.error('\n✗ No cached blog data available. Build will use empty data.');
      // Create empty array to prevent build failures
      const outputDir = path.dirname(OUTPUT_FILE);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(OUTPUT_FILE, '[]', 'utf8');
    }

    // Don't exit with error to prevent build failures
    // Just warn and continue
    process.exit(0);
  }
}

// Run the script
fetchBlogs();
