# Product Requirements Document (PRD)

Project: benappiahpoku.com – Blog-First Website
Owner: Benjamin Appiah-Poku
Date: 2025-08-17
Prepared by: ChatGPT

1. Project Overview

Goal: Migrate benappiahpoku.com from WordPress to Nuxt (Vue) and host on Netlify, creating a clean, minimal, blog-first website with optional integration of YouTube Shorts, podcast audio, and links to Stratonea, TekLumin, and free apps.

Objectives:

Provide a central hub for Benjamin’s blogs.

Maintain ecosystem visibility without cluttering homepage.

Include newsletter subscription funnel and free guide download.

Ensure site is fully static and low-cost (Netlify free hosting).

Target Users

Entrepreneurs, SME owners, and professionals seeking insights on business, strategy, tools, and productivity.

Followers of Benjamin’s YouTube Shorts and podcasts.

Potential clients for Stratonea, TekLumin, or users of free tools.

Functional Requirements
3.1 Navigation

Top navigation: Home · Blog · About · Tools · Contact · Newsletter

Footer: Quick links + social media + address/email

3.2 Homepage

Hero section with short intro and buttons: “Read the Blog” / “Join Newsletter”

Featured post section with optional YouTube Short or podcast audio

Recent posts section (grid or list, paginated)

Newsletter CTA block

Tools teaser section (3–4 cards linking to Stratonea, TekLumin, Free Apps)

3.3 Blog Pages

Blog Index (/blog): List/grid of posts, with optional sidebar for categories/tags/search

Single Blog Post ```(/blog/<slug>):```

Article body

Optional YouTube Short embed

Optional podcast audio player

Tags

Next/Previous post links

Newsletter CTA

3.4 Static Pages

About: Bio, background, Stratonea focus, writing/media section, newsletter CTA

Tools: Cards for Stratonea, TekLumin, Free Apps, newsletter CTA

Contact: Address, phone, email, contact form, newsletter CTA

Newsletter: Signup form + free guide download

3.5 Content Management

Markdown files stored in /content with front-matter:

title, slug, date, summary, tags

optional shortsId (YouTube), audioUrl (podcast)

Static pages use same Markdown + templates

3.6 Deployment

Nuxt 3 + @nuxt/content

Static generation for all pages

Netlify hosting (free tier, static output)
