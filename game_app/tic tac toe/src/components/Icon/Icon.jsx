import { FaPen, FaTimes,FaRegCircle } from 'react-icons/fa';
import '../Card/card.css'
    function Icon({name}) {
            if(name === "circle"){
                return <FaRegCircle />
            }
            else if (name === "cross"){
                return <FaTimes />
            }
            else {
                return <FaPen />
            }
    }

export default Icon;