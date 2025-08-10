import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    return (
        <div className='w-full bg-gray-100 min-h-[90vh] flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-blue-500 rounded-lg w-[25rem] h-[20rem]'>
            <div className='capitalize text-xl pt-10 ml-5 text-white'>Login or SignUp to your account</div>
            <div className='mt-10'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(credentialResponse);
                    console.log("decoded user:", decoded)

                    localStorage.setItem("user", JSON.stringify(decoded));

                    window.location.href = '/';

                }}

                onError={() => {
                    console.log('Login Failed');
                }}
            />
            </div>
            </div>
        </div>
    )
}

export default Login