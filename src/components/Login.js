import React from 'react'
import axios from 'axios'

const Login = () => {

    const handleClick = async()=>{
        const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=411042435356-c2le940frh5evk4k7kpikarb89iq98fc.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback%2Fgoogle&response_type=code&scope=openid%20profile%20email&access_type=offline&state=standard_oauth&prompt=consent'
        // const res = await axios.get('https://accounts.google.com/o/oauth2/v2/auth?client_id=411042435356-c2le940frh5evk4k7kpikarb89iq98fc.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3001&response_type=code&scope=openid%20profile%20email&access_type=offline&state=standard_oauth&prompt=consent')
        window.location.assign(url);
    }

    return (
        <div className=' bg-black p-2 w-[4rem]'>
            <span className='text-white' onClick={handleClick}>Login</span>
        </div>
    )
}

export default Login