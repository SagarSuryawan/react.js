function Pokemon( {name,image} ){

    return (
        <>
        <div>{name}</div>
        <div>
            <img src={image} alt="" />
        </div>
        </>
    )

}

export default Pokemon