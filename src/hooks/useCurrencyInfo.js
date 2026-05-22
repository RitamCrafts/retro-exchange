import { useEffect,useState } from "react";

function useCurrencyinfo(currency,refreshTrigger=false){
    const [data,setData]=useState({});
    useEffect(()=>{
            let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
            fetch(url)
            .then((res)=>(res.json()))
            .then((res)=>setData(res[currency]))
            .catch((error)=>{
                console.log(`API Error: ${error}`);
                setData(-1);
            });
            console.log("API fetch success!");
        },[currency,refreshTrigger]);
    
    return data;
}
export default useCurrencyinfo;