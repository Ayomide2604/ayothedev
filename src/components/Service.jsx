const Service = ({ title, description, Icon }) => {
	return (
		<div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
			<div className="service-item d-grid gap-2">
				<Icon size={30} />
				<h3>
					<a>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Service;
