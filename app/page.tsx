import { navItems } from '@/constants';

import { Hero } from '@/components/hero';
import { Grid } from '@/components/grid';
import { Footer } from '@/components/footer';
import { WorkProcess } from '@/components/work-process';
import { WorkExperience } from '@/components/work-experience';
import { RecentProjects } from '@/components/recent-projects';
import { FloatingNavbar } from '@/components/ui/floating-navbar';

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
			<div className='max-w-7xl w-full'>
				<FloatingNavbar navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<WorkExperience />
				<WorkProcess />
				<Footer />
			</div>
		</main>
	);
}
