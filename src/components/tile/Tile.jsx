const Tile = ({ name, description }) => {
	return (
		<div className="">
			<p>{name}</p>
			{Object.values(description).map((value, index) => {
				// console.log("value", value);
				return (
					<p key={index} className="px-2 inline-block border border-solid border-red-400">
						{value}
					</p>
				);
			})}
		</div>
	);
};

export default Tile;
