import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Loading from './loading';
import { FaStar } from 'react-icons/fa6';

export default function SingleMovie() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getSingleMovie() {
			setLoading(true);
			const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
				method: 'GET',
				headers: {
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTIxNGI4NzIzNzc3NmNmMzQ5OTM4MWViMTU4Mzc5OCIsIm5iZiI6MTczMjg5NzIxNi41OTEwNDIsInN1YiI6IjY3NDllOTMwNmEzZjVkMDVhN2RjOGE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rei7SUzOd2GaJqg5KuZ09yG-9LIAUDEXFONMAC68TEg',
				},
			});

			const film = await response.json();

			setMovie(film);
			setLoading(false); // End loading
		}

		getSingleMovie();
	}, [id]);

	console.log(movie);
	return (
		<div className="container">
			<div className="bg-white rounded-lg p-5 mt-5">
				{loading ? (
					<Loading />
				) : (
					movie && (
						<div className="grid grid-cols-4 gap-5">
							{/* Image */}
							<img className="rounded-lg" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />

							{/* Title */}
							<div className="col-span-3">
								<div className="flex items-center justify-between">
									{/* Title */}
									<h1 className="font-black">{movie.title}</h1>

									{/* Back To Home */}
									<Link to="/" className="bg-red-600 text-white text-sm rounded px-2 py-1">
										بازگشت به خانه
									</Link>
								</div>

								{/* Tag Line */}
								<p className="text-gray-700 mt-2">{movie.tagline}</p>

								{/* Meta Data */}
								<div className="flex items-center mt-3">
									{/* Stars */}
									<div className="flex items-center">
										{/* Star Icon */}
										<FaStar className="text-yellow-600 text-xl" />

										{/* Rating */}
										<span className="font-bold pr-1.5">امتیاز :</span>
										<span className="pr-1.5">{movie.vote_average}</span>
									</div>
								</div>

								<p className="leading-8 mt-3">{movie.overview}</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
