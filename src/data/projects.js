// Portfolio Project Images
import portfolio1 from "../assets/img/projects/portfolio/portfolio1.png";
import portfolio2 from "../assets/img/projects/portfolio/portfolio2.png";
import portfolio3 from "../assets/img/projects/portfolio/portfolio3.png";

// Thrive Physiotherapy Images
import thrive1 from "../assets/img/projects/thrive/thrive1.png";
import thrive2 from "../assets/img/projects/thrive/thrive2.png";
import thrive3 from "../assets/img/projects/thrive/thrive3.png";

//  Taskify Images
import taskify1 from "../assets/img/projects/taskify/taskify1.png";
import taskify2 from "../assets/img/projects/taskify/taskify2.png";
import taskify3 from "../assets/img/projects/taskify/taskify3.png";
import taskify4 from "../assets/img/projects/taskify/taskify4.png";

const projects = [
	{
		id: 1,
		title: "Portfolio Website",
		description: "My Developer Portfolio Project",
		images: [portfolio1, portfolio2, portfolio3],
		tech: ["Html", "Css", "Bootstrap", "React"],
		liveUrl: "https://ayothedev.vercel.app/",
		githubUrl: "https://github.com/Ayomide2604/ayothedev",
	},
	{
		id: 2,
		title: "Thrive Home Physiotherapy",
		description: "Thrive Home Physiotherapy Project",
		images: [thrive1, thrive2, thrive3],
		tech: ["Html", "Css", "Javascript", "Bootstrap"],
		liveUrl: "https://Thrivehomephysio.ng",
	},
	{
		id: 3,
		title: "Taskify",
		description: "Task Scheduling App",
		images: [taskify1, taskify2, taskify3, taskify4],
		tech: ["Html", "Css", "React", "Bootstrap", "Django"],
		liveUrl: "https://taskify-frontend-4ay2.vercel.app/",
	},
];
export default projects;
