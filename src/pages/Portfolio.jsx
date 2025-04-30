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
					Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
					quam nihil molestiae consequatur vel illum qui dolorem
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
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
