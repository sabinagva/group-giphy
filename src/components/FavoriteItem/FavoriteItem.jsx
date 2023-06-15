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
		dispatch = { type: "PUT_GIF", payload: {favId: item.id, catId: category.id}
	};

	return (
		<div key={item.id}>
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
			<button disabled={category.id === 0} onClick={confirmCategory}>Confirm</button>
		</div>
	);
}

}
export default FavoriteItem;
