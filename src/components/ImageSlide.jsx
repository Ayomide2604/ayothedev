// components/ImageSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageSlide = ({ images }) => {
	return (
		<div className="w-full max-w-3xl mx-auto my-10">
			<Swiper
				pagination={{ clickable: true }}
				modules={[Pagination]}
				spaceBetween={20}
				slidesPerView={1}
			>
				{images.map((imgSrc, index) => (
					<SwiperSlide
						key={index}
						className="d-flex  justify-content-center align-items-center "
					>
						<img
							src={imgSrc}
							alt={`Slide ${index + 1}`}
							className="w-full rounded-lg shadow-lg object-contain img-fluid"
							style={{
								objectPosition: "center",
								objectFit: "contain",
								maxHeight: "400px",
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ImageSlide;
