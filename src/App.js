import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handleClick = async()=>{
    const result = await axios.get('https://accounts.google.com/o/oauth2/v2/auth?client_id=411042435356-c2le940frh5evk4k7kpikarb89iq98fc.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3001&response_type=code&scope=openid%20profile%20email&access_type=offline&state=standard_oauth&prompt=consent')
    console.log(result)

  }
  return (
    <div className=" bg-black p-2 w-max" onClick={handleClick}>
      <span className='text-white'>google login</span>
    </div>
  );
}

export default App;
