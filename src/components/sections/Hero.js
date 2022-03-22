import React from 'react';
import styled from 'styled-components';
import TypewriterComponent from 'typewriter-effect';
import Button from '../generic/Button';
import FadeInFromBelow from '../animation/FadeInFromBelow';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import mypic from '../../assets/images/mypic.png';

const subtitleVariants = {
	hidden: { x: -60, opacity: 0 },

	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 2.7, duration: 1, ease: 'easeOut' },
	},
};

const Hero = React.forwardRef((_, ref) => {
	// making a query to get the resume

	return (
		<Container ref={ref}>
			<HeroContent>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["Hi, I'm Walson", 'Welcome to my website'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<motion.p variants={subtitleVariants} initial="hidden" animate="visible">
					A passionate and creative full-stack web developer who likes creating amazing interactive
					experiences on the web.{' '}
				</motion.p>
				<ButtonsContainer>
					<FadeInFromBelow>
						<Button text="View Projects" isLink={true} path="/#projects" />
					</FadeInFromBelow>

					<FadeInFromBelow>
						<Button
							text="View Resume"
							isExternalLink={true}
							url={
								'https://drive.google.com/file/d/1mVSd0CWFZSxI-TeY50mXHOx1t65f4yMN/view?usp=sharing'
							}
						/>
					</FadeInFromBelow>
				</ButtonsContainer>
			</HeroContent>
			<ProfilePicture>
				<img src={mypic} alt="profile-pic" />
			</ProfilePicture>
		</Container>
	);
});

export default Hero;

const Container = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	gap: 40px;

	@media (max-width: 768px) {
		padding-bottom: 30px;
		justify-content: center;
		flex-direction: column-reverse;
	}
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 19rem));
	column-gap: 1rem;
	row-gap: 2rem;
`;

const HeroContent = styled.div`
	margin-top: 2rem;
	width: 60%;

	@media (max-width: 768px) {
		width: 70%;
		> h1{
			font-size: 3rem;
		}
		> p {
			margin: auto;
		}
		
	}

	h1 {
		margin-bottom: 2rem;
	}

	p {
		font-size: 2rem;
		max-width: 35ch;
		margin-bottom: 4rem;
	}
`;

const ProfilePicture = styled.div`
	width: 30%;

	@media (max-width: 768px) {
		width: 60%;
	}

	> img {
		width: 100%;
		border-radius: 300px;
	}
`;
