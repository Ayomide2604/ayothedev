import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiEnvelope, BiLogoLinkedin, BiPhone } from "react-icons/bi";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const formData = new FormData(form.current);
		const data = {
			name: `${formData.get("firstName")} ${formData.get("lastName")}`,
			email: formData.get("email"),
			projectType: formData.get("projectType"),
			message: formData.get("message"),
		};

		emailjs
			.send("service_d1jb09a", "template_d1pc929", data, "rVThJft0mEh2z1jPH")
			.then(
				() => {
					alert("Message sent!");
					form.current.reset();
				},
				(error) => {
					alert("Failed to send message");
					console.error(error);
				}
			);
	};
	return (
		<>
			<section id="contact" className="contact section light-background">
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div
						className="container text-center section-title"
						data-aos="fade-up"
					>
						<h2>Let's Work Together</h2>
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
							Ready to bring your project to life? Let's discuss how I can help
							you build something amazing.
						</p>
					</div>
					<div className="row g-5">
						<div className="col-lg-6">
							<div className="content" data-aos="fade-up" data-aos-delay={200}>
								<h2 className="display-5 mb-4">Get in Touch</h2>
								<div className="mb-3">
									I'm always interested in new opportunities and exciting
									projects. Whether you need a full-stack application, API
									development, or technical consultation, I'd love to hear from
									you.
								</div>
								<div className="contact-details mt-4">
									<p className="d-flex align-items-center">
										<BiEnvelope size={20} color="#0F2943" className="me-2" />{" "}
										theolowuayo@gmail.com
									</p>
									<p className="d-flex align-items-center">
										<BiPhone size={20} color="#0F2943" className="me-2" /> +234
										(812) 666-0484
									</p>
									<p className="d-flex align-items-center">
										<BiLogoLinkedin
											size={20}
											color="#0F2943"
											className="me-2"
										/>{" "}
										linkedin.com/in/ayothedev
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="contact-form card"
								data-aos="fade-up"
								data-aos-delay={300}
							>
								<div className="card-body p-4 p-lg-5">
									<form ref={form} onSubmit={sendEmail}>
										<div className="row gy-4">
											<div className="col-md-6">
												<input
													type="text"
													name="firstName"
													className="form-control"
													placeholder="First Name"
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="text"
													name="lastName"
													className="form-control"
													placeholder="Last Name"
													required
												/>
											</div>
											<div className="col-12">
												<input
													type="email"
													className="form-control"
													name="email"
													placeholder="Email"
													required
												/>
											</div>
											<div className="col-12">
												<select
													className="form-select"
													name="projectType"
													required
												>
													<option value="">Select Project Type</option>
													<option value="Full-Stack Web Application">
														Full-Stack Web Application
													</option>
													<option value="API Development">
														API Development
													</option>
													<option value="Frontend Development">
														Frontend Development
													</option>
													<option value="Technical Consultation">
														Technical Consultation
													</option>
												</select>
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
