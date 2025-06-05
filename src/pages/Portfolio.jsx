import { useEffect, useState } from "react";
import Project from "../components/Project";
import projectsJson from "../data/projects";

const Portfolio = () => {
	const [allProjects, setAllProjects] = useState([]);
	const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

	useEffect(() => {
		setAllProjects(projectsJson);
	}, []); // Empty dependency array means this effect runs only once after initial render

	const handleViewAll = () => {
		setVisibleProjectsCount(allProjects.length);
	};

	return (
		<section id="portfolio" className="portfolio section">
			{/* Section Title */}
			<div className="container section-title" data-aos="fade-up">
				<h2>Featured Projects</h2>
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
					A showcase of my recent work in full-stack development and API
					integration
				</p>
			</div>
			{/* End Section Title */}

			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<div className="row g-4 " data-aos="fade-up" data-aos-delay={300}>
					{allProjects.slice(0, visibleProjectsCount).map((project) => (
						<Project
							key={project.id}
							id={project.id}
							title={project.title}
							image={project.image}
							tech={project.tech}
							liveUrl={project.liveUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>

				{/* View All Projects Button */}
				{visibleProjectsCount < allProjects.length && (
					<div className="mt-4 text-center">
						<button
							onClick={handleViewAll}
							className="btn btn-outline-secondary d-inline-flex align-items-center"
						>
							View All Projects <i className="bi bi-arrow-right ms-2"></i>
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Portfolio;
