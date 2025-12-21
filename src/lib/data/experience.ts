import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'freelance-developer',
		company: 'Freelance',
		description: 'Delivered custom web and mobile solutions for diverse clients across various industries during spare time. Developed full-stack applications using modern technologies including React, Node.js, and Python. Collaborated directly with clients to gather requirements, provide technical consultation, and deliver solutions that exceed expectations. Managed complete project lifecycles from initial concept to deployment and maintenance. Built responsive, user-friendly interfaces and scalable backend systems. Configured and managed cloud infrastructure on AWS and other platforms, implementing CI/CD pipelines for automated testing and deployment. Containerized applications using Docker and orchestrated deployments for improved scalability and reliability. Set up monitoring, logging, and backup solutions to ensure system stability and data integrity. Handled multiple concurrent projects while maintaining high code quality and meeting tight deadlines. Gained valuable experience in client communication, project estimation, and delivering business value through technology.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2024, 6, 1) },
		skills: getSkills('go', 'js', 'ts', 'reactjs', 'nodejs', 'python', 'mongodb', 'postgresql', 'docker', 'aws'),
		name: 'Freelance Developer',
		color: 'purple',
		links: [],
		logo: Assets.Freelance,
		shortDescription: 'Building custom web and mobile solutions for clients worldwide during free time, specializing in full-stack development.'
	},
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
		logo: Assets.Armada,
		shortDescription: 'Full-stack development for delivery and logistics platform using Go, Node.js, and React.'
	},
	{
		slug: 'raisegard-backend-developer',
		company: 'RAISEGARD',
		description: 'Architected and implemented a robust OAuth2-based authentication and authorization system, ensuring enterprise-grade security for user access and sensitive data protection. Designed and optimized MySQL database schemas with focus on normalization, indexing strategies, and query performance optimization, resulting in significantly improved response times. Developed comprehensive CRUD operations with RESTful API design principles, implementing proper validation, error handling, and data integrity constraints. Collaborated with frontend teams to define clear API contracts and ensure seamless integration. Participated in code reviews and contributed to establishing best practices for backend development within the team.',
		contract: ContractType.FullTime,
		type: 'Backend Development',
		location: 'Remote',
		period: { from: new Date(2022, 5, 1), to: new Date(2023, 0, 31) },
		skills: getSkills('nodejs', 'postgresql'),
		name: 'Backend Developer',
		color: 'green',
		links: [],
		logo: Assets.Raizequard,
		shortDescription: 'Engineered secure backend systems with OAuth2 authentication, optimized database architecture, and RESTful API development.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
