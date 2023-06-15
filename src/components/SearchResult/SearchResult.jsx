import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";


const SearchResult = () => {
const gifListReducer = useSelector (store => store.gifList)

    const dispatch = useDispatch();
    const addNewGif = (url, event) => {
        event.preventDefault()
        dispatch({type:'ADD_GIF', payload: url});


    }

    return(
        <div> 
            {gifListReducer.map ((gif,i) => (
                <div key={i} >
                <img src={gif.images.original.url}></img>
                
                <button onClick={() => dispatch({type:'ADD_GIF', payload: gif.images.original.url})}>Add Favorite</button>
                </div>
            ))}       
        </div>
    )
}
export default SearchResult