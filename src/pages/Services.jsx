import Service from "../components/Service";
import services from "../data/services";

const Services = () => {
	return (
		<section id="services" className="services section">
			<div className="container section-title" data-aos="fade-up">
				<h2>Services</h2>
				<div className="title-shape">
					<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						></path>
					</svg>
				</div>
			</div>

			<div className="container" data-aos="fade-up" data-aos-delay="100">
				<div className="row align-items-center">
					<div className="col-lg-4 mb-5 mb-lg-0">
						<h2 className="fw-bold mb-4 servies-title">
							Practical Web Development Services for Growing Businesses
						</h2>
						<p className="mb-4">
							Whether you're launching a new project or improving an existing
							one, I help bring ideas to life with modern, scalable web
							technologies like React, Django, and Node.js.
						</p>
					</div>
					<div className="col-lg-8">
						<div className="row g-4">
							{services.map((service) => (
								<Service
									key={service.id}
									title={service.title}
									description={service.description}
									Icon={service.Icon}
								/>
							))}
						</div>

						<div className="mt-4 text-end">
							<a href="#contact" className="btn btn-primary">
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
