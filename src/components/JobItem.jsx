import { jobsActions } from "../store/jobs-slice"
import { useDispatch } from "react-redux"

export default function JobItem({reference, location, type, date, complete}){

  const dispatch = useDispatch();
  const completeStyles = "p-2 bg-teal-700 my-6 rounded-lg"
  const incompleteStyles = "p-2 bg-pink-800 my-6 rounded"
  function markJobComplete(){
    dispatch(jobsActions.markJobComplete(reference))
    
  }

  

  return(
    <div className={complete === 'complete' ? completeStyles : incompleteStyles}>
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold p-4 text-black">{reference}</h2>
        <button onClick={markJobComplete} className="rounded-lg h-6 w-6 m-2 bg-white font-bold">{complete === 'complete' ? 'x' : null}</button>
      </div>
      
      <div className="flex flex-row justify-between items-end p-4">
        <div className="text-slate-200">
          <p>Location: {location}</p>
          <p>Type: {type}</p>
        </div>
        <div className="text-slate-200">
          {date}
        </div>
      </div>
      
      
      

    </div>
  )
}