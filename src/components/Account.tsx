// This function must return a formated currency like this 10928.42 => $10,928.42
const formatCurrency = (amount: number) => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})
}

export function Account({title, amount, amountDescription} : {title: string, amount: number, amountDescription: string}) {
	return <div className="account">
			<div className="accountContentWrapper">
				<h3 className="account__title">{title}</h3>
				<p className="account__amount">{formatCurrency(amount)}</p>
				<p className="account__amountDescription">{amountDescription}</p>
			</div>
			<div className="account__contentWrapper cta">
				<button className="account__transactionButton">View transactions</button>
			</div>
	</div>
}