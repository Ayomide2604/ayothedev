import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
	const [chatOpen, setChatOpen] = useState(false);
	const [message, setMessage] = useState("");
	const style = chatOpen ? { display: "block" } : { display: "none" };

	const handleChatToggle = () => {
		setChatOpen((prev) => !prev);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const phone = "+2348126660484";
		const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
		setMessage("");
	};

	return (
		<>
			{/* Whatsapp Floating Button */}

			{chatOpen ? null : (
				<div className="whatsapp-float" id="whatsappFloat">
					<FaWhatsapp onClick={handleChatToggle} />
				</div>
			)}

			{/* Whatsapp Chat Box */}
			<div
				className="whatsapp-chat-box show-chat"
				id="whatsappChatBox"
				style={style}
			>
				<div className="whatsapp-chat-header">
					<FaWhatsapp />
					Chat with us on WhatsApp
					<span
						className="close-btn"
						id="closeChatBox"
						onClick={handleChatToggle}
					>
						&times;
					</span>
				</div>
				<div className="whatsapp-chat-body">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							id="whatsappMessage"
							placeholder="Type your message..."
							value={message}
							onChange={handleMessageChange}
						/>

						<button
							id="sendWhatsappMessage"
							onClick={handleChatToggle}
							disabled={!message}
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default WhatsappButton;
