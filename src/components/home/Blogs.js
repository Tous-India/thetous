"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const fetchLatestBlogs = async () => {
    const response = await fetch(
      "https://blog.thetous.com/wp-json/wp/v2/posts?_embed&per_page=2"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const posts = await response.json();

    return posts.map((post) => ({
      id: post.id,
      title: stripHtml(post.title.rendered),
      excerpt: extractExcerpt(post),
      link: post.link,
      featuredImage: getFeaturedImage(post),
    }));
  };

  const { data: blogs = [], isLoading: loading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchLatestBlogs,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const stripHtml = (html) => {
    return html
      .replace(/<[^>]*>/g, "")
      .replace(/&hellip;/g, "...")
      .replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .trim();
  };

  const extractExcerpt = (post) => {
    let contentText = stripHtml(post.content.rendered);
    contentText = contentText.replace(/\s+/g, " ").trim();

    const sentences = contentText.split(/\.\s+/);
    let startIndex = 0;

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i].trim();
      if (
        sentence.length > 30 &&
        !sentence.match(/^\d{4}/) &&
        !sentence.toLowerCase().includes("paid ads") &&
        !sentence.toLowerCase().includes("uncategorized")
      ) {
        startIndex = i;
        break;
      }
    }

    const contentSentences = sentences.slice(startIndex, startIndex + 2);
    const excerpt = contentSentences.join(". ").trim();

    if (excerpt.length > 50) {
      return excerpt.substring(0, 200) + "...";
    }

    const excerptText = stripHtml(post.excerpt.rendered);
    return excerptText.substring(0, 200) + "...";
  };

  const getFeaturedImage = (post) => {
    if (
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0]
    ) {
      const media = post._embedded["wp:featuredmedia"][0];
      if (media.media_details && media.media_details.sizes) {
        const sizes = media.media_details.sizes;
        if (sizes.large) return sizes.large.source_url;
        if (sizes.medium_large) return sizes.medium_large.source_url;
        if (sizes.full) return sizes.full.source_url;
      }
      return media.source_url;
    }
    return null;
  };

  if (loading) {
    return (
      <div className="blog-section-home last-section-of-every-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-div">
                <div id="word-heading" className="work-heading-home row-div">
                  <h2>Blogs</h2>
                </div>
              </div>
              <p>Loading blogs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="blog-section-home last-section-of-every-page pb-2"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-div">
              <div id="word-heading" className="work-heading-home row-div">
                <h2 className="main-section-heading">Blogs</h2>
                <Link href="https://blog.thetous.com">
                  <button>
                    <span className="btn-span-1">View All</span>
                    <span className="btn-span-2">
                      <i className="ri-arrow-right-up-long-line"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="container-fluid">
              {blogs.map((blog, index) => (
                <React.Fragment key={blog.id}>
                  <div className="col-12 mainBlogDiv">
                    <div className="row">
                      <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="innerContainerBlog">
                          <h3 className="inner-heading">{blog.title}</h3>
                          <h4 className="">{blog.excerpt}</h4>
                          <Link
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Blog
                          </Link>
                        </div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="imgDiv">
                          {blog.featuredImage ? (
                            <Image
                              src={blog.featuredImage}
                              alt={blog.title}
                              width={300}
                              height={300}
                              priority={index === 0}
                            />
                          ) : (
                            <div
                              style={{
                                width: "300px",
                                height: "300px",
                                background: "#f0f0f0",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < blogs.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
