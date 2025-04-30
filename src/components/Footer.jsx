import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container">
				<div className="copyright text-center">
					<p>
						© <span>Copyright</span>
						<strong className="px-1 sitename">AyotheDev</strong>
						<span>All Rights Reserved</span>
					</p>
				</div>
				<div className="social-links d-flex justify-content-center">
					<a href="https://wa.me/+2348126660484" target="_blank">
						<FaWhatsapp color="#25d366" size={25} />
					</a>

					<a href="https://www.linkedin.com/in/ayomide-olowu/ " target="_blank">
						<FaLinkedin color="#0a66c2" size={25} />
					</a>
					<a href="https://github.com/Ayomide2604	" target="_blank">
						<FaGithub size={25} color="black" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
