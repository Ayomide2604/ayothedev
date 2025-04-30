const Skill = ({ name, Icon, color }) => {
	return (
		<div
			className="col-md-6 col-lg-3 col-sm-6 col-6"
			data-aos="fade-up"
			data-aos-delay={100}
		>
			<div className="skill-box text-center">
				<div className="icon mb-3">
					<Icon size={40} color={color} />
				</div>
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default Skill;
