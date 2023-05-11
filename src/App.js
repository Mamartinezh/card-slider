
import CreditCard from './components/CreditCard'
import Slider from './components/Slider'
import { useEffect, useState } from 'react'

export default function App() {

	const [ cards, setCards ] = useState([])
	const [ active, setActive ] = useState(1)

	useEffect(() => {
		let data = require('./cards_db.json')
		data = [...data[Object.keys(data).at(0)]]
		data = data.map(props => ({
			...props,
			cardNumber: '**** **** **** '.concat(props.cardNumber.slice(-4))
		}))
		setCards(data)
	}, [])

	return (
		<div className="app">
			<Slider Comp={CreditCard} itemsData={cards} active={active} change={setActive} />
			<div className="app-cards">
				{cards.map((card, idx) => (
					<div 
						key={idx} 
						onClick={e => setActive(idx)}
						className={`app-cards_card ${active === idx && 'active'}`}>
						{card.cardType === 'visa' && <i className="icofont-visa"></i>}
						{card.cardType === 'amex' && <i className="icofont-american-express"></i>}
						{card.cardType === 'master' && <i className="icofont-mastercard"></i>}
						<div className='app-cards_card--info'>
							<p>{card.cardNumber}</p>
							<p>{card.holder}</p>
						</div>
						<input 
							type="radio" 
							name='cards' 
							onChange={e => setActive(idx)}
							checked={active === idx ? true : false} />
					</div>
				))}
			</div>
		</div>
	)
}