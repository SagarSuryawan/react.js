import {FiMenu}  from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'

function HomeLayout( {children} ) {

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

    return(
        <div className="min-h-[90vh]  ">

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
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={"24px"} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/courses">All Courses</Link>
                            
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                            
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        { children }

        <Footer/>
        </div>
    )

}

export default HomeLayout