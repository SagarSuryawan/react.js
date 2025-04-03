import HomeLayout from "../Layouts/HomeLayout";

import imageThree from '../assets/Images/aboutPage/image-three.webp'
import imageTwo from '../assets/Images/aboutPage/image-two.webp'
import imageFour from '../assets/Images/aboutPage/image-four.jpg'
import imageFive from '../assets/Images/aboutPage/image-five.jpg'
import imageOne from '../assets/Images/aboutPage/image-one.webp'


function AboutUs() {

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

                {/* Curousal */}

        <div className="carousel w-1/3 my-16 m-auto">
                <div id="slide1" className="carousel-item relative w-full flex items-center justify-around">
                    <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img
                        src={imageOne}
                        className="w-40 rounded-full border-2 border-gray-400 "/>
                        <p>Education is the most poerful tool that can change the world</p>
                        <h3>Sagar Suryawanshi</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex items-center justify-around ">
                    <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img
                        src={imageTwo}
                        className="w-40 rounded-full border-2 border-gray-400 " />
                         <p>Education is the most poerful tool that can change the world</p>
                         <h3>Sagar Suryawanshi</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex items-center justify-around ">
                    <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img
                            src={imageFour}
                            className="w-40 rounded-full border-2 border-gray-400 " />
                             <p>Education is the most poerful tool that can change the world</p>
                             <h3>Sagar Suryawanshi</h3>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex items-center justify-around ">
                    <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img
                            src={imageFive}
                            className="w-40 rounded-full border-2 border-gray-400 " />
                             <p>Education is the most poerful tool that can change the world</p>
                             <h3>Sagar Suryawanshi</h3>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                    </div>
                </div>
            </div>

        </div>
        </HomeLayout>
    )
}

export default AboutUs;