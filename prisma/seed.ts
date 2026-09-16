import { PrismaClient } from '../src/generated/prisma/client.js';

export const profileSeed = {
  slug: 'alex',
  name: 'Alex',
  description: 'Full-stack developer',
  links: [
    {
      key: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alexey-l-850685162',
    },
    {
      key: 'github',
      label: 'GitHub',
      url: 'https://github.com/005a',
    },
  ],
  skills: [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'NestJS', category: 'Framework' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Prisma', category: 'Data access' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'Infrastructure' },
    { name: 'Git', category: 'Tooling' },
  ],
  experience: [
    {
      key: 'igaming-holding-lead-platform-engineer',
      company: 'iGaming Holding',
      position: 'Lead Platform Engineer',
      startDate: new Date('2024-01-01T00:00:00.000Z'),
      endDate: new Date('2026-01-01T00:00:00.000Z'),
      achievements: [
        'Worked on a complex financial and authentication system serving approximately 500,000 users worldwide, providing wallet and SSO functionality to more than 50 platforms. The stack included Flutter for mobile, Flutter Web and Angular for web, ReactJS for internal services and dashboards, and NestJS, Redis, and MySQL on Amazon RDS for the backend.',
        'Monthly recurring revenue grew from 30,000 in Q1 to seven figures in Q4 of the first year.',
        'Customized the technology stack to improve mobile build security with anti-scan deep code obfuscation and backend feature-flag encryption, and optimized Angular SSR to reduce resource consumption by 98%.',
        'Redesigned the system architecture to support seamless white-label expansion and deployment of multiple products from a single codebase.',
        'Implemented backend multi-tenancy and Argo CD with Argo Rollouts to improve release safety.',
        'Onboarded and mentored backend engineers, frontend and mobile developers, AppSec and cybersecurity engineers, and access administrators; supported SEO, ASO, CRM, and retention specialists; designed cross-department solutions; and created internal CRM and CM accessory systems.',
        'Separated the Flutter Web business-logic bundle from smaller UI bundles using AutoRouter defer, improving initial load performance by 50% while loading other pages on demand.',
        'Added a secondary authentication-token channel on the backend so users could log in when SMS delivery failed.',
        'Implemented affiliate-attribute processing to maintain consistency during app review.',
        'Integrated third-party and internal services, including CRM over Kafka, a Strapi CMS data-migration adapter, payment-gateway postback management, internal balance management, and various settings adjustments.',
        'Established biweekly backend and frontend deployments and integrated a release-candidate flow into the mobile SDLC, delivering a QA-tested build ready to present as a release candidate at the end of each sprint. Added obfuscation mechanisms that kept parseable code unique, reducing rejections and improving in-app security.',
      ],
    },
    {
      key: 'social-network-head-of-development',
      company: 'Social Network',
      position: 'Head of Development',
      startDate: new Date('2023-01-01T00:00:00.000Z'),
      endDate: new Date('2024-01-01T00:00:00.000Z'),
      achievements: [
        'Designed and integrated crucial product features, including new user-AI interaction flows that increased user retention by 70%.',
        'Expanded the codebase and separated it into modules using clean architecture.',
        'Created feature modules for chats, voice messages, media sharing, likes, comments, image editing, and video editing.',
        'Optimized deployment and product-presentation processes, increasing user acquisition by 120%.',
      ],
    },
    {
      key: 'outsource-company-lead-full-stack-developer-cto',
      company: 'Outsource Company',
      position: 'Lead Full-Stack Developer / CTO',
      startDate: new Date('2019-01-01T00:00:00.000Z'),
      endDate: new Date('2023-01-01T00:00:00.000Z'),
      achievements: [
        'Delivered Ana Al Parlaman, a nationwide system connecting municipal representatives with people in rural regions, using ReactJS, NodeJS, Google Cloud Platform, Flutter, and Cloudflare.',
        'Delivered multiple React Native applications for customers worldwide, including SourceZon, AdvantageLaw, and NFTrace.',
        'Contributed to web services including NCahoots, eDocine, and Auchan, with Auchan serving more than 500,000 monthly active users, using ReactJS, NodeJS, Azure, and .NET.',
        'Led the design and development of an enterprise system spanning its architecture, mobile application, web administration portal, CDN, and automated end-to-end tests using Firebase, Flutter, Google Cloud Functions, and ReactJS.',
        'Migrated a proprietary no-code backend to a controlled NodeJS backend hosted on Microsoft Azure.',
        'Developed several products end to end, from identifying system requirements and partner dependencies through workload balancing, implementation, testing, and configuring metrics, alarms, monitors, and dashboards.',
        'Established and managed the company website and corporate servers, a Git service, CI/CD pipelines, merge requests, code reviews, load and stress testing, unit, integration, and end-to-end testing, a container registry, employee email and service accounts, service-health monitoring, time tracking, an HR management system, and a corporate VPN.',
        'Improved a fintech trading application by making push notifications reliable, introducing CodePush, adjusting its WordPress backend, and resolving app-store deployment conflicts.',
        'Helped build an application supporting businesses owned by people of color from scratch.',
        'Contributed to a worldwide banking application, resolving localization, KYC, and code-architecture issues.',
      ],
    },
    {
      key: 'sports-entertainment-company-react-native-developer',
      company: 'Worldwide Sports/Entertainment Company',
      position: 'React Native Developer',
      startDate: new Date('2018-01-01T00:00:00.000Z'),
      endDate: new Date('2019-01-01T00:00:00.000Z'),
      achievements: [
        'Refactored a booking application built with React Native and Redux.',
        'Successfully introduced CodePush in production, addressing emergency-deployment challenges.',
        'Reworked push notifications and implemented topic subscriptions.',
      ],
    },
    {
      key: 'entertainment-gamedev-mobile-full-stack-developer',
      company: 'Entertainment/Game Development Company',
      position: 'Mobile Software Developer, Full-Stack Web Developer',
      startDate: new Date('2015-01-01T00:00:00.000Z'),
      endDate: new Date('2018-01-01T00:00:00.000Z'),
      achievements: [
        'Developed mobile games for Android in Java and cross-platform games with React Native.',
        'Built full-stack web applications from scratch using PHP and MySQL as well as ReactJS and Firebase.',
        'Developed a mobile receipt-printing application for bus conductors with Android, Java, and Bluetooth printers; cultural city guides with React Native; a React Native, plain JavaScript, and Firebase application integrated into a live food-delivery system; and a React Native augmented-reality navigation application for a shopping mall.',
      ],
    },
    {
      key: 'security-systems-head',
      company: 'Security Systems Company',
      position: 'Security and Surveillance Systems Head',
      startDate: new Date('2014-01-01T00:00:00.000Z'),
      endDate: new Date('2015-01-01T00:00:00.000Z'),
      achievements: [
        'Worked with local police, emergency-service, and fire-department engineers to solve technical problems, improve communication, and manage security equipment and networks.',
        'Developed an internal Android RTSP surveillance client in Java.',
      ],
    },
    {
      key: 'fintech-company-tech-chief',
      company: 'Fintech Company',
      position: 'Tech Chief',
      startDate: new Date('2010-01-01T00:00:00.000Z'),
      endDate: new Date('2013-01-01T00:00:00.000Z'),
      achievements: [
        'Opened and supported more than 10 offices.',
        'Optimized a highly sensitive database for secure multi-user access.',
      ],
    },
    {
      key: 'internet-provider-software-engineer-system-administrator',
      company: 'Internet Provider',
      position: 'Software Engineer / System Administrator',
      startDate: new Date('2008-01-01T00:00:00.000Z'),
      endDate: new Date('2010-01-01T00:00:00.000Z'),
      achievements: [
        'Launched several desktop network utilities providing account information and balances, including a pop-up with links to internal internet-provider resources.',
      ],
    },
    {
      key: 'software-development-company-desktop-developer',
      company: 'Software Development Company',
      position: 'Desktop Software Developer',
      startDate: new Date('2005-01-01T00:00:00.000Z'),
      endDate: new Date('2008-01-01T00:00:00.000Z'),
      achievements: [
        'Created an internal product for a local electricity and water utility using Delphi, C++, Microsoft Access, and SQL.',
      ],
    },
  ],
  projects: [
    {
      key: 'digital-business-card',
      name: 'Digital Business Card API',
      description:
        'A containerized GraphQL portfolio API built with NestJS, Prisma and PostgreSQL.',
      url: 'https://github.com/005a/bcard',
    },
  ],
} as const;

export async function seed(prisma: PrismaClient): Promise<void> {
  await prisma.$transaction(async (transaction) => {
    const profile = await transaction.profile.upsert({
      where: { slug: profileSeed.slug },
      create: {
        slug: profileSeed.slug,
        name: profileSeed.name,
        description: profileSeed.description,
      },
      update: {
        name: profileSeed.name,
        description: profileSeed.description,
      },
    });

    await transaction.professionalLink.deleteMany({
      where: {
        profileId: profile.id,
        key: { notIn: profileSeed.links.map(({ key }) => key) },
      },
    });
    for (const link of profileSeed.links) {
      await transaction.professionalLink.upsert({
        where: { profileId_key: { profileId: profile.id, key: link.key } },
        create: { ...link, profileId: profile.id },
        update: link,
      });
    }

    await transaction.skill.deleteMany({
      where: {
        profileId: profile.id,
        name: { notIn: profileSeed.skills.map(({ name }) => name) },
      },
    });
    for (const skill of profileSeed.skills) {
      await transaction.skill.upsert({
        where: {
          profileId_name: { profileId: profile.id, name: skill.name },
        },
        create: { ...skill, profileId: profile.id },
        update: skill,
      });
    }

    await transaction.experience.deleteMany({
      where: {
        profileId: profile.id,
        key: { notIn: profileSeed.experience.map(({ key }) => key) },
      },
    });
    for (const experience of profileSeed.experience) {
      const experienceData = {
        ...experience,
        achievements: [...experience.achievements],
      };
      await transaction.experience.upsert({
        where: {
          profileId_key: { profileId: profile.id, key: experience.key },
        },
        create: { ...experienceData, profileId: profile.id },
        update: experienceData,
      });
    }

    await transaction.project.deleteMany({
      where: {
        profileId: profile.id,
        key: { notIn: profileSeed.projects.map(({ key }) => key) },
      },
    });
    for (const project of profileSeed.projects) {
      await transaction.project.upsert({
        where: {
          profileId_key: { profileId: profile.id, key: project.key },
        },
        create: { ...project, profileId: profile.id },
        update: project,
      });
    }
  });
}
