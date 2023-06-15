import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

const gifListReducer = (store => store.gifList)

const SearchResult = () => {
    const dispatch = useDispatch();
    const addNewGif = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_GIF', payload:''});


    }

   
    return(
        <div>
            <button onClick={addNewGif}>Add Favorite</button>

        </div>
    )
}
export default SearchResult