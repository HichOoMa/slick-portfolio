const firstName = 'Haithem';
const lastName = 'BenHammouda';
const suffix = 'Full-Stack Developer Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
