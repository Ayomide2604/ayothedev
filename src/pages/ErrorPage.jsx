import { useNavigate } from "react-router-dom";
import errorPage from "../assets/img/error-page.png";
const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div
			className="container mb-3 d-grid  justify-content-center align-items-center p-3"
			style={{ minHeight: "75vh", backgroundColor: "#f3f3f3" }}
		>
			<div className=" d-grid justify-content-center align-items-center">
				<div className=" d-grid justify-content-center">
					<img src={errorPage} alt="" />
				</div>
				<span
					className="text-center text-muted"
					style={{
						fontSize: "130px",
						fontFamily: "cursive",
						fontWeight: "bold",
					}}
				>
					404
				</span>
				<span
					className="text-center"
					style={{
						fontFamily: "cursive",
						fontWeight: "bold",
					}}
				>
					The page you are looking for does not exist
				</span>
				<div className="d-flex gap-3 justify-content-center my-3">
					<button
						onClick={() => navigate(-1)}
						className="btn btn-outline-secondary  btn-lg"
					>
						Go Back
					</button>
					<button
						onClick={() => navigate("/")}
						className="btn btn-secondary btn-lg"
					>
						Go Home
					</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
