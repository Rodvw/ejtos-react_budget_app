import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
	const { currency, dispatch } = useContext(AppContext);

	const handleCurrencyChange = (e) => {
		const newCurrency = e.target.value;

		// Dispatch an action to change the currency in your context
		dispatch({
			type: 'CHG_CURRENCY',
			payload: newCurrency,
		});
	};

	return (
		<div
			style={{
				backgroundColor: '#d1e7de',
				padding: '20px',
				borderRadius: '9px',
				color: 'white',
			}}
		>
			<label htmlFor="currency-dropdown" style={{ marginRight: '10px' }}>
				Currency{' '}
			</label>
			<select
				id="currency-dropdown"
				value={currency}
				onChange={handleCurrencyChange}
				style={{
					backgroundColor: '#d1e7de',
					border: 'none',
					outline: 'none',
					color: 'white',
				}}
			>
				<option style={{ color: '#000' }} value="USD">
					$ Dollar
				</option>
				<option style={{ color: '#000' }} value="GBP">
					£ Pound
				</option>
				<option style={{ color: '#000' }} value="EUR">
					€ Euro
				</option>
				<option style={{ color: '#000' }} value="JPY">
					₹ Rupee
				</option>
			</select>
		</div>
	);
};

export default ChangeCurrency;
