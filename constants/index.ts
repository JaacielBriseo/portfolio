export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Experience', link: '#experience' },
	{ name: 'Contact', link: '#contact' },
];

export const projects = [
	{
		id: 1,
		title: 'DAS Market',
		des: 'A local marketplace app that connects buyers and sellers in Hermosillo, Sonora for quick sales.',
		img: '/p1.svg',
		iconLists: ['/re.svg', '/next.svg', '/tail.svg', '/ts.svg','/psql.svg','/dock.svg'],
		link: 'https://vender.das.market/',
	},
	{
		id: 2,
		title: 'Grupo Rivero Web',
		des: 'A corporate website for Grupo Rivero, a car dealership in Monterrey, Nuevo León.',
		img: '/p2.svg',
		iconLists: ['/re.svg', '/next.svg', '/tail.svg', '/ts.svg'],
		link: 'https://next-web.rivero.services/',
	},
	{
		id: 3,
		title: 'Kanban Task Management',
		des: 'A task management app that allows you to create, edit, and delete tasks, as well as drag and drop them to different columns.',
		img: '/p3.svg',
		iconLists: ['/psql.svg','/dock.svg', '/tail.svg', '/ts.svg', '/re.svg', '/next.svg'],
		link: 'https://kanban-tasks-management-nextjs.vercel.app/',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: '/cloud.svg',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'appwrite',
		img: '/app.svg',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: '/host.svg',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'stream',
		img: '/s.svg',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'docker.',
		img: '/dock.svg',
		nameImg: '/dockerName.svg',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Freelance Web Dev',
		desc: 'Develop and maintain user-facing features using modern web development technologies.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'Fullstack Developer',
		desc: 'Developed and updated of an internal system to take orders and manage inventory in an auto parts shop.',
		className: 'md:col-span-2',
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'Software Developer and founder partner of a startup',
		desc: 'Design, develop and mantain a SaaS for a local marketplace with delivery service, products storage, inventory and order tracking.',
		className: 'md:col-span-2',
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Software Developer at a Software Factory',
		desc: 'Design, develop, and maintain multiple projects for different clients using a variety of technologies, always adhering to best practices.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link:'https://github.com/JaacielBriseo'
	},
	{
		id: 2,
		img: '/twit.svg',
		link:'https://x.com/BrisenoJaaciel'
	},
	{
		id: 3,
		img: '/link.svg',
		link:'https://www.linkedin.com/in/jaaciel-brise%C3%B1o-espinoza-11447524b/'
	},
];
