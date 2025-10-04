import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Full-stack web developer with a Master degree in computer science. Passionate about open-source technologies, cloud infrastructure, and real-time systems. Experienced in building scalable applications, contributing to business growth through technical excellence.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/HichOoMa', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/haitham-bh', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:haitham.benhammouda@gmail.com', icon: 'i-carbon-at' },
		{ label: 'Location', href: 'https://maps.google.com/?q=Sfax,Tunisia', icon: 'i-carbon-location' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
