export const PHONE = '8271338020';
export const PHONE_DISPLAY = '+91 82713 38020';
export const EMAIL = 'info@tecsonet.com';
export const ADDRESS = 'Samastipur, Bihar — 848101';
export const WA_URL = 'https://wa.me/918271338020';

export const services = [
  {
    id: 'web',
    icon: '⬡',
    color: '#00e5a0',
    title: 'Website Development',
    tagline: 'Your business deserves a home online',
    short: 'Professional websites that convert visitors into customers.',
    full: `In today's digital world, your website is your most powerful salesman — working 24/7, 365 days a year. We build websites that don't just look good, they drive real business results. From a simple 5-page business website to a fully featured e-commerce store with payment integration, we deliver every project with clean code, blazing speed and mobile-first design.

Every website we build is optimized for Google search, loads in under 2 seconds, and works perfectly on all devices — phones, tablets and laptops. We have built websites for kirana stores, clothing showrooms, pharmacies, coaching institutes, clinics and many more businesses across Bihar.`,
    features: ['Mobile-First Responsive Design','Google SEO Optimized','Fast Loading — Under 2 Seconds','WhatsApp & Call Integration','Google Maps Embed','Inquiry / Contact Forms','Social Media Links','SSL Security Certificate','1 Year Free Support'],
    packages: [
      { name: 'Starter', price: '₹3,000', desc: '3–5 pages, basic business website', includes: ['Home, About, Services, Contact', 'Mobile responsive', 'WhatsApp button', 'Google Maps', '3 revisions'] },
      { name: 'Business', price: '₹8,000', desc: '8–12 pages, full business website', includes: ['All Starter features', 'Blog / News section', 'Gallery page', 'Inquiry form with email', 'Basic SEO setup', '5 revisions', '6 months support'] },
      { name: 'Premium', price: '₹20,000', desc: 'E-commerce + custom features', includes: ['All Business features', 'Online store / catalogue', 'Payment gateway (Razorpay)', 'Admin dashboard', 'Order management', 'Customer login', 'Unlimited revisions', '1 year support'] },
    ],
    tags: ['React', 'WordPress', 'Next.js', 'E-Commerce'],
    deliveryDays: '3–7 days',
  },
  {
    id: 'app',
    icon: '◈',
    color: '#4f8ef7',
    title: 'Mobile App Development',
    tagline: 'Your business in every pocket',
    short: 'Android & iOS apps that solve real problems for Bihar businesses.',
    full: `Smartphones have changed everything. Your customers are on their phones 6+ hours a day — your business should be there too. We build mobile apps that are fast, intuitive and designed specifically for your business needs.

We have built student apps for coaching institutes in Darbhanga, appointment booking apps for clinics in Muzaffarpur, and delivery tracking apps for businesses in Samastipur. Our apps are built with React Native — meaning one codebase works on both Android and iOS, saving you time and money.`,
    features: ['Android & iOS Both', 'React Native Technology', 'Offline Mode Support', 'Push Notifications', 'Payment Gateway Integration', 'Google Maps & Location', 'Admin Dashboard', 'Analytics & Reports', 'Play Store / App Store Upload'],
    packages: [
      { name: 'Basic App', price: '₹15,000', desc: 'Simple utility app', includes: ['Up to 8 screens', 'User login / signup', 'Basic features', 'Android only', '1 revision round'] },
      { name: 'Business App', price: '₹35,000', desc: 'Full-featured business app', includes: ['Up to 20 screens', 'Android + iOS', 'Push notifications', 'Payment gateway', 'Admin panel', 'Analytics'] },
      { name: 'Enterprise', price: '₹80,000+', desc: 'Complex custom app', includes: ['Unlimited screens', 'Custom backend', 'Real-time features', 'Multi-role access', 'Full maintenance', 'Priority support'] },
    ],
    tags: ['React Native', 'Android', 'iOS', 'Firebase'],
    deliveryDays: '30–60 days',
  },
  {
    id: 'marketing',
    icon: '◎',
    color: '#a78bfa',
    title: 'Digital Marketing',
    tagline: 'Get real customers, not just likes',
    short: 'Facebook, Instagram & Google ads targeted to your exact local audience.',
    full: `Running Facebook and Instagram ads without strategy is like throwing money into a bonfire. We run data-driven digital marketing campaigns that target the exact right people — by location, age, interest and behavior — making every rupee count.

We specialize in hyperlocal marketing for Bihar businesses. Want to target people within 5km of your shop in Samastipur? Done. Want to reach parents of Class 10 students in Darbhanga for your coaching institute? Done. Our campaigns bring real footfall, real enquiries and real sales — not vanity metrics.`,
    features: ['Facebook & Instagram Ads', 'Google Ads Management', 'Local SEO (Google Maps)', 'WhatsApp Marketing', 'Content Creation', 'Graphic Design for Posts', 'Monthly Performance Reports', 'Competitor Analysis', 'Lead Generation Campaigns'],
    packages: [
      { name: 'Starter', price: '₹2,000/mo', desc: 'Social media management', includes: ['15 posts per month', 'Facebook + Instagram', 'Basic graphics', 'Monthly report'] },
      { name: 'Growth', price: '₹5,000/mo', desc: 'Ads + social media', includes: ['20 posts per month', 'Facebook Ads (₹3,000 budget)', 'Lead generation', 'WhatsApp campaigns', 'Weekly reports'] },
      { name: 'Dominate', price: '₹12,000/mo', desc: 'Full digital presence', includes: ['Daily content', 'Google + Facebook Ads', 'SEO optimization', 'Video reels', 'Competitor tracking', 'Dedicated manager'] },
    ],
    tags: ['Facebook Ads', 'Google Ads', 'SEO', 'WhatsApp'],
    deliveryDays: 'Ongoing monthly',
  },
  {
    id: 'training',
    icon: '◐',
    color: '#f59e0b',
    title: 'IT Training Institute',
    tagline: 'Skills that pay for life',
    short: 'Practical computer courses that get students real jobs in Bihar and beyond.',
    full: `Bihar has millions of young people looking for opportunities. The gap? Digital skills. We bridge that gap with practical, job-oriented IT training that teaches you what employers actually want — not outdated theory.

Our courses are taught by working professionals, not textbook teachers. Every course ends with a real project, an industry-recognized certificate and placement assistance. We have helped 200+ students from Samastipur, Darbhanga and Muzaffarpur get their first IT jobs.`,
    features: ['Job-Oriented Curriculum', 'Practical Project Work', 'Industry Certificate', 'Placement Assistance', 'Hindi + English Medium', 'Weekend Batches Available', 'Online + Offline Options', 'Lifetime Access to Notes', 'Internship Opportunity'],
    packages: [
      { name: 'Basic Computer', price: '₹1,500/mo', desc: '3 month course', includes: ['MS Office complete', 'Internet basics', 'Email & communication', 'Typing skills', 'Certificate'] },
      { name: 'Web Development', price: '₹3,000/mo', desc: '6 month course', includes: ['HTML, CSS, JavaScript', 'React basics', 'WordPress', 'Real project', 'Portfolio', 'Placement help'] },
      { name: 'Full Stack Pro', price: '₹5,000/mo', desc: '12 month program', includes: ['Complete web dev', 'Node.js & databases', 'React Native basics', 'Freelancing guide', 'Interview prep', 'Job guarantee*'] },
    ],
    tags: ['Web Dev', 'MS Office', 'Tally', 'Graphic Design'],
    deliveryDays: '3–12 months',
  },
  {
    id: 'google',
    icon: '⬟',
    color: '#ec4899',
    title: 'Google Business & Local SEO',
    tagline: 'Be found when people search',
    short: 'When someone searches for your service in Samastipur — you should appear first.',
    full: `Right now, hundreds of people in Samastipur are searching Google for doctors, shops, coaching institutes, and services just like yours. If your business doesn't appear in those results — those customers go to your competitor.

Google Business Profile is the single most powerful free tool for any local business. A properly optimized profile puts you on Google Maps, shows your photos and reviews, and lets customers call you or get directions with one tap. We set it up correctly, add all your details, optimize for local search, and help you get genuine reviews from happy customers.`,
    features: ['Google Business Profile Setup', 'Google Maps Optimization', 'Local SEO Keywords', 'Photo & Video Upload', 'Review Management Strategy', 'Competitor Analysis', 'Monthly Ranking Reports', 'Q&A Management', 'Google Posts (Weekly Updates)'],
    packages: [
      { name: 'Setup Only', price: '₹999', desc: 'One-time setup', includes: ['Profile creation', 'All details filled', 'Photos uploaded', 'Category optimization', '30 days support'] },
      { name: 'Optimize', price: '₹2,500', desc: 'Setup + 3 month management', includes: ['Everything in Setup', '3 months management', 'Weekly Google posts', 'Review request strategy', 'Ranking reports'] },
      { name: 'Dominate Local', price: '₹1,500/mo', desc: 'Ongoing local SEO', includes: ['Full profile management', 'Local SEO backlinks', 'Competitor monitoring', 'Google Ads integration', 'Leads dashboard'] },
    ],
    tags: ['Google Maps', 'Local SEO', 'Reviews', 'Google Ads'],
    deliveryDays: '2–3 days setup',
  },
  {
    id: 'bpo',
    icon: '◩',
    color: '#06b6d4',
    title: 'Data Entry & BPO Services',
    tagline: 'Accurate, fast, confidential',
    short: 'Reliable back-office processing for businesses that need to focus on growth.',
    full: `Behind every growing business is a mountain of data that needs to be processed — product catalogues, customer records, forms, invoices, inventory lists. Our trained team handles all of it accurately, quickly and confidentially.

We work with businesses across India and provide bulk data entry, e-commerce catalog management, form processing, PDF to Excel conversion, and back-office support. All work is done under NDA with 99.9% accuracy guarantee and on-time delivery.`,
    features: ['Bulk Data Entry', 'PDF to Excel / Word', 'E-Commerce Catalog Entry', 'Form Processing', 'Invoice Data Entry', 'Database Management', 'Image to Text Conversion', '99.9% Accuracy Guarantee', 'NDA & Data Security'],
    packages: [
      { name: 'Small Project', price: '₹500+', desc: 'Up to 500 entries', includes: ['Basic data entry', '99% accuracy', '48 hour delivery', 'Excel/CSV format'] },
      { name: 'Medium', price: '₹2,000+', desc: '500–5,000 entries', includes: ['All formats', '99.5% accuracy', 'Quality check', '24 hour support'] },
      { name: 'Bulk / Monthly', price: 'Custom', desc: '5,000+ entries', includes: ['Dedicated team', '99.9% accuracy', 'Daily delivery', 'Real-time updates', 'NDA included'] },
    ],
    tags: ['Data Entry', 'BPO', 'Excel', 'Catalog'],
    deliveryDays: '24–72 hours',
  },
];

export const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full Time',
    location: 'Samastipur (On-site)',
    experience: '1–3 Years',
    color: '#00e5a0',
    desc: 'We are looking for a passionate frontend developer who loves building beautiful, fast web experiences. You will work directly with our founder on client projects ranging from local business websites to complex web applications.',
    responsibilities: [
      'Build responsive websites using React, HTML, CSS and Tailwind',
      'Convert Figma/design mockups into pixel-perfect code',
      'Optimize websites for speed, SEO and mobile performance',
      'Collaborate with the team on client projects',
      'Maintain and update existing client websites',
    ],
    requirements: [
      'Strong knowledge of HTML5, CSS3, JavaScript',
      'Experience with React.js',
      'Understanding of responsive design',
      'Basic knowledge of Git',
      'Good communication skills in Hindi/English',
    ],
    niceToHave: ['Next.js experience', 'Tailwind CSS', 'WordPress', 'Figma basics'],
    salary: '₹8,000 – ₹15,000/month',
  },
  {
    id: 2,
    title: 'Digital Marketing Executive',
    type: 'Full Time',
    location: 'Samastipur (On-site)',
    experience: '0–2 Years',
    color: '#a78bfa',
    desc: 'Drive growth for our clients through strategic social media, Google Ads and content marketing. You will manage multiple client accounts, create compelling content and run ad campaigns that deliver real results for local Bihar businesses.',
    responsibilities: [
      'Manage Facebook, Instagram and Google ad campaigns',
      'Create and schedule daily social media content',
      'Design basic graphics using Canva',
      'Write engaging captions and ad copy in Hindi and English',
      'Track and report campaign performance monthly',
      'Identify new marketing opportunities for clients',
    ],
    requirements: [
      'Knowledge of Facebook Ads Manager',
      'Understanding of social media algorithms',
      'Basic graphic design skills (Canva)',
      'Good writing skills in Hindi and English',
      'Analytical mindset — comfortable with data',
    ],
    niceToHave: ['Google Ads certification', 'Video editing basics', 'SEO knowledge'],
    salary: '₹6,000 – ₹12,000/month',
  },
  {
    id: 3,
    title: 'Business Development Executive',
    type: 'Full Time / Part Time',
    location: 'Samastipur & Surrounding Districts',
    experience: 'Fresher Welcome',
    color: '#f59e0b',
    desc: 'Be the face of Tecsonet Solutions in Samastipur and nearby districts. Your job is to meet local business owners, explain our services, and help them understand how going digital can transform their business. No cold calling — you will meet real people and solve real problems.',
    responsibilities: [
      'Visit local businesses, schools, hospitals and coaching institutes',
      'Present our services with demos on your phone/laptop',
      'Follow up on leads and close deals',
      'Build long-term relationships with clients',
      'Collect client requirements and pass to tech team',
      'Represent Tecsonet at local business events',
    ],
    requirements: [
      'Confident communication skills in Hindi',
      'Two-wheeler (bike/scooty) for local visits',
      'Smartphone with internet',
      'Honest and self-motivated attitude',
      'Willingness to learn about technology',
    ],
    niceToHave: ['Previous sales experience', 'Local network in Samastipur/Darbhanga', 'Knowledge of IT services'],
    salary: '₹5,000 base + Commission (up to ₹20,000+/month)',
  },
  {
    id: 4,
    title: 'IT Trainer',
    type: 'Part Time / Contract',
    location: 'Samastipur (On-site)',
    experience: '1+ Year Teaching or Industry',
    color: '#06b6d4',
    desc: 'Teach the next generation of Bihar\'s IT professionals. We need passionate trainers who can make complex technology simple and help students build real, job-ready skills. If you love teaching and technology — this is for you.',
    responsibilities: [
      'Teach web development, MS Office, or digital marketing courses',
      'Create practical assignments and real projects for students',
      'Track student progress and provide feedback',
      'Help students build their portfolio and prepare for jobs',
      'Develop and update course curriculum',
    ],
    requirements: [
      'Strong knowledge in at least one of: Web Dev, MS Office, Digital Marketing, Tally, Graphic Design',
      'Ability to explain concepts clearly in Hindi',
      'Patient and supportive teaching style',
      'Minimum 1 year of relevant work or teaching experience',
    ],
    niceToHave: ['Industry certifications', 'YouTube or content creation experience'],
    salary: '₹500 – ₹800 per hour / ₹8,000 – ₹15,000/month',
  },
  {
    id: 5,
    title: 'Sales & Marketing Intern',
    type: 'Internship (3–6 months)',
    location: 'Samastipur + Remote',
    experience: 'No Experience Required',
    color: '#ec4899',
    desc: 'Start your career at a real tech company. As a sales & marketing intern, you will learn how to acquire customers, manage social media and understand how an IT business operates from the inside. Perfect for BBA, MBA or any graduate looking for real-world experience.',
    responsibilities: [
      'Assist in client outreach and lead generation',
      'Manage social media posts for Tecsonet',
      'Create WhatsApp broadcast content',
      'Research potential clients in Bihar',
      'Support the senior team in client presentations',
    ],
    requirements: [
      'Currently enrolled in or recently graduated from any degree',
      'Basic smartphone and internet access',
      'Eagerness to learn and contribute',
      'Good communication in Hindi',
    ],
    niceToHave: [],
    salary: 'Stipend + Performance Commission + Certificate + Letter of Recommendation',
  },
];

export const team = [
  {
    name: 'Founder & CEO',
    role: 'Tech Lead & Visionary',
    bio: 'A self-taught developer from Samastipur with a mission to bring world-class IT services to every business in Bihar. 3+ years of software development experience.',
    skills: ['React', 'Node.js', 'App Dev', 'Strategy'],
    color: '#00e5a0',
    initials: 'TS',
  },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Owner, Sharma Cloth Store, Samastipur',
    text: 'Tecsonet ne hamari dukaan ki website banayi — ab Google pe hamare naam pe click karte hain log. Business 30% badh gaya pehle 3 mahine mein.',
    color: '#00e5a0',
  },
  {
    name: 'Dr. Priya Singh',
    role: 'Clinic Owner, Darbhanga',
    text: 'Online appointment system bahut kaam aaya. Ab patients phone karne ki bajaye online book karte hain. Bahut professional kaam kiya Tecsonet ne.',
    color: '#4f8ef7',
  },
  {
    name: 'Amit Jha',
    role: 'Director, Jha Coaching Classes, Samastipur',
    text: 'Admission season mein hamare website se 150+ enquiries aayi. Pehle koi nahi jaanta tha hume online. Ab Google pe first page pe hain.',
    color: '#a78bfa',
  },
];

export const stats = [
  { num: '50K+', label: 'Businesses in Bihar without website' },
  { num: '₹3K', label: 'Starting price for a website' },
  { num: '7', label: 'Days average delivery' },
  { num: '24/7', label: 'Support availability' },
];
