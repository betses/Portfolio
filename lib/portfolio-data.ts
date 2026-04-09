export const profileData = {
  name: 'Betsegaw Sebsibe',
  title: 'Software Engineer (Full-Stack) | AI-Integrated Product Builder',
  avatar: '/professional-developer-avatar.png',
  email: 'betsesebe@gmail.com',
  phone: '(+251) 924313213',
  birthday: 'August 9, 1996',
  location: 'Addis Ababa, Ethiopia',
  social: {
    linkedin: 'https://www.linkedin.com/in/betsegaw-sebsibe/',
    github: 'https://github.com/NatiDeme',
    telegram: 'https://t.me/betses',
  },
}

export const aboutData = {
  description: [
    'I am a software engineer focused on building production web products and practical AI-powered features. I work across full-stack systems, not just UI, with experience shipping e-commerce flows, admin operations, and external service integrations.',
    'My current positioning is honest and practical: I am not an AI engineer yet, but I have hands-on experience integrating AI into real products. I focus on delivering useful outcomes with Next.js and MongoDB, while improving reliability and speed through automation and strong engineering execution.',
  ],
  services: [
    {
      icon: 'Code',
      title: 'Full-Stack Product Development',
      description:
        'Building production-ready web products with Next.js, React, and MongoDB from feature design to deployment.',
    },
    {
      icon: 'Zap',
      title: 'AI Feature Integration',
      description:
        'Integrating AI APIs into real user workflows, including image-based recognition and AI-assisted product matching.',
    },
    {
      icon: 'Smartphone',
      title: 'Commerce Operations Automation',
      description:
        'Implementing payments, shipping-label workflows, and tax logic to reduce manual operational overhead.',
    },
    {
      icon: 'PenTool',
      title: 'Quality and Delivery',
      description:
        'Applying QA, testing, and documentation practices that improve release confidence and product stability.',
    },
  ],
  testimonials: [
    {
      avatar: '/professional-man.jpg',
      name: 'Client Product Team',
      text: 'Delivered practical features with clear ownership and strong follow-through from implementation to handoff.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Project Stakeholder',
      text: 'Contributed across product and operations, helping us move from ideas to working, reliable workflows.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Engineering Collaboration',
      text: 'Strong collaboration in cross-functional teams, with consistent support for quality and delivery goals.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Operations Team',
      text: 'Improved operational workflows by connecting product features with real fulfillment and support needs.',
    },
  ],
  clients: [
    { name: 'Monomedia', logo: '/software-company-logo.png' },
    { name: 'Shady Grove Group', logo: '/web-agency-logo.jpg' },
    { name: 'GM Media', logo: '/startup-logo.png' },
    { name: 'ZOWI TECH', logo: '/tech-company-logo.jpg' },
    { name: 'FUSE', logo: '/design-agency-logo.png' },
    { name: 'Growth Magnet', logo: '/app-development-logo.jpg' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'MSc in Information Technology (MSIT), Florida University Southeast (FUSE)',
      period: '2023 — Present',
      description:
        'Graduate studies focused on applied software engineering and information technology systems.',
    },
    {
      title: 'Microverse Software Development Program',
      period: '2022 — 2023',
      description:
        'Completed a remote intensive software development program with practical project delivery and team collaboration.',
    },
    {
      title: 'BSc in Software Engineering, Addis Ababa University',
      period: '2015 — 2021',
      description:
        'Built a foundation in software engineering, application development, and system-level problem solving.',
    },
  ],
  experience: [
    {
      title: 'Full-Stack Engineer, Monomedia (Client Project: Monmon.se)',
      period: '2024 — Present',
      description:
        'Contributed to building and shipping a production trading-card e-commerce platform with Next.js and MongoDB. Implemented storefront/admin workflows, Stripe payment functionality, Swedish tax handling, PostNord shipping-label process integration, and an AI-powered card scan feature for card identification and pricing/product matching.',
    },
    {
      title: 'Content Manager | Junior Developer, Shady Grove Group',
      period: '2021 — Present',
      description:
        'Supported web product delivery through manual testing, bug reporting, regression checks, and documentation. Contributed to CMS updates and product quality improvements while coordinating sprint execution and QA process integration.',
    },
    {
      title: 'Virtual Assistant (Technical Community Ops), GM Media',
      period: '2025 — Present',
      description:
        'Supported social community operations and engagement workflows, assisted in testing Discord bot automations, and provided user feedback signals to improve engagement tools.',
    },
    {
      title: 'Junior Developer, ZOWI TECH',
      period: '2019 — 2020',
      description:
        'Contributed to developing an e-commerce app and an inventory management system deployed across multiple marketplace contexts.',
    },
  ],
  skills: [
    { name: 'Next.js / React', level: 90 },
    { name: 'MongoDB / Data Modeling', level: 84 },
    { name: 'Payments, Shipping, Tax Integrations', level: 82 },
    { name: 'AI Product Integrations', level: 78 },
  ],
}

export const portfolioData = {
  categories: ['all', 'ai integrations', 'e-commerce', 'web development'],
  projects: [
    {
      slug: 'monmon-ai-commerce',
      title: 'Monmon.se (Client Project via Monomedia)',
      category: 'ai integrations',
      image: '/modern-ecommerce-website.png',
      description:
        'Production trading-card webshop with AI card scan, Stripe payments, Swedish tax handling, and PostNord shipping-label workflows.',
      tech: ['Next.js', 'React', 'MongoDB', 'Stripe', 'Claude API', 'PostNord'],
      liveUrl: 'https://monmon.se',
      githubUrl: 'https://monmon.se',
      timeline: '2024 — Present',
      role: 'Full-Stack Engineer (Client Project at Monomedia)',
      overview:
        'Built and shipped core commerce and operations workflows for a live trading-card webshop. Work included both customer-facing product features and internal operational flows.',
      problem:
        'The platform needed to support fast card discovery, reliable checkout, compliant tax handling, and practical shipping workflows without creating manual overhead for day-to-day operations.',
      solution:
        'Implemented storefront and admin functionality, integrated Stripe payments, encoded Sweden-specific tax logic, connected PostNord label workflows, and built an AI-based card scan feature to identify cards and return matching product/pricing data.',
      architecture: [
        'Next.js frontend and app-layer logic for customer/storefront and admin workflows',
        'MongoDB-backed product/order data model',
        'Stripe integration for payment and order lifecycle events',
        'PostNord integration for shipping-label and fulfillment process flow',
        'Claude-powered card scan pipeline for card recognition and product matching',
      ],
      responsibilities: [
        'Shipped end-to-end product flows across checkout, tracking, and operations',
        'Implemented production integration points (payments, shipping, tax)',
        'Built AI-assisted card scan feature into real commerce workflow',
        'Supported reliability and quality through iterative testing and fixes',
      ],
      outcomes: [
        'Delivered a working production flow from product browse to fulfillment',
        'Reduced manual effort in card lookup and shipping preparation steps',
        'Improved platform capability beyond static storefront behavior',
      ],
    },
    {
      slug: 'growth-magnet-platform',
      title: 'Growth Magnet',
      category: 'e-commerce',
      image: '/analytics-dashboard.png',
      description:
        'Contributed to a full-stack engagement platform with order workflows, notifications, and product-quality validation.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Vercel'],
      liveUrl: 'https://www.growthmagnets.xyz/',
      githubUrl: 'https://www.growthmagnets.xyz/',
      timeline: '2024 — 2025',
      role: 'Product Engineering Contributor',
      overview:
        'Contributed to a full-stack social engagement platform focused on smooth ordering flows and reliable product behavior.',
      problem:
        'The platform required coordinated user flows across service selection, checkout, notifications, and post-order visibility while maintaining release quality.',
      solution:
        'Supported feature delivery and validation across order-related journeys, helped improve notification behavior, and strengthened product quality through hands-on testing and issue documentation.',
      architecture: [
        'Next.js + React frontend for service and order journeys',
        'MongoDB data storage for product/order records',
        'Stripe integration for payment handling',
        'Discord/notification integration for operational signaling',
      ],
      responsibilities: [
        'Contributed to feature implementation and release readiness',
        'Validated workflows and documented edge-case issues',
        'Collaborated with team on quality improvements and fixes',
      ],
      outcomes: [
        'Improved confidence in production release stability',
        'Supported smoother user flow across key order states',
      ],
    },
    {
      slug: 'fuse-website-platform',
      title: 'FUSE Website',
      category: 'web development',
      image: '/modern-blog-interface.jpg',
      description:
        'Managed and developed the FUSE website on WordPress, handling content structure, updates, and usability-focused improvements.',
      tech: ['WordPress', 'CMS', 'QA', 'Content Operations'],
      liveUrl: 'https://myfuse.education/',
      githubUrl: 'https://myfuse.education/',
      timeline: '2021 — Present',
      role: 'Content Manager / Junior Developer',
      overview:
        'Owned day-to-day website updates and content operations while supporting product quality and delivery processes.',
      problem:
        'The site needed consistent updates and clear content structure without degrading usability or operational consistency.',
      solution:
        'Managed WordPress content and structure updates, supported customization efforts, and contributed to QA/documentation workflows to keep releases reliable.',
      architecture: [
        'WordPress CMS for content lifecycle management',
        'Operational workflow combining content, testing, and documentation',
      ],
      responsibilities: [
        'Managed content and information architecture updates',
        'Supported QA and regression checks on web changes',
        'Collaborated across teams to improve release process quality',
      ],
      outcomes: [
        'Maintained consistent website updates and clearer content organization',
        'Improved confidence in post-update site stability',
      ],
    },
    {
      slug: 'nile-basin-explorer',
      title: 'Nile Basin Explorer',
      category: 'web development',
      image: '/minimalist-portfolio-design.jpg',
      description:
        'Interactive digital exhibition built with Next.js to showcase river basin ecosystems and educational content.',
      tech: ['Next.js', 'React', 'Frontend Engineering'],
      liveUrl: 'https://github.com/NatiDeme/regions-ethiopia',
      githubUrl: 'https://github.com/NatiDeme/regions-ethiopia',
      timeline: 'Project Delivery',
      role: 'Frontend Developer',
      overview:
        'Built an interactive experience to present educational geographic content in a visually accessible way.',
      problem:
        'The project needed to communicate dense ecosystem and river-basin information in a format suitable for broad public exploration.',
      solution:
        'Implemented a Next.js-driven interactive interface with structured content presentation and navigation patterns optimized for readability and exploration.',
      architecture: [
        'Next.js frontend rendering and routing',
        'React component structure for interactive content sections',
      ],
      responsibilities: [
        'Implemented UI structure for educational exploration',
        'Supported content clarity through presentation and interaction design',
      ],
      outcomes: [
        'Delivered a usable digital exhibition experience for educational use',
      ],
    },
  ],
}

export function getProjectBySlug(slug: string) {
  return portfolioData.projects.find((project) => project.slug === slug)
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
}

export const contactData = {
  email: 'betsesebe@gmail.com',
  phone: '(+251) 924313213',
  location: 'Addis Ababa, Ethiopia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&output=embed',
}
