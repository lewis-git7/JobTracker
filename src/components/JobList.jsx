import { useSelector } from "react-redux"
import JobItem from "./JobItem"
import Key from "./Key"

export default function JobList(){

  const jobs = useSelector((state)=>state.jobs)

  return(
    <div className="bg-white w-full rounded-lg p-8 overflow-scroll">
      <Key />
     
      <div className="">
        <h2>
          <ul>
            {jobs.map((job)=>{
              return(
                <JobItem key={job.reference} reference={job.reference} location={job.location} type={job.type} date={job.date} complete={job.complete}/>
              )
            })}
          </ul>
        </h2>
      </div>
    </div>
    
  )
}