import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'armada-fullstack-developer',
		company: 'Armada Delivery Solutions',
		description: 'Developed scalable backend services using Golang and Node.js, powering core delivery and logistics systems. Built dynamic, high-performance frontend applications with React.js, ensuring seamless user experiences. Integrated multiple third-party services (e.g., payment gateways, POS, ERPs) through secure and reliable APIs. Designed, implemented, and maintained public APIs to enable external partners to integrate with the platform. Authored and maintained comprehensive API documentation using tools like Swagger and Postman. Utilized MongoDB for data persistence and Redis for caching and real-time pub/sub messaging. Managed infrastructure and deployments using AWS services including EC2, S3, Lambda, Amplify, and others. Implemented monitoring, logging, and alerting systems to ensure high availability and reliability. Collaborated with cross-functional teams in an agile environment and participated in code reviews to maintain code quality.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 1, 1) },
		skills: getSkills('js', 'ts', 'go', 'reactjs', 'nodejs', 'mongodb', 'redis', 'aws', 'docker'),
		name: 'Full-stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://business.armadadelivery.com', label: 'Business Platform' },
			{ to: 'https://docs.armadadelivery.com', label: 'API Documentation' },
			{ to: 'https://studio.armadadelivery.com', label: 'Integrator Studio' }
		],
		logo: Assets.Unknown,
		shortDescription: 'Full-stack development for delivery and logistics platform using Go, Node.js, and React.'
	},
	{
		slug: 'raisegard-backend-developer',
		company: 'RAISEGARD',
		description: 'Built OAuth2-secured authentication and authorization system to ensure secure user access and data protection. Designed optimized MySQL schema for efficient data handling and improved query performance. Developed complete CRUD functionality across the application, ensuring robust data management and user interactions.',
		contract: ContractType.Freelance,
		type: 'Backend Development',
		location: 'Remote',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 7, 31) },
		skills: getSkills('nodejs', 'postgresql'),
		name: 'Backend Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Backend development with OAuth2 authentication and MySQL optimization.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
