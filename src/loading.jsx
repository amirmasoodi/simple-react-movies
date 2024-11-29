export default function Loading() {
	return (
		<div class="pc-loading fixed top-0 right-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-800 bg-opacity-30 inset-0 blur-0 backdrop-blur-md">
			<div class="w-48 flex flex-col justify-center bg-white rounded-xl p-5">
				<svg class="w-16 mx-auto animate-spin" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
					<circle class="stroke-current text-indigo-100 text-opacity-30" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="200, 300"></circle>
					<circle class="stroke-current text-indigo-700" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200">
						<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
						<animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
					</circle>
				</svg>
				<div class="text-center text-indigo-700 tracking-tight font-bold mt-4">لطفاً کمی صبر کنید</div>
			</div>
		</div>
	);
}
