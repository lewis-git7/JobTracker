import { useState } from "react"
import { useDispatch } from "react-redux";
import { jobsActions } from "../store/jobs-slice";
import LOCATIONS from '../locations.json';

export default function NewJob(){

  const dispatch = useDispatch();
  const [invalidInput, setInvalidInput] = useState(false)
  const formStyles = "my-4 border-b p-2 border-black rounded-md bg-gray-50 text-gray-900";
  const selectStyles = "my-4 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"

  const [newJob, setNewJob] = useState({
    'reference': '',
    'location': '',
    'type': '',
    'date': '',
    'complete': 'false'
  })

  function handleInputChange(identifier, value){
    setNewJob((prevValues)=>({
      ...prevValues,
      [identifier]: value
    }))
  }

  function addJob(e){
    e.preventDefault();
    if(newJob.reference === '' || newJob.location === '' || newJob.type === '' || newJob.date === ""){
      setInvalidInput(true)
      return;
    }else{
      setInvalidInput(false)
      dispatch(jobsActions.addJob(newJob))
    }
    setNewJob({
      'reference': '',
      'location': '',
      'type': '',
      'date': '',
      'complete' : 'outstanding'
    })
  }

  return(
    <div className="bg-white w-full rounded-lg p-8">
      <form className="flex flex-col">
        <input onChange={(e)=>handleInputChange('reference', e.target.value)} className={formStyles} placeholder="Reference" value={newJob.reference}></input>
        <select onChange={(e)=>handleInputChange('location', e.target.value)} className={selectStyles} placeholder="Location" value={newJob.location}>
          <option>Location</option>
          {LOCATIONS.map((location)=><option key={location} value={location}>{location}</option>)}
        </select>
        <select onChange={(e)=>handleInputChange('type', e.target.value)} className={selectStyles} placeholder="Type" value={newJob.type}>
          <option>Type</option>
          <option value="Planned Maintenance">Planned Maintenance</option>
          <option value="CorrectiveJob">Corrective Job</option>
        </select>
        <select onChange={(e)=>handleInputChange('complete', e.target.value)} className={selectStyles} placeholder="Status" value={newJob.complete}>
          <option>Status</option>
          <option value="complete">Complete</option>
          <option value="outstanding">Outstanding</option>
        </select> 
        
        <input type="date" onChange={(e)=>handleInputChange('date', e.target.value)} className={formStyles} placeholder="Date" value={newJob.date}></input>
        <button onClick={addJob} className="border-t w-1/3 bg-teal-500 rounded-lg p-2 font-bold text-white mt-auto">Add Job</button>
        {invalidInput && <p className="pt-2 text-sm text-red-600 "><span className="font-bold">Invalid Input!</span></p>}
      </form>
    </div>
    
  )
}