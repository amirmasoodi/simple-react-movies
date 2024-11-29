import { useState, useEffect } from 'react';
import Box from './box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		async function getMovies() {
			const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
				method: 'GET',
				headers: {
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTIxNGI4NzIzNzc3NmNmMzQ5OTM4MWViMTU4Mzc5OCIsIm5iZiI6MTczMjg5NzIxNi41OTEwNDIsInN1YiI6IjY3NDllOTMwNmEzZjVkMDVhN2RjOGE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rei7SUzOd2GaJqg5KuZ09yG-9LIAUDEXFONMAC68TEg',
				},
			});

			const movies = await response.json();

			setFilms(movies.results);
		}

		getMovies();
	}, []);

	return (
		<main className="container">
			<div className="bg-white rounded-lg p-5 mt-14">
				<h2 className="font-black">فیلم های محبوب</h2>
				<div className="flex items-center space-x-reverse space-x-5 mt-5">
					<Swiper spaceBetween={20} slidesPerView={5} loop={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
						{films.map((film, index) => {
							return (
								<SwiperSlide>
									<Box key={index} data={film} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</main>
	);
}

export default App;
