const Service = ({ title, description, Icon }) => {
	return (
		<div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
			<div className="service-item">
				<Icon size={40} />
				<h3>
					<a>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Service;
