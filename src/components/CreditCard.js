
import simSrc from '../images/sim.png'
import { useState } from 'react'

export default function CreditCard(props) {

	const [ hue, setHue ] = useState(Math.random() * 360)
	const [ preset, setPreset ] = useState(Math.ceil(Math.random() * 7))
	const [ card, setCard ] = useState(props.cardType)

	return (
		<div 
			className={`credit-card preset${preset} ${props.classes}`} 
			style={{'--hue': `${hue}deg`}}
			onClick={props.click}>
			<div className='credit-card_top'>
				<img src={simSrc} className='credit-card_top--sim' />
				{card === 'visa' && <i className="icofont-visa"></i>}
				{card === 'amex' && <i className="icofont-american-express"></i>}
				{card === 'master' && <i className="icofont-mastercard"></i>}
			</div>
			<p className='credit-card_number'>{props.cardNumber}</p>
			<div className='credit-card_info'>
				<div className='credit-card_info--name'>
					<span className='label'>Card Holder Name</span>
					<span className='holder'>{props.holder}</span>
				</div>
				<div className='credit-card_info--date'>
					<span className='label'>Expiry Date</span>
					<span className='date'>{props.expDate}</span>
				</div>
			</div>
		</div>
	)
}