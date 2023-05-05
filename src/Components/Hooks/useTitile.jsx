import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title =`${title} - Food Fiesta`
    },[title])
} 
export default useTitle;