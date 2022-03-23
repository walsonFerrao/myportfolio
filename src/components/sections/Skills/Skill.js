import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

function Skill({ text, icon: Icon }) {
	const iconStyles = { fontSize: '6rem', marginBottom: '1.5rem' };
	const [color, setColor] = useState('');

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		setColor(color);
		return color;
	}

	const variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<SkillComponent color={color} onMouseEnter={getRandomColor}>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 80,
					autoStart: true,
				}}
			>
				<Icon style={iconStyles} aria-hidden="true" />
				<p>{text}</p>
			</motion.div>
		</SkillComponent>
	);
}

export default Skill;

const SkillComponent = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-size: 1.8rem;
		text-align: center;
	}

	svg {
		fill: #c0bfc7;;
		cursor: pointer;

		:hover {
			fill: ${({ color }) => color};
		}
	}
`;
