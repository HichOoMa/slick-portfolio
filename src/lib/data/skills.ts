import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import goMd from './md/go.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frontend', slug: 'frontend' }),
	defineSkillCategory({ name: 'Backend', slug: 'backend' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'DevOps & Cloud', slug: 'devops' }),
	defineSkillCategory({ name: 'Tools & Others', slug: 'tools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	// Programming Languages
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'Proficient in modern JavaScript ES6+ features, asynchronous programming, and various JavaScript runtime environments.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'Strong experience with TypeScript for type-safe development in both frontend and backend applications.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'go',
		color: 'cyan',
		description: goMd,
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description: 'Proficient in SQL for database design, optimization, and complex query development across various database systems.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'pro-lang'
	}),

	// Frontend Technologies
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'Expert knowledge of semantic HTML5 and modern web standards for building accessible web applications.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Advanced CSS skills including Flexbox, Grid, animations, and responsive design principles.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description: 'Experienced with Tailwind CSS for rapid UI development and consistent design systems.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'Extensive experience building dynamic, high-performance frontend applications with React.js, including hooks, context, and modern patterns.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description: 'Proficient in Next.js for building full-stack React applications with SSR, SSG, and API routes.',
		logo: Assets.NextJs,
		name: 'Next.js',
		category: 'frontend'
	}),

	// Backend Technologies
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Experienced in building scalable backend services and APIs using Node.js with various frameworks and libraries.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'backend'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'gray',
		description: 'Proficient in Express.js for building REST APIs and web applications with middleware and routing.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'backend'
	}),
	defineSkill({
		slug: 'nestjs',
		color: 'red',
		description: 'Experienced with NestJS for building enterprise-grade, modular backend applications with TypeScript.',
		logo: Assets.NestJs,
		name: 'NestJS',
		category: 'backend'
	}),

	// Databases
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'Extensive experience with MongoDB for document-based data storage, aggregation pipelines, and performance optimization.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'Proficient in PostgreSQL for relational data modeling, complex queries, and database optimization.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: 'Experienced with Redis for caching, session storage, and real-time pub/sub messaging systems.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),

	// DevOps & Cloud
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Proficient in containerization with Docker for development, testing, and production deployments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Experienced with AWS services including EC2, S3, Lambda, Amplify for cloud infrastructure and deployments.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'black',
		description: 'Experience with Apache Kafka for building real-time data pipelines and event-driven architectures.',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'devops'
	}),
	defineSkill({
		slug: 'github-actions',
		color: 'black',
		description: 'Proficient in GitHub Actions for CI/CD pipelines, automated testing, and deployment workflows.',
		logo: Assets.GitHub,
		name: 'GitHub Actions',
		category: 'devops'
	}),

	// Tools & Others
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Expert knowledge of Git version control for collaborative development and code management.',
		logo: Assets.Git,
		name: 'Git',
		category: 'tools'
	}),
	defineSkill({
		slug: 'websocket',
		color: 'green',
		description: 'Experienced in implementing real-time communication using WebSocket for chat applications and live updates.',
		logo: Assets.Websocket,
		name: 'WebSocket',
		category: 'tools'
	}),
	defineSkill({
		slug: 'chrome-extensions',
		color: 'yellow',
		description: 'Experience building Chrome Extensions for web automation and enhanced browsing functionality.',
		logo: Assets.ChromeExtension,
		name: 'Chrome Extensions',
		category: 'tools'
	}),
	defineSkill({
		slug: 'stripe',
		color: 'purple',
		description: 'Experienced with Stripe payment integration for secure online transactions and subscription management.',
		logo: Assets.Stripe,
		name: 'Stripe',
		category: 'tools'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'Proficient in MySQL database design, optimization, and complex query development.',
		logo: Assets.Unknown,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'oauth',
		color: 'green',
		description: 'Experienced with OAuth2 authentication and authorization systems for secure API access.',
		logo: Assets.OAuth,
		name: 'OAuth2',
		category: 'tools'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
