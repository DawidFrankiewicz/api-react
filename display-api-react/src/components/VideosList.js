import React from 'react';
import {useEffect, useState} from 'react';

export default function VideosList(props) {
	return (
		<div>
			<h1>Videos List</h1>
			<ul>
				{props.videos.map((video) => (
					<li key={video._id}>
						<h3>{video.url}</h3>
						<button onClick={() => props.deleteVideo(video._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}