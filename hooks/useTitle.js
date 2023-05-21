import { useEffect } from "react"

const useTitle = title =>{ 
    useEffect(()=>{
        document.title=`${title} - Marvel Fantasy World


        `
},[title]) 

} 

export default useTitle