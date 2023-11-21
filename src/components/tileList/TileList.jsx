import Tile from "../tile/Tile";

const TileList = ({ data }) => {
	// console.log(data);
	return (
		<ul className="mt-12 flex flex-col gap-4 items-center">
			{data.map((item, index) => {
				const { name, ...description } = item;
				return (
					<li className="bg-base-300 shadow-md  px-4 rounded-lg max-w-lg w-full" key={index}>
						<Tile name={name} description={description} />
					</li>
				);
			})}
		</ul>
	);
};

export default TileList;
