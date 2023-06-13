import { useEffect } from "react"

const UseTitle =title=>{
    useEffect(()=>{
      document.title=`mil club-${title}`
    },[title])
}

export default UseTitle