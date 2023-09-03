import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	const { currency, getCurrencySymbol } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: -10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{getCurrencySymbol(currency)}
				{props.cost}
			</td>
			<td>
				<button
					onClick={(event) => increaseAllocation(props.name)}
					style={{
						backgroundColor: 'green',
						color: 'white',
						borderRadius: '50%',
						width: '40px',
						height: '40px',
						fontSize: '40px',
						fontWeight: '700',
						border: 'none',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FaPlus />
				</button>
			</td>
			<td>
				<button
					onClick={(event) => decreaseAllocation(props.name)}
					style={{
						backgroundColor: 'red',
						color: 'white',
						borderRadius: '50%',
						width: '40px',
						height: '40px',
						fontSize: '40px',
						fontWeight: '700',
						border: 'none',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FaMinus />
				</button>
			</td>
			<td>
				<TiDelete size="3em" onClick={handleDeleteExpense}></TiDelete>
			</td>
		</tr>
	);
};

export default ExpenseItem;
