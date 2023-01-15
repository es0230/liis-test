const QueryForm = (): JSX.Element => {
	return (
		<form action="" className="query-form content-item">
			<div className="query-form__inputs-container">
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor="location" className="query-form__label">Локация</label>
					<input type="text" className="query-form__input input" name="location" />
				</div>
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor="checkIn" className="query-form__label">Дата заселения</label>
					<input type="text" className="query-form__input input" name="checkIn" />
				</div>
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor="duration" className="query-form__label">Количество дней</label>
					<input type="text" className="query-form__input input" name="duration" />
				</div>
			</div>
			<button className="query-form__submit submit-button clickable">Найти</button>
		</form>
	);
};

export default QueryForm;
