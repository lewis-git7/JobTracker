import USD_LOGO from '../assets/logo.png';

export default function Header(){
  return(
    <header className="flex items-center p-8">
      <h1 className="mr-auto text-3xl">GE | Job Tracker</h1>
      <img src={USD_LOGO}></img>
    </header>
  )
}