import React from 'react';

export default function VideosList(props) {
	return (
		<div>
			<h1>Lista filmów</h1>
			<ul>
				{props.videos.map((video) => (
					<li key={video._id} className='p-3 bg-gray-600 mb-2'>
						<h3>{video.url}</h3>
						<div className='flex gap-3'>
							<button className='bg-blue-300 rounded-sm text-gray-800' onClick={() => props.select(video._id)}>Wybierz</button>
							<button className='bg-red-500 rounded-sm' onClick={() => props.delete(video._id)}>X</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}