// src/services/api.ts
import { Service, CaseStudy, Blog, Testimonial, TeamMember, User } from '../types';

// Simple delay function to simulate async API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ---------------- HERO SLIDER ----------------
export const fetchHeroSlider = async () => {
  await delay(500);
  return [
    {
      id: 1,
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230712/pngtree-innovative-3d-renderings-for-web-development-promotions-marketing-collateral-business-presentations-image_3856387.jpg',
      title: 'Professional Facebook Business Page Setup',
      subtitle: 'Build brand credibility with a fully optimized and professional Facebook presence.',
    },
    {
      id: 2,
      image: 'https://png.pngtree.com/thumb_back/fw800/background/20250527/pngtree-digital-marketing-concept-image_17347611.jpg',
      title: 'Advanced Facebook Ads Campaign & Boosting',
      subtitle: 'Skyrocket your sales and ROI with our expert targeted advertising strategies.',
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2019/04/07/23/11/digital-marketing-4111002_1280.jpg',
      title: 'Expert Social Media Marketing Strategies',
      subtitle: 'Grow your brand presence across all major social media platforms effectively.',
    },
    {
      id: 4,
      image: 'https://img.freepik.com/free-photo/blonde-influencer-recording-make-up-video_23-2148135468.jpg?semt=ais_user_personalization&w=740&q=80',
      title: 'Cutting-Edge AI Video Making & Production',
      subtitle: 'Engage your audience with the latest AI-powered video content technology.',
    },
    {
      id: 5,
      image: 'https://img.freepik.com/free-photo/busy-young-attractive-smiling-man-sitting-co-working-open-office-holding-laptop_285396-1768.jpg?semt=ais_hybrid&w=740&q=80',
      title: 'Video Content Creation with Professional Models',
      subtitle: 'High-quality, human-centric video marketing to connect with your customers.',
    },
    {
      id: 6,
      image: 'https://img.freepik.com/premium-vector/modern-web-graphics-pack-vector-eps_1348508-29.jpg?semt=ais_hybrid&w=740&q=80',
      title: 'Creative Graphics & Visual Identity Design',
      subtitle: 'Stunning visual designs that make your brand stand out from the competition.',
    },
    {
      id: 7,
      image: 'https://img.freepik.com/premium-photo/web-design-team-work-project-concept-yellow-desk-with-web-design-text-top-view-flat-lay_176814-960.jpg?semt=ais_user_personalization&w=740&q=80',
      title: 'High Performance Website Design & Development',
      subtitle: 'Modern, fast, and responsive websites designed to convert visitors into buyers.',
    },
    {
      id: 8,
      image: 'https://i.ytimg.com/vi/iCs4XSHAuPM/maxresdefault.jpg',
      title: 'Expert Facebook Ads & Campaign Management',
      subtitle: 'Hands-free professional management of your Facebook advertising campaigns.',
    },
  ];
};

// ---------------- SERVICES ----------------
export const fetchServices = async (): Promise<Service[]> => {
  await delay(500);
  return [
    {
    id: '1',
    title: 'Facebook Business Page Setup',
    slug: 'facebook-business-page-setup',
    description: 'We create a fully optimized and professional Facebook business page that represents your brand identity perfectly. Our team ensures your page is visually appealing, contains complete business information, and is designed to engage your audience effectively. This setup helps you build credibility, increase followers, and attract potential customers organically.',
    image: 'https://www.socialchamp.com/blog/wp-content/uploads/2021/10/Feature-Banner_JulyOnwards-Q3-2021_1125x600_43.png'
  },
  {
    id: '2',
    title: 'Facebook Ads Campaign & Boosting',
    slug: 'facebook-ads-boosting',
    description: 'Get complete Facebook ads campaign setup with precise targeting, budget allocation, and creative ad design. We monitor campaign performance daily, optimize ads for maximum ROI, and ensure your products or services reach the right audience. Perfect for businesses looking to drive sales, leads, and online engagement effectively.',
    image: 'https://divbyzero.com/wp-content/uploads/2018/06/facebook-ads-inbound-boost.jpg'
  },
  {
    id: '3',
    title: 'Website Design & Development',
    slug: 'website-design',
    description: 'We create modern, responsive, and user-friendly websites tailored to your brand and business goals. Our team focuses on clean design, fast performance, and seamless navigation to ensure a great user experience. Ideal for businesses looking to establish an online presence, showcase products/services, and convert visitors into customers.',
    image: 'https://img.freepik.com/premium-photo/web-design-team-work-project-concept-yellow-desk-with-web-design-text-top-view-flat-lay_176814-960.jpg?semt=ais_user_personalization&w=740&q=80'
  },
  {
    id: '4',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Our social media marketing services help grow your brand presence across Facebook, Instagram, and other platforms. We create content calendars, schedule engaging posts, run promotions, and monitor analytics to increase engagement, reach, and follower growth. Focused on building a loyal community and boosting your online reputation.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHFymeR2tK9ZA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655528485759?e=2147483647&v=beta&t=l2NVlgOYYlDHCrqF8JZlHuXTbpQkLHqTdiAoixk5NA0'
  },
  {
    id: '5',
    title: 'Facebook Ads Management',
    slug: 'facebook-ads-management',
    description: 'Our Facebook ads management service helps you run, monitor, and optimize campaigns effectively. We handle audience targeting, creative design, budget allocation, and analytics tracking to maximize leads and sales. Perfect for businesses that want a hands-free approach to advertising while achieving measurable results.',
    image: 'https://i.ytimg.com/vi/iCs4XSHAuPM/maxresdefault.jpg'
  },
  {
    id: '6',
    title: 'AI Video Make',
    slug: 'ai-logo-design',
    description: 'We design unique, professional, and memorable logos using AI-powered tools combined with expert design principles. Each logo reflects your brand values, communicates your identity clearly, and ensures you stand out in your industry. Our service also includes color schemes, branding guidance, and formats ready for print or digital use.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28Y8haU2qBHx6mAFwqnQC5RWcQ4Tm-J419Q&s'
  },
  {
    id: '7',
    title: 'Video Content make with Model',
    slug: 'content-creation-post-boost',
    description: 'Engage your audience with high-quality content tailored for your brand. We create compelling Facebook posts, visuals, and copywriting, then boost them strategically to reach the right audience. Our service improves brand awareness, increases engagement, and helps your posts perform better in the Facebook algorithm.',
    image: 'https://img.freepik.com/free-photo/blonde-influencer-recording-make-up-video_23-2148135468.jpg?semt=ais_user_personalization&w=740&q=80'
  },
  {
    id: '8',
    title: 'Graphics Design ',
    slug: 'graphics-design',
    description: 'Our graphics design service delivers visually stunning creatives for social media, ads, banners, and posts. Each design is crafted to grab attention, communicate your message effectively, and maintain brand consistency. Perfect for businesses seeking professional visual content that drives engagement and sales.',
    image: 'https://img.freepik.com/premium-vector/modern-web-graphics-pack-vector-eps_1348508-29.jpg?semt=ais_hybrid&w=740&q=80'
  },
  ];
};

// ---------------- CASE STUDIES ----------------
export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  await delay(500);
  return [
    {
      id: '1',
      title: 'Social Media Dynasty',
      description: 'Boosted engagement and lead generation by 70% using data-driven social media strategies across Instagram and LinkedIn.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
      category: 'Digital Strategy'
    },
    {
      id: '2',
      title: 'Organic Traffic Growth',
      description: 'Increased website visits by 200% in 6 months through advanced SEO optimization and content marketing.',
      image: 'https://virtuonai.com/assets/images/seo.webp',
      category: 'SEO & Analytics'
    },
    {
      id: '3',
      title: 'E-commerce Growth Engine',
      description: 'Developed a high-converting e-commerce platform with custom integrations, resulting in a 150% increase in online revenue.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
      category: 'Web Development'
    },
    {
      id: '4',
      title: 'Lead Conversion Funnel',
      description: 'Implemented automated email campaigns and content funnels, increasing lead conversions by 45% within 3 months.',
      image: 'https://timesinternet.in/blog/wp-content/uploads/2023/12/Shutterstock_1814591309.jpg',
      category: 'Email Marketing'
    },
    {
      id: '5',
      title: 'Real Estate Lead Gen',
      description: 'Generated over 500+ high-quality leads for a luxury real estate firm using targeted Meta and Google ad campaigns.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
      category: 'Digital Marketing'
    },
    {
      id: '6',
      title: 'AI Customer Assistant',
      description: 'Implemented an AI-powered chatbot that handles 90% of customer inquiries instantly, reducing support costs by 40%.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      category: 'AI Solutions'
    },
    {
      id: '7',
      title: 'FinTech Brand Identity',
      description: 'Created a modern, trustworthy brand identity for a new FinTech startup, including logo, UI/UX, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
      category: 'Branding & UI/UX'
    },
    {
      id: '8',
      title: 'Hospitality Booking App',
      description: 'Built a custom mobile app for a resort chain that streamlined bookings and improved guest experience by 60%.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
      category: 'App Development'
    },
    {
      id: '9',
      title: 'B2B Growth Strategy',
      description: 'Scaled a B2B SaaS company from $0 to $1M ARR in 12 months through LinkedIn marketing and cold outreach automation.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
      category: 'B2B Marketing'
    },
    {
      id: '10',
      title: 'Medical Clinic SEO',
      description: 'Helped a local healthcare provider rank #1 for critical medical keywords, leading to a 400% increase in patient bookings.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
      category: 'Healthcare SEO'
    },
    {
      id: '11',
      title: 'SaaS Platform UI/UX',
      description: 'Re-designed a complex project management tool, improving user retention by 55% through an intuitive and modern interface.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop',
      category: 'Product Design'
    },
    {
      id: '12',
      title: 'E-learning Portal',
      description: 'Developed a comprehensive online learning platform supporting 50,000+ students with live classes and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
      category: 'Education Tech'
    },
    {
      id: '13',
      title: 'Automotive Sales Funnel',
      description: 'Created a high-converting sales funnel for a car dealership, resulting in a record-breaking 200+ car sales in one month.',
      image: 'https://images.unsplash.com/photo-1562141961-b5d1442a037b?q=80&w=1000&auto=format&fit=crop',
      category: 'Lead Generation'
    },
    {
      id: '14',
      title: 'Fashion Influencer Growth',
      description: 'Managed a cross-platform influencer campaign for a fashion brand, reaching 5M+ people and increasing brand awareness by 300%.',
      image: 'https://images.unsplash.com/photo-1539109132381-3151b8a7fa8a?q=80&w=1000&auto=format&fit=crop',
      category: 'Influencer Marketing'
    },
    {
      id: '15',
      title: 'Legal Firm Authority',
      description: 'Established a law firm as a thought leader in their region through content marketing and local SEO, doubling their client base.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
      category: 'Local SEO'
    },
  ];
};

// ---------------- BLOGS ----------------
export const fetchBlogs = async (): Promise<Blog[]> => {
  await delay(500);
  return [
    { id: '1', title: '5 Tips for Digital Marketing', date: '2026-01-20', summary: 'Boost your marketing ROI with these five simple yet effective strategies for 2026.', image: 'https://picsum.photos/seed/blog1/800/500' },
    { id: '2', title: 'The Future of SEO', date: '2026-01-15', summary: 'How AI and machine learning are changing the search engine landscape.', image: 'https://picsum.photos/seed/blog2/800/500' },
    { id: '3', title: 'Social Media Trends', date: '2026-01-10', summary: 'Short-form video is king. Discover how to leverage it for your brand.', image: 'https://picsum.photos/seed/blog3/800/500' },
  ];
};

// ---------------- TESTIMONIALS ----------------
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  await delay(500);
  return [
    { 
      id: '1', 
      name: 'Emon Ahmed', 
      company: 'FashionHub', 
      feedback: 'Their Facebook Ads campaign and digital marketing strategy boosted our sales by 200%. The ROI we achieved was beyond our expectations.', 
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      metric: '200% Revenue Boost',
      rating: 5
    },
    { 
      id: '2', 
      name: 'Sumaiya Khan', 
      company: 'Tech Solutions', 
      feedback: 'The web development and design team created a stunning site for us. Our user engagement tripled within weeks of the new launch.', 
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      metric: '3x User Engagement',
      rating: 5
    },
    { 
      id: '3', 
      name: 'Tanvir Hossain', 
      company: 'Creative Studio', 
      feedback: 'Their AI video production and graphics design services gave our brand a modern look. Social media reach increased by 400%!', 
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      metric: '400% Social Reach',
      rating: 5
    },
  ];
};

// ---------------- TEAM MEMBERS ----------------
export const fetchTeam = async (): Promise<TeamMember[]> => {
  await delay(500);
  return [
    {
      id: '1',
      name: 'Tareque Mahmud',
      role: 'CEO & Founder',
      company: 'Green Soul IT',
      photo: '/tareque.jpg',
      details: 'MBA in Business Administration from Dhaka University. 10+ years experience leading tech startups and digital ventures.',
      facebook: 'https://www.facebook.com/greensoulmarketin',
      linkedin: 'https://linkedin.com/in/tarequemahmud',
    },
    {
      id: '2',
      name: 'Aminul Islam Shuvo',
      role: 'Marketing Head',
      company: 'Green Soul IT',
      photo: '/shuvo.png',
      facebook: 'https://www.facebook.com/greensoulmarketin',
      linkedin: 'https://linkedin.com/in/tarequemahmud',
      details: 'Expert in digital marketing strategies and brand scaling with a focus on ROI-driven campaigns.',
    },
    {
      id: '3',
      name: 'Kaniz Fatema',
      role: 'Fromt-end Developer',
      company: 'Green Soul IT',
      photo: '/kaniz.png',
      details: 'I specialize in crafting seamless user experiences using modern frontend technologies. Passionate about building responsive, scalable interfaces that bring designs to life.',
      facebook: 'https://www.facebook.com/greensoulmarketin',
      linkedin: 'https://linkedin.com/in/tarequemahmud',
    },
    {
      id: '4',
      name: 'Aminur Rahman Suhan',
      role: 'Full-Stack Developer',
      company: 'Green Soul IT',
      photo: '/suhan.png',
      details: 'I specialize in building full-stack web applications with modern technologies. Passionate about creating elegant solutions that combine beautiful design with powerful functionality.',
      facebook: 'https://www.facebook.com/profile.php?id=100082093456990',
      linkedin: 'https://www.linkedin.com/in/aminur-rahman-200366328/',
    },
    {
      id: '5',
      name: 'Mushfiqa Akter',
      role: 'Senior Marketing Operator',
      company: 'Green Soul IT',
      photo: '/image.png',
      details: 'Expert in digital marketing strategies and brand scaling with a focus on ROI-driven campaigns.'
    },
    {
      id: '6',
      name: 'Abida Rahman',
      role: 'Digital Marketer',
      company: 'Green Soul IT',
      photo: 'https://picsum.photos/seed/cd/400/400',
      details: 'Southeast University. 1+ years experience in creative direction marketing.'
    }
  ];
};

// ---------------- AUTH ----------------
export const loginUser = async (email: string, password: string): Promise<User> => {
  await delay(800);
  if (email && password) {
    return { email, name: 'User', token: 'mock-jwt-token-123' };
  }
  throw new Error('Invalid credentials');
};

export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
  await delay(1000);
  return { email, name, token: 'mock-jwt-token-456' };
};

// ---------------- CONTACT ----------------
export const contactSubmit = async (data: any) => {
  await delay(500);
  return { status: 'success' };
};
