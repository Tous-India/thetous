# Blog System Documentation

## Overview

Your blog page is now automatically synchronized with your WordPress site at https://thetous.com. New blog posts are fetched and displayed automatically.

## How It Works

### 1. **Automatic Updates on Build**
Every time you build your Next.js application for production, the latest blogs are fetched:

```bash
npm run build
```

This runs the `fetch-blogs` script before building, ensuring your production site always has the latest content.

### 2. **Manual Updates**
To manually update blogs without building:

```bash
npm run fetch-blogs
```

This fetches the latest 10 blog posts from your WordPress API and updates `src/data/blogs.json`.

### 3. **Development**
During development (`npm run dev`), the blogs page will display whatever is currently in `src/data/blogs.json`. Run `npm run fetch-blogs` to refresh the data while developing.

## File Structure

```
the-tous/
├── scripts/
│   ├── fetchBlogs.js          # Blog fetching script
│   └── README.md              # Script documentation
├── src/
│   ├── app/
│   │   └── blogs/
│   │       ├── page.js        # Blog listing page
│   │       └── style.css      # Blog page styles
│   └── data/
│       └── blogs.json         # Blog data (auto-generated)
├── next.config.mjs            # Next.js config (includes WordPress image domain)
└── package.json               # Updated with blog fetch scripts
```

## Blog Data Structure

Each blog in `src/data/blogs.json` contains:

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

## Features

### ✅ Automatic Synchronization
- Blogs are automatically fetched before each production build
- No manual intervention needed

### ✅ Clean Excerpts
- HTML tags are removed
- Metadata is filtered out
- First 200 characters of actual content

### ✅ Featured Images
- Optimized image sizes from WordPress
- Fallback for posts without images
- Configured for Next.js Image optimization

### ✅ Category System
- Categories are automatically extracted
- Dynamically displayed in sidebar
- Based on WordPress categories

### ✅ External Links
- Blog cards link to full WordPress posts
- Open in new tabs
- Preserves your WordPress site as content source

## Updating Blogs

### For New Blog Posts

1. **Publish a new post on WordPress**
2. **Deploy your site** (triggers automatic build)
   - OR run `npm run fetch-blogs` locally and commit changes

### For Updated Content

Same as above - the script always fetches the latest version of posts.

## Production Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Blogs will auto-update on each deployment

**For automatic updates without code changes:**
- Set up a webhook from WordPress to trigger Vercel deployments
- Or use Vercel's CRON jobs to redeploy daily

### GitHub Actions (Alternative)
Create `.github/workflows/update-blogs.yml` to auto-update blogs:

```yaml
name: Update Blogs Daily

on:
  schedule:
    - cron: '0 9 * * *'  # Run daily at 9 AM UTC
  workflow_dispatch:

jobs:
  update-blogs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run fetch-blogs
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'chore: update blog data [skip ci]'
```

## Troubleshooting

### Images Not Loading
- Check `next.config.mjs` has correct domain whitelist
- Verify featured images exist on WordPress
- Check browser console for CORS errors

### Blogs Not Updating
- Run `npm run fetch-blogs` to see error messages
- Verify WordPress API is accessible: https://thetous.com/wp-json/wp/v2/posts
- Check internet connection

### Build Failures
- Run `npm run fetch-blogs` separately to debug
- Check that `src/data` directory exists
- Verify Node.js version is compatible

## Customization

### Change Number of Posts
Edit `scripts/fetchBlogs.js`, line 4:
```javascript
const WORDPRESS_API_URL = 'https://thetous.com/wp-json/wp/v2/posts?_embed&per_page=20'; // Change 10 to 20
```

### Modify Excerpt Length
Edit `scripts/fetchBlogs.js`, function `extractExcerpt`:
```javascript
const excerpt = cleanedContent.substring(0, 300).trim(); // Change 200 to 300
```

### Update Page Layout
Edit `src/app/blogs/page.js` to modify:
- Grid layout (currently 2 columns on desktop)
- Card design
- Category display
- Date formatting

## WordPress API Reference

The script uses WordPress REST API v2:
- **Endpoint:** `https://thetous.com/wp-json/wp/v2/posts`
- **Parameters:**
  - `_embed`: Include author, categories, and featured media
  - `per_page`: Number of posts to fetch (default: 10)

## Support

For issues or questions:
1. Check `scripts/README.md` for detailed script documentation
2. Run `npm run fetch-blogs` to see detailed error messages
3. Verify WordPress REST API is accessible in browser
