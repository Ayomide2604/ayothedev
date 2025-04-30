import { FaEye, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Project = ({ id, title, description, image }) => {
	return (
		<div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
			<div className="portfolio-card">
				<div className="portfolio-image">
					<img
						src={image}
						className="img-fluid"
						alt=""
						loading="lazy"
						style={{ objectFit: "contain" }}
					/>
					<div className="portfolio-overlay">
						<div className="portfolio-actions">
							<a
								href={image}
								className="glightbox preview-link"
								data-gallery="portfolio-gallery-graphics"
							>
								<FaEye />
							</a>
							<Link to={`/portfolio/${id}`} className="details-link">
								<FaArrowRight />
							</Link>
						</div>
					</div>
				</div>
				<div className="portfolio-content">
					<h3>{title}</h3>
					<p>{description}</p>
					<p className="badge badge-pill bg-info">Tech Stack</p>
				</div>
			</div>
		</div>
	);
};

export default Project;
