import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		document.body.classList.toggle("mobile-nav-active");
		setMenuOpen((prev) => !prev);
	};

	return (
		<header id="header" className="header d-flex align-items-center sticky-top">
			<div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
				<a
					href="index.html"
					className="logo d-flex align-items-center me-auto me-xl-0"
				>
					{/* Uncomment the line below if you also wish to use an image logo  */}
					{/* <img src="" alt=""/>  */}
					<h1 className="sitename">AyotheDev</h1>
				</a>

				<nav id="navmenu " className="navmenu navmenu-active ">
					<ul>
						<li>
							<a href="#hero" className="active">
								Home
							</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#resume">Resume</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li className="dropdown ">
							<a href="#">
								<span>Dropdown</span>
								<i className="bi bi-chevron-down toggle-dropdown"></i>
							</a>
							<ul>
								<li>
									<a href="#">Dropdown 1</a>
								</li>
								<li className="dropdown">
									<a href="#">
										<span>Deep Dropdown</span>
										<i className="bi bi-chevron-down toggle-dropdown"></i>
									</a>
									<ul>
										<li>
											<a href="#">Deep Dropdown 1</a>
										</li>
										<li>
											<a href="#">Deep Dropdown 2</a>
										</li>
										<li>
											<a href="#">Deep Dropdown 3</a>
										</li>
										<li>
											<a href="#">Deep Dropdown 4</a>
										</li>
										<li>
											<a href="#">Deep Dropdown 5</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Dropdown 2</a>
								</li>
								<li>
									<a href="#">Dropdown 3</a>
								</li>
								<li>
									<a href="#">Dropdown 4</a>
								</li>
							</ul>
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

				<div className="header-social-links">
					<a href="#" className="twitter">
						<FaXTwitter />
					</a>

					<a href="#" className="linkedin">
						<FaLinkedin />
					</a>
					<a href="#" className="linkedin">
						<FaGithub />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
