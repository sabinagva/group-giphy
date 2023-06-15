import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";


const SearchResult = () => {
const gifListReducer = useSelector (store => store.gifList)

    const dispatch = useDispatch();
    const addNewGif = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_GIF', payload:''});
    }

    return(
        <div> 
            {gifListReducer.map ((gif,i) => (
                <div key={i}>
                <img src={gif.images.original.url}></img>
                <button onClick={addNewGif}>Add Favorite</button>
                </div>
            ))}       
        </div>
    )
}
export default SearchResult