import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
	const redirect = useNavigate();

	const onClickHandler = () => {
		const countryName = props.name;
		redirect(countryName);
	};

	return (
		<div
			className="bg-white rounded shadow-md mx-14 mb-10 pc:mb-20 max-w-3xl dark:bg-DBlueDark dark:text-white my-5 hover:cursor-pointer"
			onClick={onClickHandler}>
			<img className="rounded-t w-screen pc:h-56" src={props.flag} alt={`${props.name} flag`} />

			<section className="p-6 pb-8 rounded">
				<h2 className="font-bold pb-3">{props.name}</h2>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Population:</span> {props.population.toLocaleString()}
				</p>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Region:</span> {props.region}
				</p>
				<p className="text-sm leading-relaxed">
					<span className="font-semibold">Capita:</span> {props.capital}
				</p>
			</section>
		</div>
	);
};

export default CountryCard;
