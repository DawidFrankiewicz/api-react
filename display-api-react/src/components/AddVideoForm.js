import React from 'react';

export default function AddViedoForm(props) {
	return (
		<div className="p-9 rounded bg-slate-800">
            <h1 className="text-center text-2xl mb-2">Dodaj Film</h1>
            <form onSubmit={props.addData} className="basis-80 shrink-0">
                <label>Tytuł filmu
                    <input className='text-gray-800' type="text" name="title" value={props.newData.title} onChange={props.handleInputsChange} />
                </label>
                <label>Url filmu
                    <input className='text-gray-800' type="url" name="url" value={props.newData.url} onChange={props.handleInputsChange} />
                </label>
                <button className='bg-green-500' type='submit'>Dodaj</button>
            </form>
        </div>
	);
}