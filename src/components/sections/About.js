import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SectionWrapper from '../generic/SectionWrapper';


function About() {
	const [aboutSectionRef, aboutSectionInView] = useInView({
		threshold: 0.6,
		root: null,
	});
	return (
		<SectionContainer
			title="About me"
			id="about"
			ref={aboutSectionRef}
			sectionInView={aboutSectionInView}
		>
          
		 
		 

		  
		  
			
			<p>
				Hi, I'm Walson Ferrao, a web developer based in Mangalore, India. I enjoy building web
				applications with clean and beautiful interfaces that provide a delightful user experience.
				I love learning new technologies and concepts related to web development. I like implimenting creative things in website.
			</p>

			<p>
				I am excited to work with and learn from the experts in the industry, and continue to grow
				myself as a developer.
			</p>
		</SectionContainer>
	);
}

export default About;

const SectionContainer = styled(SectionWrapper)`
       

	p {
		width: 100%;
		max-width: 55ch;
		margin: 0 auto;

		:not(:last-child) {
			margin-bottom: 2rem;
		}
	}
`;
