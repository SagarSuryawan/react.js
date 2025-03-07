import { useEffect } from "react"

function ChilduseEffect({useEffectCount}) {
    useEffect(() => {
        console.log(`count changes to:${useEffectCount}`)
    },[useEffectCount])

    return <h6>example of useEffect to see changes on {useEffectCount}</h6>
}

export default ChilduseEffect