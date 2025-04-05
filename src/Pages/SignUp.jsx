import {BsPersonCircle} from 'react-icons/bs'
import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'

function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [preveiwImage, setPreveiwImage] = useState("")

    const [signupData, setSignupData] = useState({
        fullName:"",
        email:"",
        password: "",
        avatar:""
    })

    function handelInputUser(e) {
        const {name, value} = e.target;
        setSignupData({
            ...signupData,
            [name]:value
        })
    }

    // handle image input 
    function getImage(e) {
        e.preventDefault();
        // fetch uploaded image
        const uploadedImage = e.target.files[0]
        // only 1 files i.e 0 index 
        if(uploadedImage){
            setSignupData({
                ...setSignupData,
                avatar:uploadedImage
            })

            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load" ,function(){
                console.log(this.result)
                setPreveiwImage(this.result)
            }) 
        }

    }

    function createNewAccount(event) {
        event.preventDefault()
        if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar){
            toast.error("Please fill the all Details")
            return
        }
        // checking name length feild.
        if(signupData.fullName.length < 5 ){ 
            toast.error("Name should be atleast 5 charracter")
        }
        if(!signupData.email.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            toast.error("Invalid Email id")
            return;
        }
        if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
            toast.error("Password should 6-16 character long with atleast number and special character")
            return;
        }

        const formData = new FormData(); 
        formData.append("fullName", signupData.fullName)
        formData.append("email", signupData.email)
        formData.append("password", signupData.password)
        formData.append("avatar", signupData.avatar)


        // dispatch create account action, considering if action goes well then navigate to home page.
        navigate("/")


        setSignupData({
            fullName:"",
            email:"",
            password: "",
            avatar:""
        });
        setPreveiwImage("");

        // making action for create account which is disapatch 

    }


    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh] ">
            <form onSubmit={createNewAccount} noValidate className="flex flex-col justify-center m-auto gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold m-auto">Registration Page</h1>

                    <label htmlFor="image_upload" className=" cursor-pointer">
                        {preveiwImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src = {preveiwImage} />
                        ): (
                            <BsPersonCircle className = "w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input type="file"
                            className='hidden' 
                            name='image_upload'
                            id='image_upload'
                            accept=".jpg, .jpeg, .png, .svg"
                            onChange={getImage}
                    />
                <div className='flex flex-col ga-1 '>
                        <label htmlFor="fullName" className='font-semibold '>Full Name</label>
                        <input 
                        type="text"
                        required
                        name='fullName'
                        id='fullName'
                        placeholder="Enter your Full Name"
                        className='bg-transparent px-2 py-1 border rounded-2xl my-3'
                        value={signupData.fullName}
                        onChange={handelInputUser}
                       
                        />
                </div>

                <div className='flex flex-col ga-1 '>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <input 
                        type="email"
                        required
                        name='email'
                        id='email'
                        placeholder="Enter your email"
                        autoComplete="username"
                        className='bg-transparent px-2 py-1 border rounded-2xl my-3'
                        value={signupData.email}
                        onChange={handelInputUser}
                        />
                </div>

                <div className='flex flex-col ga-1 '>
                <label htmlFor="password" className='font-semibold '>Password</label>
                        <input 
                        type="password"
                        required
                        name='password'
                        id='password'
                        placeholder="Enter your password"
                        className='bg-transparent px-2 py-1 border rounded-2xl my-3'
                        autoComplete="new-password"
                        value={signupData.password}
                        onChange={handelInputUser}
                        />
                </div>
                <button type="submit" className='bg-yellow-600 hover:bg-yellow-500 transition-all rounded-sm ease-in-out duration-300 py-2 font-semibold text-lg cursor-pointer'> 
                   {/* type=submit means  */}
                    Create account
                </button> 
                <p className='text-center'>
                    Already have an account ? 
                    <Link className = " text-accent cursor-pointer" to = "/login">Login</Link>
                </p>
            </form>
            </div>
        </HomeLayout>
    )
}

export default SignUp;