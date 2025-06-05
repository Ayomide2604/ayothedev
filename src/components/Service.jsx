const Service = ({ title, description, Icon }) => {
	return (
		<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
			<div className="service-item d-grid gap-2">
				<Icon size={30} style={{ color: "#EB8951" }} />
				<h3>
					<a>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Service;
