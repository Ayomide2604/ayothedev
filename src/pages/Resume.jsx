const Resume = () => {
	return (
		<section id="skills" className="skills section">
			<section id="resume" className="resume section">
				<div className="container section-title" data-aos="fade-up">
					<h2>Resume</h2>
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
						Highly motivated web developer & physiotherapist with over two years
						of work experience, strong IT skills, and a passion for optimizing
						patient outcomes through evidence-based practices.
					</p>
				</div>
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row">
						<div className="col-12">
							<div className="resume-wrapper">
								<div className="resume-block" data-aos="fade-up">
									<h2 className="text-center">Work Experience</h2>
									<p className="lead text-center">
										Experience in clinical rotations, patient management, and
										healthcare teamwork across top institutions in Lagos.
									</p>
									<div className="timeline">
										<div
											className="timeline-item"
											data-aos="fade-up"
											data-aos-delay={200}
										>
											<div className="timeline-left">
												<h4 className="company">
													Lagos University Teaching Hospital
												</h4>
												<span className="period">April 2023 – July 2024</span>
											</div>
											<div className="timeline-dot" />
											<div className="timeline-right">
												<h3 className="position"> Physiotherapist</h3>
												<p className="description">
													Diagnosed and managed large inflow of in-patients and
													out-patients, delivered advanced respiratory
													techniques, gave condition-specific presentations, and
													improved patients' functional abilities.
												</p>
											</div>
										</div>
										<div
											className="timeline-item"
											data-aos="fade-up"
											data-aos-delay={300}
										>
											<div className="timeline-left">
												<h4 className="company">
													Lagos University Teaching Hospital
												</h4>
												<span className="period">April 2022 – April 2023</span>
											</div>
											<div className="timeline-dot" />
											<div className="timeline-right">
												<h3 className="position">Intern Physiotherapist</h3>
												<p className="description">
													Completed rotations in Orthopedics, Neuro-Medicine,
													Cardiopulmonary, and Pediatrics; managed SOAPIER
													assessments; led weekend call treatments; organized
													patient strengthening sessions.
												</p>
											</div>
										</div>{" "}
									</div>
								</div>

								<div
									className="resume-block"
									data-aos="fade-up"
									data-aos-delay={100}
								>
									<h2>My Education</h2>
									<p className="lead">
										Strong academic background in Physiotherapy and Information
										Technology from recognized institutions.
									</p>
									<div className="timeline">
										<div
											className="timeline-item"
											data-aos="fade-up"
											data-aos-delay={200}
										>
											<div className="timeline-left">
												<h4 className="company">
													College of Medicine, University of Lagos
												</h4>
												<span className="period">2015 - 2021</span>
											</div>
											<div className="timeline-dot" />
											<div className="timeline-right">
												<h3 className="position">Bachelor of Physiotherapy</h3>
												<p className="description">
													Project: Evaluation of Musculoskeletal Disorders,
													Ergonomic Risk Factors and Quality of Life of
													Secondary School Teachers in Lagos State.
												</p>
											</div>
										</div>

										<div
											className="timeline-item"
											data-aos="fade-up"
											data-aos-delay={300}
										>
											<div className="timeline-left">
												<h4 className="company">British Computer Society</h4>
												<span className="period">2023</span>
											</div>
											<div className="timeline-dot" />
											<div className="timeline-right">
												<h3 className="position">
													Certificate in Information Technology (Level 4){" "}
												</h3>
												<p className="description">
													Courses: Information Systems, Software Development,
													Computer and Network Technology.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Resume;
