import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import PortfolioDetailScreen from "./screens/PortfolioDetailScreen";
import ErrorPage from "./pages/ErrorPage";
import WhatsappButton from "./components/WhatsappButton";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/portfolio/:id" element={<PortfolioDetailScreen />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<WhatsappButton />

			<Footer />
		</>
	);
}

export default App;
