// Portfolio Project Images
import portfolio1 from "../assets/img/projects/portfolio/portfolio1.png";
// Thrive Physiotherapy Images
import thrive1 from "../assets/img/projects/thrive/thrive1.png";

//  Taskify Images
import taskify1 from "../assets/img/projects/taskify/taskify1.png";

const projects = [
	{
		id: 1,
		title: "Portfolio Website",
		description: "My Developer Portfolio Project",
		image: portfolio1,
		tech: ["Html", "Css", "Bootstrap", "React"],
		liveUrl: "https://ayothedev.vercel.app/",
		githubUrl: "https://github.com/Ayomide2604/ayothedev",
	},
	{
		id: 2,
		title: "Thrive Home Physiotherapy",
		description: "Thrive Home Physiotherapy Project",
		image: thrive1,
		tech: ["Html", "Css", "Javascript", "Bootstrap"],
		githubUrl: "https://github.com/Ayomide2604/React-Thrive",

		liveUrl: "https://Thrivehomephysio.ng",
	},
	{
		id: 3,
		title: "Taskify",
		description: "Task Scheduling App",
		image: taskify1,
		tech: ["Html", "Css", "React", "Bootstrap", "Django"],
		githubUrl: "https://github.com/Ayomide2604/taskify-backend",

		liveUrl: "https://taskify-frontend-4ay2.vercel.app/",
	},
];
export default projects;
