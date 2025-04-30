import projects from "./../data/projects";
import { useParams } from "react-router-dom";
const PortfolioDetailScreen = () => {
	const { id } = useParams();

	let project = projects.filter((p) => p.id === parseInt(id));
	project = project[0];

	return (
		<>
			<div className="page-title">
				<div className="title-wrapper">
					<h1> Project Details</h1>
				</div>
			</div>

			<section id="portfolio-details" className="portfolio-details section">
				<div className="container" data-aos="fade-up">
					<div className="row gy-4 g-lg-5">
						<div className="col-lg-6">
							{project.images.map((image) => (
								<img src={image} className="img-fluid mb-4" alt="" />
							))}
						</div>

						<div className="col-lg-6">
							<div className="position-sticky" style={{ top: "40px" }}>
								<div className="portflio-description">
									<h2>{project.title}</h2>
									<p>{project.description}</p>
								</div>

								<div className="portfolio-info mt-5">
									<h3>Project information</h3>
									<ul>
										<li>
											<strong>Title:</strong> {project.title}
										</li>
										{project.liveUrl && (
											<li>
												<strong>LiveUrl:</strong>{" "}
												<a href={project.liveUr}>{project.liveUrl}</a>
											</li>
										)}
										{project.githubUrl && (
											<li>
												<strong>Github URL:</strong>
												<a href={project.githubUrl}>{project.githubUrl}</a>
											</li>
										)}
										<li>
											<a href="#" className="btn-visit align-self-start">
												Visit Website
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioDetailScreen;
