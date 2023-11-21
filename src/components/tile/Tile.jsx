const Tile = ({ name, description }) => {
	return (
		<div className="flex flex-col gap-2 py-4">
			<p className="text-center mb-2 text-primary upper">{name}</p>
			<div className=" flex flex-col sm:flex-row md:flex-col lg:flex-row justify-evenly items-center">
				{Object.values(description).map((value, index) => {
					// console.log("value", value);
					return (
						<p key={index} className="px-2 inline-block">
							{value}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default Tile;
