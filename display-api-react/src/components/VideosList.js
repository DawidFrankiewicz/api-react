import React from 'react';

export default function VideosList(props) {
	return (
		<div className="grow p-9 rounded bg-teal-900">
			<h2 className="text-center mb-3 text-2xl font-bold">Lista filmów</h2>
			<ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
				{props.videos.map((video) => (
					<li key={video._id} className='p-3 bg-gray-600 mb-2'>
						<h3>{video.title ? video.title : video.url}</h3>
						<div className='flex gap-3'>
							<button className='bg-blue-300 rounded-sm text-gray-800' onClick={() => props.select(video._id)}>Wybierz</button>
							<button className='bg-red-500 rounded-sm' onClick={() => props.delete(video._id)}>Usuń</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}