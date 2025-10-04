import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: "Master's Degree in Open Source Software",
		description: 'Advanced studies in open source technologies, software architecture, and modern development practices.',
		location: 'Ariana, Tunisia',
		logo: Assets.Unknown,
		name: 'Higher Institute of Computer Science (ISI)',
		organization: 'Higher Institute of Computer Science (ISI)',
		period: { from: new Date(2023, 8, 1), to: new Date(2025, 5, 30) },
		shortDescription: "Master's in Open Source Software with focus on modern development practices",
		slug: 'masters-open-source',
		subjects: ['Open Source Development', 'Software Architecture', 'Cloud Computing', 'DevOps', 'Advanced Programming']
	},
	{
		degree: "Bachelor's Degree in Computer Science",
		description: 'Comprehensive computer science education covering programming fundamentals, algorithms, and software engineering principles.',
		location: 'Tunis, Tunisia',
		logo: Assets.Unknown,
		name: 'Faculty of Science of Tunis (FST)',
		organization: 'Faculty of Science of Tunis (FST)',
		period: { from: new Date(2020, 8, 1), to: new Date(2023, 5, 30) },
		shortDescription: 'Bachelor of Computer Science with strong foundation in programming and algorithms',
		slug: 'bachelor-computer-science',
		subjects: ['Programming', 'Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems', 'Computer Networks', 'Mathematics']
	}
];

const EducationData = { title, items };

export default EducationData;
