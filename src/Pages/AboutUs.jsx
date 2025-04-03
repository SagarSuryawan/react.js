import HomeLayout from "../Layouts/HomeLayout";

import imageThree from '../assets/Images/aboutPage/image-three.webp'
import imageTwo from '../assets/Images/aboutPage/image-two.webp'
import imageFour from '../assets/Images/aboutPage/image-four.jpg'
import imageFive from '../assets/Images/aboutPage/image-five.jpg'
import imageOne from '../assets/Images/aboutPage/image-one.webp'
import CurousalSlide from "../Components/CurousalSlide";


function AboutUs() {

    const celebrities = [
        {
            title:"Sagar Suryawanshi_1",
            description:"Education is the most poerful tool that can change the world",
            image:imageOne,
            slideNum :1

        },
        {
            title:"Sagar Suryawanshi_2",
            description:"Education is the most poerful tool that can change the world",
            image:imageTwo,
            slideNum :2

        },
        {
            title:"Sagar Suryawanshi_3",
            description:"Education is the most poerful tool that can change the world",
            image:imageFour,
            slideNum :3

        },
        {
            title:"Sagar Suryawanshi_4",
            description:"Education is the most poerful tool that can change the world",
            image:imageFive,
            slideNum :4

        }
    
    
    ]

    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">

                <div className="flex items-center gap-5 mx-10">

                    <section className="w-1/2 space -y-10 ">

                    <h1 className="text-5xl text-yellow-500 font-semibold">Affordable amd quality education </h1>

                    <p className="text-xl text-gray-200">Our goal is ti provide the affordable and quality education to the world.We are provideing the platfrom future aspiring teacher and students to share theirt skills creativity and kniwledge to each other to empoer and contribute inthe growth and wellness of mankind </p>

                    </section>


                    <div className="w-1/2 ">

                    <img id="test1" style={{
                        filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                    }} className="drop-shadow-2xl h-100 w-150 rounded-2xl" src={imageThree} alt="about" />

                    </div>
                </div>
         </div>
                {/* Curousal */}
                <div className="flex justify-center">
         <div className="carousel w-1/3  m-auto my-30">  
                    {celebrities && celebrities.map(celebrity=> 
                        (<CurousalSlide {...celebrity}
                             key = {celebrity.slideNum} 
                             totalSlides={celebrities.length} />))}
            </div>
            </div>

        
</HomeLayout>
    )
}

export default AboutUs;