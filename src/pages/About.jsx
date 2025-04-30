import aboutImage from "../assets/img/about.png";

const About = () => {
	return (
		<>
			{/* About Section */}
			<section id="about" className="about section light-background">
				<div className="container section-title" data-aos="fade-up">
					<h2>About</h2>
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
						I am passionate about designing intuitive digital experiences that
						connect users to technology seamlessly. With a strong background in
						web development and UI/UX design, I bring ideas to life with
						creativity and precision.
					</p>
				</div>
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row align-items-center">
						<div
							className="col-lg-6 position-relative"
							data-aos="fade-right"
							data-aos-delay={200}
						>
							<div className="about-image">
								<img
									src={aboutImage}
									alt="About Ayomide Olowu"
									className="img-fluid rounded-4"
								/>
							</div>
						</div>
						<div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
							<div className="about-content">
								<span className="subtitle">About Me</span>
								<h2>Physiotherapist & Web Developer</h2>
								<p className="lead mb-4">
									Hello! I'm Ayomide Olowu, a Physiotherapist and Web Developer
									with over 2 years of experience building user-centered
									websites and applications. I'm intere in creating functional
									websites that drive engagement and growth.
								</p>
								<p className="mb-4">
									Whether it's designing a landing page, developing a full-stack
									web app, or improving existing platforms, I am committed to
									delivering solutions that make a real impact.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
