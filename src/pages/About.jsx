import aboutImage from "../assets/img/about.png";

const About = () => {
	return (
		<>
			{/* About Section */}
			<section id="about" className="about section light-background">
				<div className="container section-title" data-aos="fade-up">
					<h2>About Me</h2>
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
						A passionate full-stack developer with expertise in building
						scalable web applications, designing robust APIs, and creating
						seamless user experiences.
					</p>
				</div>
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row">
						{/* Technical Expertise Column */}
						<div
							className="col-lg-6"
							data-aos="fade-right"
							data-aos-delay={200}
						>
							<h3>Technical Expertise</h3>
							<p>
								With years of experience in full-stack development, I specialize
								in creating high-performance web applications using cutting-edge
								technologies. My expertise spans from frontend frameworks like
								React and Next.js to backend technologies including Node.js,
								Python, and various databases.
							</p>
							<p>
								I excel at API development and integration, having built
								numerous RESTful and GraphQL APIs that serve millions of
								requests. My focus on clean code, scalable architecture, and
								performance optimization ensures that every project I deliver
								exceeds expectations.
							</p>
							<div className="row mt-4">
								<div className="col-md-6">
									<div className="card text-center p-3">
										<h3>50+</h3>
										<p>Projects Completed</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card text-center p-3">
										<h3>5+</h3>
										<p>Years Experience</p>
									</div>
								</div>
							</div>
						</div>

						{/* Technology Stack Column */}
						<div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
							<h3>Technology Stack</h3>
							<div className="mb-4">
								<h4>Frontend</h4>
								<span className="badge bg-primary text-white me-1">HTML</span>
								<span className="badge bg-primary text-white me-1">CSS</span>
								<span className="badge bg-primary text-white me-1">
									JavaScript
								</span>
								<span className="badge bg-primary text-white me-1">
									Bootstrap
								</span>
								<span className="badge bg-primary text-white me-1">React</span>
							</div>
							<div className="mb-4">
								<h4>Backend</h4>
								<span className="badge bg-success text-white me-1">Python</span>
								<span className="badge bg-success text-white me-1">Django</span>
								<span className="badge bg-success text-white me-1">
									JavaScript
								</span>
							</div>
							<div>
								<h4>Database & Cloud</h4>
								<span className="badge bg-info text-white me-1">
									PostgreSQL
								</span>
								<span className="badge bg-info text-white me-1">MongoDB</span>
								<span className="badge bg-info text-white me-1">SQL</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
