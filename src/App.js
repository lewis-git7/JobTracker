import './App.css';
import Header from './components/Header';
import NewJob from './components/NewJob';
import JobList from './components/JobList';

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex bg-slate-800 h-screen p-8">
        <div className="flex justify-center w-2/3 mx-8">
          <JobList />
        </div>
        <div className="flex justify-center w-1/3 mx-8 h-2/3">
          <NewJob />
        </div>
      </div>
    </div>
  );
}

export default App;
