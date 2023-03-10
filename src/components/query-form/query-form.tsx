import { useEffect, useState } from 'react';
import { MAX_DURATION, MIN_DURATION, QueryFormFields } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchHotels, setQueryData } from '../../store/app-data/app-data';
import { selectInitialQueryData } from '../../store/app-data/selectors';
import { QueryData } from '../../types/query-data';
import dayjs from 'dayjs';



const QueryForm = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const initialQueryData = useAppSelector(selectInitialQueryData);

	const [queryForm, setQueryForm] = useState<QueryData>(initialQueryData);
	const [needFetchHotels, setNeedFetchHotels] = useState(false);

	useEffect(() => {
		if (needFetchHotels) {
			dispatch(fetchHotels());
			setNeedFetchHotels(false);
		}
	}, [needFetchHotels, dispatch]);

	const handleQueryFormFieldChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = evt.currentTarget;
		if (type === 'number' && (+value < MIN_DURATION || +value > MAX_DURATION)) {
			setQueryForm({ ...queryForm, [name]: Math.max(MIN_DURATION, Math.min(MAX_DURATION, +value)) });
			return;
		}
		setQueryForm({ ...queryForm, [name]: value });
	};

	const handleQuerySending = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();
		dispatch(setQueryData(queryForm));
		setNeedFetchHotels(true);
	};

	return (
		<form action="" className="query-form content-item">
			<div className="query-form__inputs-container">
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor={QueryFormFields.Location} className="query-form__label">Локация</label>
					<input onChange={handleQueryFormFieldChange} value={queryForm.location} type="text" className="query-form__input input" name={QueryFormFields.Location} />
				</div>
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor={QueryFormFields.CheckIn} className="query-form__label">Дата заселения</label>
					<input onChange={handleQueryFormFieldChange} value={queryForm.checkIn} type="date" min={dayjs().format('YYYY-MM-DD')} className="query-form__input input" name={QueryFormFields.CheckIn} />
				</div>
				<div className="query-form__input-wrapper input-wrapper">
					<label htmlFor={QueryFormFields.Duration} className="query-form__label">Количество дней</label>
					<input onChange={handleQueryFormFieldChange} value={queryForm.duration} type="number" className="query-form__input input" name={QueryFormFields.Duration} />
				</div>
			</div>
			<button onClick={handleQuerySending} className="query-form__submit submit-button clickable">Найти</button>
		</form>
	);
};

export default QueryForm;
