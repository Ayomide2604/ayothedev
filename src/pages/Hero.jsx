import heroImage from "../assets/img/hero.png";

const Hero = () => {
	return (
		<>
			{/* Hero Section */}
			<section id="hero" className="hero section">
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row align-items-center content">
						<div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
							<h2>Hello, I'm Ayomide — Web Developer</h2>
							<p className="lead">
								I'm passionate about building both the front-end and back-end of
								modern web applications. Constantly learning, improving, and
								bringing ideas to life through code.
							</p>
							<div
								className="cta-buttons"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<a href="#portfolio" className="btn btn-primary">
									View My Work
								</a>
								<a href="#contact" className="btn btn-outline">
									Let's Connect
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
							<div className="hero-image d-lg-block d-none">
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
