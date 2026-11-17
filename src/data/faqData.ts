export interface FAQItem {
  id: number;
  question: string;
  paragraphsBefore?: string[];
  bulletPoints?: string[];
  numberedPoints?: string[];
  paragraphsAfter?: string[];
}

export interface FAQSectionGroup {
  id: string;
  badge: string;
  title: string;
  faqs: FAQItem[];
}

export const faqSections: FAQSectionGroup[] = [
  {
    id: "about-swastixa",
    badge: "Section 1",
    title: "About Swastixa – Company, Vision & Expertise",
    faqs: [
      {
        id: 1,
        question: "What is Swastixa Digital?",
        paragraphsBefore: [
          "Swastixa Digital is a digital advertising agency that helps businesses build, strengthen and grow their brands through strategic creativity, technology and digital marketing. Bringing together services such as social media marketing, website development, performance marketing, content marketing, influencer marketing, SEO, video production, and packaging and design.",
          "By combining creative thinking with structured execution, Swastixa aims to create meaningful digital experiences that help brands connect with their audiences, strengthen their online presence and work towards their business objectives."
        ]
      },
      {
        id: 2,
        question: "What does the name Swastixa represent?",
        paragraphsBefore: [
          "The name Swastixa draws inspiration from the Sanskrit concept of eternal flow. It reflects the company's philosophy of continuous movement, positivity, balance and progress.",
          "This philosophy influences how Swastixa approaches brand building, creative strategy and client relationships. The company believes in adapting to changing business needs while remaining rooted in strong values and purposeful thinking."
        ]
      },
      {
        id: 3,
        question: "What is the vision and mission of Swastixa Digital?",
        paragraphsBefore: [
          "Swastixa's vision is to build meaningful brands through a combination of cultural understanding, modern thinking, strategic creativity and digital innovation.",
          "Its mission is to help businesses establish a stronger brand presence by connecting strategy, content, design, technology and marketing. Rather than treating these elements as isolated activities, Swastixa aims to bring them together into a cohesive brand-building approach."
        ]
      },
      {
        id: 4,
        question: "What makes Swastixa different from other digital marketing agencies?",
        paragraphsBefore: [
          "Swastixa follows an integrated approach to digital brand building. It brings together creative strategy, content, design, digital marketing, website development and production capabilities under one umbrella.",
          "This approach helps maintain consistency across different brand touchpoints. For example, the messaging used in a social media campaign can align with the website experience, advertising creatives and video content.",
          "The emphasis is on understanding the brand before executing a strategy, maintaining clear communication and ensuring that every creative and digital activity serves a defined purpose."
        ]
      },
      {
        id: 5,
        question: "What types of businesses does Swastixa work with?",
        paragraphsBefore: [
          "Swastixa's digital marketing and creative solutions can support businesses across different sectors, including:"
        ],
        bulletPoints: [
          "Real Estate and Infrastructure",
          "Retail and E-commerce",
          "Fashion and Lifestyle",
          "Food and Beverage",
          "Healthcare and Wellness",
          "Education and Professional Services",
          "Hospitality and Tourism",
          "Consumer Goods and D2C Brands",
          "Corporate and B2B Businesses",
          "Start-ups and Emerging Businesses"
        ],
        paragraphsAfter: [
          "The suitability of a particular service depends on the business model, target audience, marketing objectives and project requirements."
        ]
      },
      {
        id: 6,
        question: "Does Swastixa work with start-ups as well as established businesses?",
        paragraphsBefore: [
          "Yes. Swastixa's service portfolio is relevant to both emerging and established businesses.",
          "Start-ups may require brand positioning, website development, social media management and initial digital visibility. Established businesses may need integrated marketing campaigns, performance advertising, SEO, content production or a stronger digital brand presence.",
          "The proposed strategy and scope of work are determined by the client's current requirements and business objectives."
        ]
      },
      {
        id: 7,
        question: "What is Swastixa's core expertise?",
        paragraphsBefore: [
          "Swastixa's core expertise lies in connecting creative communication with digital execution. Its service portfolio covers eight key areas:"
        ],
        bulletPoints: [
          "Social Media Marketing",
          "Website Development",
          "Performance Marketing",
          "Influencer Marketing",
          "Content Marketing",
          "Search Engine Optimisation (SEO)",
          "Video Production",
          "Packaging and Design"
        ],
        paragraphsAfter: [
          "These services allow the company to address different stages of a brand's digital journey, from establishing its identity and online presence to building visibility and engaging potential customers."
        ]
      },
      {
        id: 8,
        question: "Does Swastixa offer individual services or complete digital marketing solutions?",
        paragraphsBefore: [
          "Swastixa's services can be considered individually or as part of a broader integrated strategy, depending on the client's requirements.",
          "A business may engage Swastixa specifically for website development, SEO or video production. Alternatively, it can explore a combination of social media marketing, content creation, paid advertising and website solutions.",
          "The scope is discussed and defined before project execution so that the deliverables align with the client's objectives."
        ]
      }
    ]
  },
  {
    id: "swastixa-services",
    badge: "Section 2",
    title: "Swastixa's Services – What Each Service Includes",
    faqs: [
      {
        id: 9,
        question: "What does Swastixa offer under Social Media Marketing?",
        paragraphsBefore: [
          "Swastixa's social media marketing services focus on helping brands establish a consistent, engaging and recognisable presence across relevant social media platforms.",
          "Depending on the agreed scope, the service can include:"
        ],
        bulletPoints: [
          "Social media strategy and planning",
          "Content calendar development",
          "Creative graphic design and copywriting",
          "Instagram Reels and other short-form content",
          "Carousel posts and static creatives",
          "Brand communication and storytelling",
          "Social media page management",
          "Content scheduling and publishing",
          "Performance monitoring and reporting"
        ],
        paragraphsAfter: [
          "The objective is to create meaningful communication that builds brand awareness, encourages audience engagement and supports business goals."
        ]
      },
      {
        id: 10,
        question: "What is included in Swastixa's Website Development service?",
        paragraphsBefore: [
          "Swastixa provides website development solutions focused on creating professional, user-friendly and responsive digital experiences.",
          "Depending on project requirements, website development may include:"
        ],
        bulletPoints: [
          "Business and corporate websites",
          "Responsive website design",
          "UI/UX planning and development",
          "Landing page development",
          "Service and product page creation",
          "Website content integration",
          "Contact forms and enquiry functionality",
          "Website speed and performance considerations",
          "Basic on-page SEO implementation",
          "Website testing and launch support"
        ],
        paragraphsAfter: [
          "The objective is to develop a website that communicates the brand effectively, offers a smooth browsing experience and provides visitors with clear pathways to take action."
        ]
      },
      {
        id: 11,
        question: "What is Performance Marketing, and how does Swastixa help businesses with it?",
        paragraphsBefore: [
          "Performance marketing is a data-driven digital advertising approach in which campaigns are planned and optimised around measurable objectives such as website traffic, enquiries, leads, conversions or sales.",
          "Swastixa's performance marketing solutions can include:"
        ],
        bulletPoints: [
          "Google Ads campaign management",
          "Meta Ads for Facebook and Instagram",
          "Audience research and targeting",
          "Campaign strategy and planning",
          "Ad creative and copy development",
          "Landing page recommendations",
          "Conversion tracking coordination",
          "Campaign monitoring and optimisation",
          "Performance analysis and reporting"
        ],
        paragraphsAfter: [
          "The objective is to use advertising budgets strategically, understand campaign performance and continuously improve results based on available data."
        ]
      },
      {
        id: 12,
        question: "Does Swastixa provide Influencer Marketing services?",
        paragraphsBefore: [
          "Yes. Swastixa offers influencer marketing as part of its digital marketing service portfolio.",
          "Influencer marketing helps brands connect with relevant audiences through content creators who have an established presence and audience in a particular niche.",
          "Depending on campaign requirements, the service may include:"
        ],
        bulletPoints: [
          "Influencer campaign strategy",
          "Identification of relevant creators",
          "Influencer research and shortlisting",
          "Audience and content suitability assessment",
          "Campaign concept development",
          "Collaboration and deliverable coordination",
          "Content approval coordination",
          "Campaign performance evaluation"
        ],
        paragraphsAfter: [
          "Influencer selection depends on the brand's target audience, campaign objectives, budget and creator availability."
        ]
      },
      {
        id: 13,
        question: "What does Swastixa's Content Marketing service include?",
        paragraphsBefore: [
          "Content marketing involves creating and distributing valuable, relevant and consistent content to attract, inform and engage a target audience.",
          "Swastixa's content marketing solutions can include:"
        ],
        bulletPoints: [
          "Content strategy and planning",
          "Brand storytelling",
          "Website and service page content",
          "SEO-focused blog writing",
          "Social media content",
          "Educational and informational content",
          "Marketing campaign copy",
          "Video scripts and creative concepts",
          "Content calendars",
          "Content optimisation"
        ],
        paragraphsAfter: [
          "The aim is to communicate a brand's value clearly, build audience understanding and support long-term digital visibility."
        ]
      },
      {
        id: 14,
        question: "How does Swastixa's SEO Agency service help businesses improve their online visibility?",
        paragraphsBefore: [
          "Swastixa provides Search Engine Optimisation (SEO) solutions designed to improve a website's visibility in relevant organic search results.",
          "SEO involves optimising a website's content, structure and technical elements to help search engines understand its relevance to users' search queries.",
          "Depending on the project scope, SEO services may include:"
        ],
        bulletPoints: [
          "SEO audits and website analysis",
          "Keyword research",
          "On-page SEO optimisation",
          "Technical SEO recommendations",
          "Website content optimisation",
          "Meta titles and descriptions",
          "Heading and URL structure optimisation",
          "Internal linking",
          "Blog and SEO content development",
          "Local SEO recommendations",
          "Performance monitoring"
        ],
        paragraphsAfter: [
          "SEO is a long-term process. Rankings and organic traffic depend on competition, website health, content quality, search engine updates and several other factors. Therefore, specific ranking positions or timelines cannot be guaranteed."
        ]
      },
      {
        id: 15,
        question: "What services are included in Swastixa's Video Production House?",
        paragraphsBefore: [
          "Swastixa's video production capabilities focus on creating visual content that communicates brand stories, products, services and campaign messages.",
          "Depending on the production brief, services may include:"
        ],
        bulletPoints: [
          "Concept development and creative planning",
          "Video scripting",
          "Brand and corporate videos",
          "Promotional and advertising films",
          "Product videos",
          "Social media Reels and short-form videos",
          "Commercial photography and video shoots",
          "Podcast and studio-based content production",
          "Video editing and post-production",
          "Motion graphics and animation"
        ],
        paragraphsAfter: [
          "The production approach is planned according to the intended platform, audience, creative direction and campaign requirements."
        ]
      },
      {
        id: 16,
        question: "What does Swastixa offer under Packaging & Design?",
        paragraphsBefore: [
          "Packaging and design services focus on creating visual communication that helps products establish a distinct identity and connect with consumers.",
          "Depending on the project requirements, solutions may include:"
        ],
        bulletPoints: [
          "Product packaging design",
          "Packaging layout and artwork",
          "Label design",
          "Product branding and visual identity",
          "Marketing collateral design",
          "Creative graphic design",
          "Promotional material design",
          "Visual consistency across product ranges"
        ],
        paragraphsAfter: [
          "The objective is to combine functionality, visual appeal and brand communication to create packaging and design solutions that reflect the product's positioning.",
          "Technical packaging specifications, material selection, printing, manufacturing and production can be addressed separately where agreed as part of the project scope."
        ]
      }
    ]
  },
  {
    id: "process-execution",
    badge: "Section 3",
    title: "Working Process, Client Engagement & Project Execution",
    faqs: [
      {
        id: 17,
        question: "How does Swastixa approach a new project?",
        paragraphsBefore: [
          "Swastixa follows a structured approach that begins with understanding the client's business, brand identity and objectives.",
          "The general process involves:"
        ],
        numberedPoints: [
          "Discovery: Understanding the business, its offerings, target audience and current challenges.",
          "Research: Reviewing the existing digital presence, competitors and relevant market opportunities.",
          "Strategy: Developing a suitable creative and digital roadmap based on the identified objectives.",
          "Planning: Defining deliverables, timelines, responsibilities and execution requirements.",
          "Execution: Implementing the agreed strategy through content, design, development, production or marketing activities.",
          "Monitoring: Reviewing progress and evaluating performance against relevant objectives.",
          "Optimisation: Identifying improvements and refining the approach wherever required."
        ],
        paragraphsAfter: [
          "This process helps maintain clarity, coordination and consistency throughout the engagement."
        ]
      },
      {
        id: 18,
        question: "How does Swastixa develop a digital marketing strategy for a business?",
        paragraphsBefore: [
          "Swastixa approaches digital marketing strategy by first understanding what a business wants to achieve and who it wants to reach.",
          "The strategy considers factors such as the brand's positioning, target audience, competitors, existing digital presence, marketing objectives and available resources.",
          "Based on this understanding, Swastixa identifies suitable marketing channels, content formats, creative directions and campaign approaches.",
          "The resulting strategy is designed to connect different digital activities rather than treating social media, advertising, content and SEO as unrelated efforts."
        ]
      },
      {
        id: 19,
        question: "How can a business get started with Swastixa's services?",
        paragraphsBefore: [
          "Businesses interested in working with Swastixa can visit the official website and use the contact form to submit an enquiry.",
          "Potential clients can share their name, email address and mobile number, along with their interest in the company's services.",
          "The initial discussion can then be used to understand the business requirements, identify suitable solutions and discuss the next steps for a potential collaboration."
        ]
      },
      {
        id: 20,
        question: "What information should a client provide before starting a project?",
        paragraphsBefore: [
          "To help Swastixa understand a project accurately, clients should ideally provide:"
        ],
        bulletPoints: [
          "Business and brand information",
          "Details of products or services",
          "Target audience and geographical market",
          "Marketing and business objectives",
          "Existing website and social media links",
          "Brand guidelines and available creative assets",
          "Competitor references, if available",
          "Expected deliverables and timelines",
          "Indicative project budget"
        ],
        paragraphsAfter: [
          "Providing this information helps establish a clear understanding of the project and supports more relevant strategic recommendations."
        ]
      },
      {
        id: 21,
        question: "How does Swastixa maintain communication with clients during a project?",
        paragraphsBefore: [
          "Clear communication and collaboration are important parts of Swastixa's working philosophy.",
          "The project requirements, deliverables and execution expectations are discussed before work begins. During execution, feedback and approvals are coordinated according to the agreed workflow.",
          "The communication frequency, review process and reporting requirements can be established at the beginning of the engagement to ensure that everyone remains aligned."
        ]
      },
      {
        id: 22,
        question: "Does Swastixa provide customised digital marketing solutions?",
        paragraphsBefore: [
          "Yes. Digital marketing requirements vary depending on the business, industry, target audience and stage of growth.",
          "A start-up building its first digital presence may require a different approach from an established company looking to increase website traffic or generate qualified enquiries.",
          "Swastixa's services can be structured around these differing requirements, with the scope and deliverables determined through an initial project discussion."
        ]
      },
      {
        id: 23,
        question: "Can Swastixa manage multiple digital marketing services for the same business?",
        paragraphsBefore: [
          "Yes. Swastixa's integrated service portfolio allows businesses to explore multiple services under one umbrella.",
          "For example, a business may combine social media marketing, content marketing, video production, performance marketing and website development as part of a coordinated digital strategy.",
          "This integrated approach helps maintain consistency in brand messaging, creative direction and campaign execution across different platforms."
        ]
      },
      {
        id: 24,
        question: "How does Swastixa measure the performance of its digital marketing activities?",
        paragraphsBefore: [
          "Performance measurement depends on the service being provided and the objectives established for the project.",
          "Some of the metrics that may be evaluated include:"
        ],
        bulletPoints: [
          "Social media reach and engagement",
          "Audience growth and content interactions",
          "Website traffic and user behaviour",
          "Search engine visibility and keyword performance",
          "Advertising impressions and click-through rates",
          "Cost per click and cost per lead",
          "Enquiries and conversion rates",
          "Video views and audience retention"
        ],
        paragraphsAfter: [
          "These metrics help assess campaign performance, identify areas for improvement and guide future marketing decisions."
        ]
      },
      {
        id: 25,
        question: "Does Swastixa provide regular reports and performance updates?",
        paragraphsBefore: [
          "Performance reporting can be included as part of the agreed service scope.",
          "Depending on the engagement, updates may cover campaign activity, content performance, website metrics, SEO progress and advertising results.",
          "The reporting format and frequency can be established before execution so clients understand what is being measured and how progress will be evaluated."
        ]
      },
      {
        id: 26,
        question: "How long does it take to complete a project with Swastixa?",
        paragraphsBefore: [
          "Project timelines depend on the nature, complexity and scope of the work.",
          "A social media campaign, website development project, video production assignment and long-term SEO engagement each require different planning and execution schedules.",
          "The expected timeline, milestones, client approvals and dependencies are discussed before the project begins. Any changes in scope or requirements may also affect the delivery schedule."
        ]
      },
      {
        id: 27,
        question: "Does Swastixa offer one-time projects as well as ongoing services?",
        paragraphsBefore: [
          "Swastixa's service portfolio includes activities that can be structured around specific projects as well as continuing marketing requirements.",
          "For example, website development, packaging design and individual video production assignments can be discussed as project-based engagements.",
          "Social media management, SEO and performance marketing may require ongoing execution and optimisation.",
          "The commercial arrangement, duration and deliverables are finalised according to the specific requirements of each engagement."
        ]
      },
      {
        id: 28,
        question: "Does Swastixa guarantee leads, sales, viral content or first-page Google rankings?",
        paragraphsBefore: [
          "No digital marketing agency can responsibly guarantee specific outcomes such as a fixed number of leads, guaranteed sales, viral reach or permanent first-page search rankings.",
          "Digital marketing performance depends on several factors, including audience behaviour, competition, market conditions, advertising budgets, website experience, product positioning and sales processes.",
          "Swastixa's approach focuses on strategic planning, creative execution, performance monitoring and continuous optimisation. The objective is to improve marketing effectiveness through informed decisions rather than making unrealistic performance promises."
        ]
      },
      {
        id: 29,
        question: "What services or activities are outside Swastixa's scope?",
        paragraphsBefore: [
          "Swastixa focuses on digital marketing, creative communication, website development, production and design solutions.",
          "Its marketing services should not be confused with the client's internal business operations or commercial responsibilities.",
          "For clarity, the following are not automatically included in a standard digital marketing engagement:"
        ],
        bulletPoints: [
          "Managing a client's complete business operations",
          "Handling product manufacturing or physical inventory",
          "Managing order fulfilment and logistics",
          "Providing guaranteed sales or revenue",
          "Guaranteeing specific search engine rankings",
          "Providing unlimited content or revisions",
          "Paying advertising platform charges on behalf of clients",
          "Printing and manufacturing packaging materials"
        ],
        paragraphsAfter: [
          "Some additional requirements may be discussed separately, subject to feasibility, availability and mutual agreement. The final scope of work determines exactly what is included and excluded."
        ]
      },
      {
        id: 30,
        question: "Why should a business choose Swastixa Digital as its digital marketing partner?",
        paragraphsBefore: [
          "Choosing a digital marketing partner is about finding a team that understands the business, communicates its value effectively and can execute a coherent strategy.",
          "Swastixa brings together creative thinking, digital marketing, website development, design and production capabilities within an integrated approach.",
          "Its philosophy combines Indian cultural values with modern thinking, while its working approach emphasises research, collaboration, clarity and consistency.",
          "For businesses looking to establish a stronger digital presence, develop meaningful brand communication and bring different marketing activities together, Swastixa offers a portfolio of solutions that can be aligned with their specific requirements.",
          "To explore how Swastixa can support your business,  get in touch through the website's contact form of contact us through our social media handles."
        ]
      }
    ]
  }
];

export const allFaqs: FAQItem[] = faqSections.flatMap((s) => s.faqs);
