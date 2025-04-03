

function CurousalSlide({ image, title, description,slideNum, totalSlides }) {

    return(
        <>
         <div id={`slide${slideNum}`} className="carousel-item relative w-full flex items-center justify-around">
                            <div className=" flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img
                                src={image}
                                className="w-40 rounded-full border-2 border-gray-400 "/>
                                <p className="text-center">{description}</p>
                                <h3 className="text-blue-700" >{title}</h3>
                                <div className="absolute left-5 right-5 top-1/2 flex transform-translate-y-1/2  justify-between">
                                <a href={`#slide${(slideNum == 1 ? totalSlides: (slideNum-1))}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${(slideNum) % totalSlides + 1}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
        </div>
        </>
    )
}

export default CurousalSlide;