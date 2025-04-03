import {FiMenu}  from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import Footer from '../Components/Footer'
import {useDispatch, useSelector}  from 'react-redux'

function HomeLayout( {children} ) {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    // used for navigating between pages without relying on <Link> or <Redirect>. You can pass data while navigating

    const isLoggedIn = useSelector((state) => state ?.auth ?.isLoggedIn) 
    const role = useSelector((state) => state?. auth?.role)
    //If state.auth does not exist, it returns undefined instead of crashing.
    // if state not null then return auth and auth not null then isLoggedIn return


    function ChangeWidth () {
        // This function tries to set the width of the sidebar (.drawer-side) to 0.

        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 'auto'
    }

    function hideDrawer() {
        // This function finds the sidebar's checkbox input (.drawer-toggle) and unchecks it, closing the sidebar.

        const element = document.getElementsByClassName("drawer-toggle")
        element[0].checked = false;

        
        const drawerSide = document.getElementsByClassName('drawer-side')
        drawerSide[0].style.width = 'auto'
        
    }

    async function handelLogout(e) {
        e.preventDefault()

        // const res = await dispatch(logout())
        // logout get from auth slice

        // if(res?.payload?.success)
            navigate("/")
    }

    return(
        <div className="min-h-[100vh]  ">

            <div className="drawer absolute left-0 z-50 w-fit ">
                <input type="checkbox" id="my-drawer" className="drawer-toggle"  />

                <div className="drawer-content">

                    <label htmlFor="my-drawer" className="cursor-pointer relative bg-blue-800" > 
                        <FiMenu
                        onClick={ChangeWidth }
                        size={"32px"}
                        className='font-bold text-white m-4'
                        />
                    </label>
                </div>
                <div className="drawer-side w-0 ">
                    <label htmlFor="my-drawer" className='drawer-overlay'></label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={"24px"} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        {isLoggedIn && role === "ADMIN" && (
                            <li>
                                 <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/courses">All Courses</Link>
                            
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                            
                        </li>
                        <li className='mb-12'>
                            <Link to="/about">About Us</Link>
                            
                        </li>
                        {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                            <div className='w-full flex items-center justify-center gap-2'>
                                <button className='border border-yellow-500  hover:bg-yellow-600 btn-primary px-4 py-1 font-semibold rounded-md w-full transition-all ease-in-out duration-300'>
                                    <Link to= "/Login">Login</Link>
                                </button>

                                <button className='border border-yellow-500 bg-yellow-500   btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link to= "/signup">Signup</Link>
                                </button>
                            </div>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                            <div className='w-full flex items-center justify-center gap-2'>
                                <button className='border border-yellow-500  hover:bg-yellow-600 btn-primary px-4 py-1 font-semibold rounded-md w-full transition-all ease-in-out duration-300'>
                                    <Link to= "/user/profile">Profile</Link>
                                </button>

                                <button className='border border-yellow-500 bg-yellow-500   btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                    <Link onClick={handelLogout}>Logout</Link>
                                </button>
                            </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        { children }

        <Footer/>
        </div>
    )

}

export default HomeLayout