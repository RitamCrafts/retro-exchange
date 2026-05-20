import { useEffect,useState } from 'react'
import './App.css'
import MainBox from './components/MainBox'
import SwapPart from './components/SwapPart'
import useCurrencyinfo from "./hooks/useCurrencyInfo"
 

function App() {
  const [amount, setAmount] = useState(5);
  const [from, setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo=useCurrencyinfo(from);
  
  const options=Object.keys(currencyInfo);


  const fromBoxClass="bg-linear-to-br from-teal-100 to-teal-50";
  const toBoxClass="bg-linear-to-br from-orange-100 to-rose-50";
  useEffect(() => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3))
  }, [amount, currencyInfo, to])

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
      <>
        <div className="h-screen w-full bg-linear-to-br from-amber-50 via-rose-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="main-container w-full max-w-5xl">
              <div className='bg-white border-4 border-slate-800 shadow-[8px_8px_0px_0px_rgba(109,40,217,1)]'>
                <div className='flex flex-col md:flex-row'>
                  <MainBox
                    className={fromBoxClass}
                    fromTrue={true}
                    currencyOptions={options}
                    selectCurrency={from}
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency) => setFrom(currency)}
                  />

                  <SwapPart onClick={()=>swap()}/>

                  <MainBox
                    className={toBoxClass}
                    fromTrue={false}
                    currencyOptions={options}
                    selectCurrency={to}
                    amount={convertedAmount}
                    amountDisable={true}
                    onCurrencyChange={(currency) => setTo(currency)}
                  />
                
                </div>
              </div>
            </div>
        </div>
      </>
  )
}

export default App
