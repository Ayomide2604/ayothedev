import { useEffect, useState } from "react";
import Project from "../components/Project";
import projectsJson from "../data/projects";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(projectsJson);
	});
	return (
		<section id="portfolio" className="portfolio section">
			{/* Section Title */}
			<div className="container section-title" data-aos="fade-up">
				<h2>Portfolio</h2>
				<div className="title-shape">
					<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						/>
					</svg>
				</div>
				<p>
					Explore a curated collection of my recent projects, showcasing my
					skills in web development and problem solving. Each project reflects
					real-world challenges, built with modern technologies and a passion
					for clean, scalable code.
				</p>
			</div>
			{/* End Section Title */}

			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<div className="row g-4 " data-aos="fade-up" data-aos-delay={300}>
					{projects.map((project) => (
						<Project
							key={project.id}
							id={project.id}
							title={project.title}
							image={project.images[0]}
							tech={project.tech}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
