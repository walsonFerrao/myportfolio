import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import stylesConfig from '../../../style/stylesConfig';
import Button from '../../generic/Button';
import { keyframes } from 'styled-components';

function Project({ project }) {
	const [index, setIndex] = useState(1);
	let maxImage = 2;
	/* The query will return a data object containing allFile property.
    allFile is an object containing a 'nodes' property, and 'nodes' is an array of objects containing
    two properties -> relativePath, and childImageSharp.
    */
	const data = useStaticQuery(graphql`
		query ProjectImagesQuery {
			allFile {
				nodes {
					relativePath
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 50)
					}
				}
			}
		}
	`);
	/*
    Selecting the node that corresponds with the specified project
    If the image name is included in relative path, then that is the appropriate project node.

    For example, for the image of memories app, relative path would be "memories-mockup.png", and image name would be "memories-mockup"
    In this case, I am keeping the node for memories image only, and then destructuring it from the array
     */
	const [projectNode] = data.allFile.nodes.filter(node =>
		node.relativePath.includes(project.image.name)
	);

	useEffect(() => {
		setTimeout(() => {
			let i = index + 1 > maxImage ? 1 : index + 1;
			setIndex(() => i);
		}, [5000]);
	}, [index]);

	return (
		<ProjectContainer>
			<ImageContainer>
				{project?.image?.map((img, i) => (
					<Image key={i} src={img?.link} showImage={img?.index === index} />
				))}
			</ImageContainer>
			<TextContent>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<br />
				<ul className='project-functionalities'>
					<li>{project.one}</li>
					<li>{project.two}</li>
					<li>{project.three}</li>
					<li>{project.four}</li>
				</ul>
				<TechnologiesUsedContainer>
					<h4>Technologies Used</h4>
					<ul>
						{project.technologiesUsed.map(technology => (
							<li key={technology}>{technology}</li>
						))}
					</ul>
				</TechnologiesUsedContainer>
				<ButtonsContainer>
					<Button
						text="Live Website"
						isExternalLink={true}
						url={project.websiteLink}
						style={{ fontSize: '1.8rem' }}
					/>
					<Button
						text="GitHub Repo"
						isExternalLink={true}
						url={project.githubLink}
						style={{ fontSize: '1.8rem' }}
					/>
				</ButtonsContainer>
			</TextContent>
		</ProjectContainer>
	);
}

export default Project;

const ProjectContainer = styled.div`
	background-color: #2b293b;
	padding: ${stylesConfig.projectLayoutSpacing};
	border-radius: 1rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;
	border: 2px solid white;

	&:not(:last-child) {
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: ${stylesConfig.bpLarge}) {
		display: flex;

		& > * {
			flex: 1;
		}
	}
`;

const Animation = keyframes`
0% {  transform: translate(-2000px) }
50% { transform: translate(-1000px)}
100% {  transform: translate(0) }
`;

const ImageContainer = styled.div`
display: flex;
align: items: center;
justify-content: center;
`;
const Image = styled.img`
    margin-bottom: ${stylesConfig.projectLayoutSpacing};
    width: 100%
    height: 100%;
    max-width: 500px;
    object-fit: contain;
    opacity: ${({ showImage }) => (showImage ? '1' : '0')};
    display: ${({ showImage }) => (showImage ? 'block' : 'none')};
    animation-name: ${Animation};
    animation-duration: 1s;
    position: relative;

    @media only screen and (min-width: ${stylesConfig.bpLarge}) {
        margin-right: ${stylesConfig.projectLayoutSpacing};
    }
`;
const TextContent = styled.div`
	h3 {
		text-align: center;
		margin-bottom: ${stylesConfig.projectLayoutSpacing};
	}
	.project-functionalities {
		margin-left:20px;
    li{
		color:#c0bfc7;
		font-size:1.5rem
	}

	}

	p {
		max-width: 60ch;
		margin: 0 auto;
	}
`;

const TechnologiesUsedContainer = styled.div`
	margin: ${stylesConfig.projectLayoutSpacing} 0;
	h4 {
		text-align: center;
		margin-bottom: ${stylesConfig.projectLayoutSpacing};
	}

	ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, 15rem);
		gap: 1rem;
		justify-content: center;
	}

	li {
		color: ${stylesConfig.bodyFontColor};
		background-color: ${stylesConfig.bodyBackgroundColor};
		padding: 1rem;
		border-radius: 4px;
		font-size: 1.8rem;
		text-align: center;
		justify-content: center;
		display: flex;
		align-items: center;
	}
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 16rem));
	justify-content: center;
	column-gap: 1rem;
	row-gap: 2rem;
`;
