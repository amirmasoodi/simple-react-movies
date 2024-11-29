import { Link } from 'react-router';
import toast from 'react-hot-toast';

export default function Box({ data }) {
	return (
		<Link to={`/movies/${data.id}`} onClick={() => toast.error('باموفقیت وارد شدید')}>
			<div className="border rounded-xl p-3">
				<img className="rounded-lg" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt="" />
				<h2 className="text-center font-bold mt-5">{data.title}</h2>
			</div>
		</Link>
	);
}
