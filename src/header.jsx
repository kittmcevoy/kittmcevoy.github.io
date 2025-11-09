import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="flex flex-row px-1 justify-between items-center h-20 w-screen bg-dark-blue">
        <Link to="/">
          <h1 className="text-gold text-2xl w-max px-4"> Kitt McEvoy </h1>
        </Link>
        <div className="flex flex-row justify-end items-center p-1 w-full">
          <Link to="/projects">
            <button className="text-gold text-2xl hover:text-white px-4 border-b-2 border-transparent hover:border-gold"> Projects </button>
          </Link>
          <Link to="/experience">
            <button className="text-gold text-2xl hover:text-white px-4 border-b-2 border-transparent hover:border-gold"> Experience </button>
          </Link>
          <Link to="/about_me">
            <button className="text-gold text-2xl hover:text-white px-4 border-b-2 border-transparent hover:border-gold"> About Me </button>
          </Link>
        
        </div>
      </div>
    );
  }
  
  export default Header;
  