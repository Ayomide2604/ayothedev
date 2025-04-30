import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container">
				<div className="copyright text-center">
					<p>
						© <span>Copyright</span>
						<strong className="px-1 sitename">EasyFolio</strong>
						<span>All Rights Reserved</span>
					</p>
				</div>
				<div className="social-links d-flex justify-content-center">
					<a href="">
						<FaWhatsapp />
					</a>

					<a href="">
						<FaLinkedin />
					</a>
					<a href="">
						<FaGithub />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
