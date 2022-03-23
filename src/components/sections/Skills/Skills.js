import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiMaterialUi, SiStyledComponents, SiMongodb, SiRedux } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import Skill from './Skill';
import SectionWrapper from '../../generic/SectionWrapper';
import { useInView } from 'react-intersection-observer';

const skills = [
	{ text: 'HTML', icon: FaHtml5, color: '#f05a1a' },
	{ text: 'CSS', icon: FaCss3Alt, color: '#2965f1' },
	{ text: 'JavaScript', icon: SiJavascript, color: '#e3e017' },
	{ text: 'React', icon: FaReact, color: '#61dafb' },
	{ text: 'Redux', icon: SiRedux, color: '#764abc' },
	{ text: 'Material UI', icon: SiMaterialUi, color: '#0081CB' },
	{ text: 'styled components', icon: SiStyledComponents, color: '#c74eab' },
	{ text: 'Node.js', icon: FaNodeJs, color: '#3e863d' },
	{ text: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
	{ text: 'Git', icon: FaGitAlt, color: '#f14e32' },
	{ text: 'npm', icon: FaNpm, color: '#cb3837' },
];

function Skills() {
	const [skillsSectionRef, skillsSectionInView] = useInView({
		threshold: 0.4,
		root: null,
		rootMargin: '-80px',
	});

	return (
		<SectionWrapper
			title="Skills"
			id="skills"
			ref={skillsSectionRef}
			sectionInView={skillsSectionInView}
		>
			<SkillsList>
				{skills.map(({ text, icon }) => (
					<Skill key={text} text={text} icon={icon} />
				))}
			</SkillsList>
		</SectionWrapper>
	);
}

export default Skills;

const SkillsList = styled.ul`
	list-style: none;
	display: grid;
	justify-content: center;
	gap: 4rem;
	grid-template-columns: repeat(auto-fill, 12rem);
`;
