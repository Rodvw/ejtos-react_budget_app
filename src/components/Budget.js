import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, expenses, dispatch } = useContext(AppContext);
	const { currency, getCurrencySymbol } = useContext(AppContext);
	const [inputValue, setInputValue] = useState(budget);

	useEffect(() => {
		setInputValue(budget);
	}, [budget]);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const setNewBudget = (newValue) => {
		if (newValue < totalExpenses) {
			alert(
				'You cannot reduce the budget value lower than spending  £' +
					totalExpenses
			);
			setInputValue(budget);
			return;
		}
		// Despachar la acción para actualizar el presupuesto en el contexto global
		dispatch({ type: 'SET_BUDGET', payload: newValue });
	};

	const handleInputChange = (event) => {
		const newValue = parseInt(event.target.value, 10);
		setNewBudget(newValue); // Esto actualizará inmediatamente si el valor es válido.
		setInputValue(event.target.value);
	};

	const handleBudgetChange = (event) => {
		if (event.key === 'Enter') {
			const newValue = parseInt(inputValue, 10);
			setNewBudget(newValue);
		}
	};

	return (
		<div
			className="alert alert-secondary"
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<span style={{ marginRight: '1rem' }}>Budget:</span>
			<div
				className="input-group"
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<div className="input-group-prepend">
					<span className="input-group-text">
						{getCurrencySymbol(currency)}
					</span>
				</div>
				<input
					type="number"
					value={inputValue}
					onChange={handleInputChange}
					onKeyPress={handleBudgetChange}
					step="10"
					style={{ width: '80px', marginLeft: '0.5rem' }}
				/>
			</div>
		</div>
	);
};

export default Budget;
