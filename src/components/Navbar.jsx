import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		document.body.classList.toggle("mobile-nav-active");
		setMenuOpen((prev) => !prev);
	};

	return (
		<header id="header" className="header d-flex align-items-center sticky-top">
			<div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
				<Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
					{/* Uncomment the line below if you also wish to use an image logo  */}
					<div className="d-none d-md-block">
						<img src={Logo} alt="site-logo" />
					</div>
					<h1 className="sitename">AyotheDev</h1>
				</Link>

				<nav id="navmenu " className="navmenu navmenu-active ">
					<ul onClick={toggleMobileMenu}>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#portfolio">Projects</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>

						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<div
						onClick={toggleMobileMenu}
						className="mobile-nav-toggle d-xl-none"
					>
						{menuOpen ? <MdClose /> : <MdMenu />}
					</div>
				</nav>

				<div className="header-social-links  ">
					<a href="https://www.linkedin.com/in/ayomide-olowu/" target="_blank">
						<FaLinkedin color="#0a66c2" size={25} />
					</a>
					<a href="https://github.com/Ayomide2604" target="_blank">
						<FaGithub size={25} color="black" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
