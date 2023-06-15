import { useState } from "react";
import { useDispatch } from "react-redux";

function FavoriteItem({ item }) {
	const dispatch = useDispatch();

	const [category, setCategory] = useState({ id: 0 });
	console.log("on load category", category.id);

	const handleCategory = (prop) => {
		setCategory({ ...category, id: prop * 1 });
		console.log("on change category", category.id);
	};

	const confirmCategory = () => {
		dispatch = { type: "ADD_CATEGORY", payload: category.id };
	};

	return (
		<div>
			<img src={item.url} />
			<label>
				Category:
				<select onChange={(e) => handleCategory(e.target.value)}>
					<option value={0}> --Select a category </option>
					<option value={1}> Funny</option>
					<option value={2}> Cohort</option>
					<option value={3}> Cartoon</option>
					<option value={4}> NSFW</option>
					<option value={5}> Meme</option>
				</select>
			</label>
			<button onClick={confirmCategory}>Confirm</button>
		</div>
	);
}

export default FavoriteItem;
