# Blog Fetch Script

This directory contains scripts for fetching and managing blog data from WordPress.

## fetchBlogs.js

Fetches the latest blog posts from your WordPress site and saves them to `src/data/blogs.json`.

### Usage

```bash
# Fetch latest blogs
npm run fetch-blogs

# Or run directly
node scripts/fetchBlogs.js
```

### What It Does

1. Fetches posts from WordPress REST API: `https://thetous.com/wp-json/wp/v2/posts`
2. Extracts relevant data (title, author, featured image, etc.)
3. Cleans excerpts (removes HTML, metadata)
4. Saves to `src/data/blogs.json`

### Configuration

Edit the script to customize:

- `WORDPRESS_API_URL`: Change the number of posts fetched (default: 10)
- `extractExcerpt()`: Modify excerpt length (default: 200 characters)

### Error Handling

- If fetch fails, existing blog data is preserved
- If no cached data exists, creates empty array to prevent build failures
- Exits with code 0 (success) even on errors to avoid breaking builds

### Data Structure

Each blog post is saved with:

```json
{
  "id": 2723,
  "title": "Blog Post Title",
  "slug": "blog-post-slug",
  "publishedDate": "2025-12-27T05:24:21",
  "author": "Author Name",
  "featuredImage": "https://thetous.com/wp-content/uploads/...",
  "excerpt": "Clean excerpt without HTML...",
  "categories": ["Category 1", "Category 2"],
  "tags": ["Tag 1", "Tag 2"],
  "link": "https://thetous.com/full-post-url/"
}
```

### Troubleshooting

**API Connection Issues:**
- Verify WordPress API is accessible: https://thetous.com/wp-json/wp/v2/posts
- Check internet connection
- Check for CORS or firewall issues

**No Featured Images:**
- Script uses default fallback image
- Verify images exist on WordPress site

**Build Failures:**
- Run script manually to see detailed errors
- Check Node.js version compatibility
- Verify `src/data` directory permissions
