const Contact = () => {
	return (
		<>
			<section id="contact" className="contact section light-background">
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="container section-title" data-aos="fade-up">
						<h2>Contact Me</h2>
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
							Have a project in mind or just want to say hello? Feel free to
							reach out. I'm always open to discussing new opportunities, tech
							ideas, or collaborations.
						</p>
					</div>
					<div className="row g-5">
						<div className="col-lg-6">
							<div className="content" data-aos="fade-up" data-aos-delay={200}>
								<div className="section-category mb-3">Let's Connect</div>
								<h2 className="display-5 mb-4">I'd love to hear from you</h2>
								<p className="lead mb-4">
									Whether you're looking to build a web app, need backend
									support, or want to collaborate on a tech project, I'm just a
									message away. Let's build something great together!
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="contact-form card"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="card-body p-4 p-lg-5">
									<form action="" method="" className="">
										<div className="row gy-4">
											<div className="col-12">
												<input
													type="text"
													name="name"
													className="form-control"
													placeholder="Your Name"
													required
												/>
											</div>
											<div className="col-12">
												<input
													type="email"
													className="form-control"
													name="email"
													placeholder="Your Email"
													required
												/>
											</div>
											<div className="col-12">
												<input
													type="text"
													className="form-control"
													name="subject"
													placeholder="Subject"
												/>
											</div>
											<div className="col-12">
												<textarea
													className="form-control"
													name="message"
													rows={6}
													placeholder="Message"
													required
												/>
											</div>
											<div className="col-12 text-center">
												<button type="submit" className="btn btn-submit w-100">
													Send Message
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
