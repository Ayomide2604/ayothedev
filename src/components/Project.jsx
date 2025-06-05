import { BiCode, BiLink, BiLogoGithub } from "react-icons/bi";

const Project = ({
	id,
	title,
	description,
	image,
	tech,
	liveUrl,
	githubUrl,
}) => {
	return (
		<div className="col-lg-4 col-md-6 portfolio-item">
			{/* Project Image */}
			<div className="portfolio-img">
				{/* Use the single image prop */}
				{image ? (
					<img
						src={image}
						className="img-fluid"
						alt={title}
						loading="lazy"
						style={{ width: "100%", height: "200px", objectFit: "cover" }}
					/>
				) : (
					<div
						style={{
							height: "200px",
							backgroundColor: "#f0f0f0",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						Image Placeholder
					</div>
				)}
			</div>

			<div className="portfolio-info p-4">
				{/* Project Title */}
				<h4>{title}</h4>
				{/* Project Description */}
				<p>{description}</p>

				{/* Technologies/Skills used */}
				<div className="d-flex flex-wrap gap-2 mb-3">
					{tech &&
						tech.map((t, index) => (
							<span key={index} className="badge bg-light text-dark">
								{t}
							</span>
						))}
				</div>

				{/* Action Buttons */}
				<div className="d-flex gap-1">
					{/* Code Button */}
					{githubUrl && (
						<a
							href={githubUrl}
							className="btn btn-outline-secondary btn-sm d-flex align-items-center"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLogoGithub
								color="black"
								className="bi bi-box-arrow-up-right me-1"
							/>{" "}
							Code
						</a>
					)}
					{/* Live Demo Button */}
					{liveUrl && (
						<a
							href={liveUrl}
							className="btn  btn-sm d-flex text-white align-items-center"
							target="_blank"
							rel="noopener noreferrer"
							style={{ backgroundColor: "#EB8951" }}
						>
							<BiLink className="bi bi-box-arrow-up-right me-1" /> Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
