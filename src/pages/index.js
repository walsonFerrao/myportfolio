import React from 'react';
import '../My-styles.css/walson-style.css'
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/projects/Projects';
import Skills from '../components/sections/Skills/Skills';
import GlobalStyles from '../style/GlobalStyles';
import favicon from '../assets/images/favicon.ico';

export default function Home() {
	/* Ref for the hero section, and a boolean that will indicate whether the hero section is in view or not.
	This is required to determine the style of the nav bar depending on whether the hero section is in view or not
	*/
	const [heroSectionRef, heroSectionInView] = useInView({
		threshold: 0,
		root: null,
		rootMargin: '-150px',
	});
	return (
		<div id="app">
			<GlobalStyles />
			<Helmet>
				<meta
					name="description"
					content="Portfolio website of Walson Ferrao, a front-end developer"
				/>
				<title>Walson Ferrao | Full Stack Developer</title>
				<link rel="icon" href={favicon} />
			</Helmet>
			<Layout heroSectionInView={heroSectionInView}>
				<Hero ref={heroSectionRef} />
				<About />
	
				<Projects />
				<Skills />
				
				<Contact />
			</Layout>
		</div>
	);
}
