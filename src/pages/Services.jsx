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
				<p>
					Comprehensive development services to bring your ideas to life with
					cutting-edge technology
				</p>
			</div>

			<div className="container" data-aos="fade-up" data-aos-delay="100">
				{/* Projects Completed and Years Experience Section */}
			

				<div className="row align-items-center">
					<div className="col-12">
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
