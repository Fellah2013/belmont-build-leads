# Belmont Construction Company Website - Implementation Plan

## 1. Environment Setup
- Install dependencies: `react-router-dom`, `framer-motion`, `lucide-react`, `sonner`, `clsx`, `tailwind-merge`.
- Configure Tailwind with brand colors: Deep Navy Blue (#0B1F3B) and Construction Orange (#F57C00).
- Set up Google Fonts: Poppins (headings) and Roboto (body).

## 2. Image Generation
- Generate high-quality images for:
  - Hero background (Construction site/Skyscraper)
  - Services (Residential, Commercial, Civil, Renovation, Interior, Management)
  - Portfolio projects (Residential villa, Commercial complex, Infrastructure bridge)

## 3. Core Components
- `Navbar`: Responsive with desktop links and mobile drawer.
- `Footer`: Company info, quick links, and contact details.
- `ServiceCard`: Reusable card for services.
- `ProjectCard`: Reusable card for portfolio.
- `ContactForm`: Using shadcn components with validation.
- `WhatsAppButton`: Floating CTA.
- `ProcessTimeline`: Visual flow for the "How We Work" section.

## 4. Pages Implementation
- `Home`: Hero, services preview, featured projects, "Why Choose Us", testimonials.
- `About`: Company story, mission/vision, core values, team.
- `Services`: Detailed grid of services.
- `Projects`: Filterable project gallery.
- `HowWeWork`: Step-by-step process.
- `Contact`: Form, map, contact details, site visit request.
- `Blog`: Simple list/grid for industry news.

## 5. Polish & Finalization
- Implement smooth scrolling and transitions using `framer-motion`.
- Ensure full mobile responsiveness.
- SEO optimization (meta tags, semantic HTML).
- Final build validation and testing.
