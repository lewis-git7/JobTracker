import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: [],
  reducers: {
    addJob(state, action){
      const newJob = action.payload;
      state.push(newJob)
    },
    markJobComplete(state, action){
      const jobReference = action.payload;
      state.map((job)=>{
        if(job.reference === jobReference){
          if(job.complete === 'outstanding'){
            return job.complete = 'complete';
          }else{
            return job.complete = 'outstanding';
          }
        }
      })
    }, 
    filterOutstandingJobs(state){
      const completeJobs = state.filter((job)=>job.complete === 'complete');
      const outstandingJobs = state.filter((job)=>job.complete === 'outstanding');
      state.splice(0, state.length)
      state.push(...outstandingJobs, ...completeJobs);
    },
    filterCompleteJobs(state){
      
    }
  }
  
    
})

export const jobsActions = jobsSlice.actions;

export default jobsSlice;