import {
	FaCogs,
	FaCode,
	FaDatabase,
	FaShieldAlt,
	FaServer,
	FaGlobe,
	FaBolt,
} from "react-icons/fa";

const services = [
	{
		id: 1,
		title: "Full-Stack Web Development",
		description:
			"End-to-end web application development using modern frameworks and best practices",
		Icon: FaGlobe,
	},
	{
		id: 2,
		title: "API Development & Integration",
		description:
			"RESTful APIs, GraphQL endpoints, and seamless third-party service integrations",
		Icon: FaCode,
	},
	{
		id: 3,
		title: "Database Architecture",
		description:
			"Scalable database design, optimization, and migration strategies",
		Icon: FaDatabase,
	},
	{
		id: 4,
		title: "Performance Optimization",
		description:
			"Application performance tuning, caching strategies, and scalability solutions",
		Icon: FaBolt,
	},
];

export default services;
