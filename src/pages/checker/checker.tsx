import NavBar from '../../components/navbar/navbar';
import QueryForm from '../../components/query-form/query-form';
import FavoritesSection from '../../components/favorites/favorites-section/favorites-section';
import HotelsSection from '../../components/hotels/hotels-section/hotels-section';


const Checker = (): JSX.Element => {
	return (
		<div className="checker">
			<NavBar />
			<main className="checker__main">
				<div className="checker__content-wrapper">
					<div className="checker__content">
						<QueryForm />
						<FavoritesSection />
					</div>
					<div className="checker__content">
						<HotelsSection />
					</div>
				</div>
			</main>
		</div>
	)
};

export default Checker;
