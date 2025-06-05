import heroImage from "../assets/img/hero.png";

const Hero = () => {
	return (
		<>
			{/* Hero Section */}
			<section id="hero" className="hero section">
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row align-items-center content">
						<div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
							{/* Available for new opportunities badge */}
							<span className="badge bg-light text-dark mb-3">
								Available for new opportunities
							</span>

							<h2>
								Full-Stack Developer <br />
								<span style={{ color: "#EB8951" }}>Building the Future</span>
							</h2>
							<p className="lead">
								I architect and develop scalable web applications, robust APIs,
								and seamless integrations that drive business growth.
								Specializing in modern technologies and best practices.
							</p>

							{/* Technologies/Skills */}
							<div className="d-flex flex-wrap gap-2 mb-4">
								<span className="badge bg-secondary">React</span>
								<span className="badge bg-secondary">Python</span>
								<span className="badge bg-secondary">Django</span>
								<span className="badge bg-secondary">Express</span>
								<span className="badge bg-secondary">Javascript</span>
								<span className="badge bg-secondary">Postgres</span>
								<span className="badge bg-secondary">Mongo DB</span>
							</div>

							<div
								className="cta-buttons"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<a href="#portfolio" className="btn btn-primary">
									View My Work
								</a>
								<a href="#" className="btn btn-outline-secondary">
									Download Resume
								</a>
							</div>

							{/* Stats */}
							{/* <div
								className="hero-stats"
								data-aos="fade-up"
								data-aos-delay={400}
							>
								<div className="stat-item">
									<span className="stat-number">5+</span>
									<span className="stat-label">Years Learning & Building</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">100+</span>
									<span className="stat-label">
										Projects Practiced & Completed
									</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">50+</span>
									<span className="stat-label">
										Happy Clients & Collaborations
									</span>
								</div>
							</div> */}
						</div>
						<div className="col-lg-6">
							<div className="hero-image d-lg-block">
								<img
									src={heroImage}
									alt="Ayomide Fullstack Developer Hero Image"
									className="img-fluid"
									data-aos="zoom-out"
									data-aos-delay={300}
								/>
								<div className="shape-1" />
								<div className="shape-2" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /Hero Section */}
		</>
	);
};

export default Hero;
