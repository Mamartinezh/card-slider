
import { useState, useEffect } from 'react'

export default function Slider({Comp, active, change, itemsData = []}) {

	const [ data, setData ] = useState([])
	const [ current, setCurrent ] = useState(0)

	useEffect(() =>{

		setData(itemsData)
		setCurrent(typeof(active) !== undefined ? active : Math.floor(itemsData.length / 2))

	}, [itemsData, active])

	function newCurrent(idx) {
		setCurrent(idx)
		if (change) change(idx)
	}


	return (
		<div className="slider">
			{data.map((props, idx) => (
				<Comp 
					key={idx} 
					classes={`slider-item 
							${idx === current && 'active'}
							${idx === current + 1 && 'next'}
							${idx === current - 1 && 'prev'}
							${idx > current && 'rigth'}
							${idx < current && 'left'}
							`} 
					click={idx === current + 1 || idx === current - 1 ? e => newCurrent(idx) : null}
					{...props} 
				/>
			))}
		</div>
	)

}