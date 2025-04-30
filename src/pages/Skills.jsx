import Skill from "../components/Skill";
import skills from './../data/skills';

const Skills = () => {
	return (
		<>
			{/* Skills Section */}
			<section id="skills" className="skills section">
				<div className="container" data-aos="fade-up" data-aos-delay={100}>
					<div className="row g-4 skills-animation">
						{skills.map((skill) => (
							<Skill
								key={skill.id}
								name={skill.name}
								Icon={skill.Icon}
								color={skill.color}
							/>
						))}
					</div>
				</div>
			</section>
			{/* /Skills Section */}
		</>
	);
};

export default Skills;
