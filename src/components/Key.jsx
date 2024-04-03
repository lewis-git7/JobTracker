import { useDispatch } from "react-redux";
import { jobsActions } from "../store/jobs-slice";
import { useState } from "react";

export default function Key(){

  const date = new Date().toLocaleDateString();
  const dispatch = useDispatch();
  const [activeOutstandingStyles, setActiveOutstandingStyles] = useState(false);
  const [activeCompleteStyles, setActiveCompleteStyles] = useState(false);

  const outstandingStyles = activeOutstandingStyles ? "w-1/6 bg-pink-800 rounded-md p-2 my-2 font-semibold text-gray-50 mx-4" : "w-1/6 bg-white rounded-md p-2 my-2 font-semibold text-black border mx-4"
  const completeStyles = activeCompleteStyles ? "w-1/6 bg-teal-700 rounded-md p-2 my-2 font-semibold text-gray-50 mx-4" : "w-1/6 bg-white rounded-md p-2 my-2 font-semibold text-black border mx-4"

  function filterOutstandingJobs(){
    if(activeOutstandingStyles === true){
      setActiveOutstandingStyles(false)
    }else{
      setActiveOutstandingStyles(true)
      setActiveCompleteStyles(false)   
    }
    
    dispatch(jobsActions.filterOutstandingJobs())
  }

  function filterCompleteJobs(){
    if(activeCompleteStyles === true){
      setActiveCompleteStyles(false)
    }else{
      setActiveOutstandingStyles(false)
      setActiveCompleteStyles(true)  
    }
    
  }

  return(
    <div className="w-full border-b flex flex-row items-center justify-left">
      <div className="flex flex-row items-center w-full">
        <p className="px-8">Filter: </p>
        <button onClick={filterOutstandingJobs} className={outstandingStyles}>Outstanding</button>
        <button onClick={filterCompleteJobs} className={completeStyles}>Complete</button>
        <p className="pl-16 font-bold">{date}</p>
      </div>
    </div>
    
  )
}