import { useState } from "react";
import {  createContext } from "react";



export const Auth=createContext()

function Authprovider({children}){
    const [register,setresiter]=useState([])
    const [registettrue,settrue]=useState(false)
    const [searchdata,setserachdata]=useState('')
    const [prasdata,setparasdata]=useState('')
    const regiture=()=>{
        settrue(true)
    }
    const regiflase=()=>{
        settrue(false)
        register([])
    }
    return(
        <Auth.Provider value={{register,setresiter,regiture,regiflase,registettrue,searchdata,setserachdata,prasdata,setparasdata}}>{children}</Auth.Provider>
    )
}
export default Authprovider