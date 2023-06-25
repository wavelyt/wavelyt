import Link from 'next/link';

import { Button } from '@/components/Button';
import { Section } from '@/components/Section';

const Hero = () => (
	<Section yPadding="pt-20 pb-32">
		<header className="text-center">
			<h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				Unlock Your Business's Full Potential with Cutting-Edge Tech Solutions
			</h1>
			<div className="text-2xl mt-4 mb-16">
				Build your online presence and grow your position in market exponentially.
			</div>
			<Link href="mailto:hello@wavelyt.com" passHref>
					<Button xl>Get Started</Button>
			</Link>
		</header>
	</Section>
);

export { Hero };
