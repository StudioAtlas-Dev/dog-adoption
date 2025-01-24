# Project Plan: Dog Animal Shelter Website

## 1. **Sitemap**

### 1.1. **Home**
- **Hero Section**  
  - Large, inviting headline and subheading (e.g., “Find Your New Best Friend!”).  
  - Primary Call-to-Action (CTA): “Meet Our Dogs”  
  - Secondary CTA: “Donate Today”  
  - Subtle, open-source SVG pattern or background illustration.
- **Featured Dogs**  
  - 3 to 4 featured adoptable dogs in a responsive grid or carousel.  
  - Hover effect with slight zoom and color overlay.
- **Quick Highlights**  
  - Short intro to the shelter's mission.  
  - React Icons for quick links (e.g., `<FaPaw />` or `<FaBone />`) to Adoption, Volunteer, Donate pages.
- **Upcoming Events Preview**  
  - Display 2-3 upcoming events with minimal info (date, title, brief detail).  
  - "See All Events" link to full Events page.

---

### 1.2. **About Us**
- **Mission & History**  
  - Timeline or simple paragraphs detailing founding story and purpose.  
  - Minor open-source SVG accents (e.g., paw prints).
- **Leadership & Team**  
  - Grid or list of staff/volunteers with short bios.  
  - Optional hover state: show a fun fact or contact link.
- **Partnerships & Accreditations**  
  - Logos of partner organizations and sponsors.  
  - Brief description of how these partnerships benefit the shelter.

---

### 1.3. **Adoption**
- **Available Dogs**  
  - Responsive grid of dog profiles.  
  - Filter by age, breed, size, etc. using a controlled component.  
  - React Icons to denote attributes (e.g., `<FaHeart />` for friendly, `<FaMedkit />` for medical).
- **Dog Profile Page**  
  - Larger photo gallery (use Next.js Image component for optimization).  
  - Detailed info: temperament, history, medical notes.  
  - "Apply to Adopt" button linking to an online form or separate application page.
- **Adoption Process**  
  - Step-by-step guide with simplified bullet points.  
  - FAQ section using an accordion pattern for easy reading.
- **Success Stories**  
  - Photo-based testimonials from adopters.  
  - Before-and-after images in a simple gallery layout.

---

### 1.4. **Donate**
- **Donation Overview**  
  - Info on how donations are used.  
  - Impact metrics (e.g., how many dogs rescued per month).  
- **One-Time & Recurring Donations**  
  - Simple forms with suggested amounts (buttons for $10, $25, $50, etc.).  
  - Recurring option (integrated with a payment processor like Stripe).  
- **In-Kind Donations**  
  - List of items needed (food, blankets, toys).  
  - Instructions for drop-off or shipping.

---

### 1.5. **Volunteer**
- **Why Volunteer**  
  - Brief list of benefits (community, skill-building, love for dogs).  
- **Opportunities**  
  - Shelter volunteering, event volunteering, fostering, etc.  
  - Simple grid or collapsible panels with roles and tasks.
- **Requirements & Application**  
  - Online form to gather volunteer interests and availability.  
  - Light CSS or SVG decorations (e.g., paw icons for bullet points).

---

### 1.6. **Foster**
- **Program Overview**  
  - Benefits and responsibilities of being a foster.  
- **Application & FAQ**  
  - Similar structure to Volunteer, emphasizing financial coverage, vet visits, etc.

---

### 1.7. **Events**
- **Upcoming Events**  
  - List or calendar display of adoption fairs, fundraisers, workshops.  
  - RSVP or registration links (integrated with a service like Eventbrite if needed).
- **Past Events**  
  - Photos, videos, and summaries of previous events.  
  - Stats (number of adoptions, funds raised, etc.).

---

### 1.8. **Gallery**
- **Photo Albums**  
  - Grid or masonry layout with a lightbox for full-size images.  
- **Video Gallery**  
  - Embedded YouTube/Vimeo links with simple thumbnail previews.
- **User Submissions**  
  - Optional form for adopters/volunteers to submit photos (requires moderation).

---

### 1.9. **Blog/News**
- **Articles & Updates**  
  - Simple category tags for easy filtering (e.g., "Training Tips," "Shelter News").  
  - Summaries on listing page; click to read full post.  
- **Press Releases**  
  - Separate or combined with blog, highlighting official announcements.

---

### 1.10. **Contact Us**
- **Contact Form**  
  - Name, email, phone, message, department/topic dropdown.  
  - Minimal open-source SVG icons for fields (e.g., `<FaUser />` for name).  
- **Shelter Location & Hours**  
  - Next.js Image for a static map or embedded Google Maps.  
- **Phone & Email**  
  - Clear display in a contact card style component.

---

### 1.11. **Privacy Policy & Terms of Use**
- **Privacy**  
  - Explanation of data collection, storage, and usage.  
- **Terms**  
  - Usage policies for website visitors and disclaimers.

---

### 1.12. **Footer**
- **Quick Links**  
  - Adoption, Volunteer, Donate, Blog, etc.  
- **Social Media**  
  - React Icons for Facebook, Instagram, YouTube, etc.  
- **Newsletter Signup**  
  - Simple email field and "Subscribe" button.  

---

## 2. **Design & Styling Guidelines**

### 2.1. **Color Palette**
- Defined in tailwind.config.ts

### 2.2. **Typography**
- **Header Font:**  
  - "Poppins" (Google Fonts) for headings and important text.  
- **Body Font:**  
  - "Roboto" (Google Fonts) for paragraphs and details.

### 2.3. **Key UI Elements**
- **Buttons:**  
  - Rounded corners, solid fill with hover changes (e.g., darker shade or simple box-shadow).  
  - Use `<FaPaw />` or `<FaBone />` from react-icons if additional icon flair is needed.
- **Cards & Hover Effects:**  
  - Slight image zoom on hover (CSS transform: scale(1.05)).  
  - Color overlay or minimal box-shadow for a playful but clean look.
- **Background Accents:**  
  - Open-source SVG patterns (e.g., paw prints from [Hero Patterns](https://heropatterns.com/)) at low opacity.  
  - Use CSS gradients in headers/footers to avoid expensive custom graphics.

---

## 3. **Implementation Notes (Next.js)**

### 3.1. **SEO & Metadata**
- Use **next-seo** or a custom `_document.js` / `_app.js` approach:  
  - Define default meta tags (title, description) in `next-seo.config.js` or similar.  
  - Include Open Graph tags for social sharing previews (especially important for dog profile pages).

### 3.2. **Routing**
- Leverage **Next.js 15 App Router** with TypeScript:
  - `app/page.tsx` for Home
  - `app/adoption/[dogId]/page.tsx` for individual dog profiles
  - `app/events/[eventId]/page.tsx` for individual event details
  - `app/layout.tsx` for root layout
  - Use React Server Components (RSC) by default
  - Add 'use client' directive only when needed for client-side interactivity

### 3.3. **Type Safety**
- Implement strong TypeScript types:
  - Define interfaces for all data models (e.g., `Dog`, `Event`, `BlogPost`)
  - Use Zod for runtime validation of external data
  - Leverage TypeScript template literal types for routes
  - Create type-safe API endpoints using Route Handlers

### 3.4. **Images**
- Utilize the **Next.js Image component** with proper TypeScript props:
  ```tsx
  import { ImageProps } from 'next/image'
  
  interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
    src: string;
    alt: string;
  }
  ```
- Serve images from a CDN or local folder, ensuring responsive breakpoints
- Implement proper error boundaries for image loading failures

### 3.5. **Styling Approach**
- Use **Tailwind CSS** with proper TypeScript integration:
  - Leverage `tailwind-merge` for conditional classes
  - Use `clsx` or `cn` utility for type-safe class combinations
  - Create type-safe variants with `cva` from `class-variance-authority`
- Maintain type-safe theme configuration in `tailwind.config.ts`

### 3.6. **Dynamic Data & CMS**
- If using a headless CMS, implement type-safe data fetching:
  - Generate TypeScript types from CMS schema
  - Use tRPC or GraphQL with proper type generation
  - Implement proper error handling and loading states
- Use **Server Components** for data fetching where possible
- Implement proper caching strategies using Next.js 15 caching mechanisms

### 3.7. **Security & Performance**
- Ensure **HTTPS** via hosting platform (e.g., Vercel).  
- Regularly test **Core Web Vitals** and optimize (lazy load images, reduce unused scripts).  
- Add **CSRF protection** if forms handle sensitive info.

---

## 4. **Open-Source Asset Recommendations**

1. **Icons**:  
   - `react-icons/fa` or `react-icons/gi` for paw prints, bones, hearts.  
2. **SVG Patterns**:  
   - [Hero Patterns](https://heropatterns.com/) or [SVG Repo](https://www.svgrepo.com/) for subtle backgrounds.  
3. **Illustrations**:  
   - [undraw.co](https://undraw.co/) for freely usable vector illustrations (if you want generic dog or community images).

---

## 5. **Key Takeaways**

1. **Maintain a Playful Aesthetic**  
   - Use bright accent colors and friendly fonts.  
   - Add subtle hover effects and open-source icons to reinforce the dog theme.
2. **Ensure High Usability**  
   - Clear, intuitive navigation with top-level pages for Adoption, Donate, Volunteer, etc.  
   - Responsive design for mobile, tablet, and desktop.
3. **Focus on Performance & SEO**  
   - Utilize Next.js features like Image optimization and next-seo.  
   - Keep asset sizes minimal by using open-source SVGs and compressed images.
