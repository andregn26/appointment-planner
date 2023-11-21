import Tile from "../tile/Tile";

const TileList = ({ data }) => {
	// console.log(data);
	return (
		<ul>
			{data.map((item, index) => {
				const { name, ...description } = item;
				return (
					<li className="bg-base-300 shadow-md py-2 px-4 rounded-lg" key={index}>
						<Tile name={name} description={description} />
					</li>
				);
			})}
		</ul>
	);
};

export default TileList;
