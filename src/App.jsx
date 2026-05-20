import { useEffect,useState } from 'react'
import './App.css'
import MainBox from './components/MainBox'
import SwapPart from './components/SwapPart'
import useCurrencyinfo from "./hooks/useCurrencyInfo"
import InfoBox from './components/InfoBox'
 

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
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }, [amount, currencyInfo, to])

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
      <>
        <div className="h-screen w-full bg-linear-to-br from-amber-50 via-rose-50 to-teal-50 flex flex-col gap-y-6 items-center justify-center p-4 relative overflow-hidden">
          <div class="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-rose-500 text-white px-6 py-2 shadow-lg border-4 border-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins w-6 h-6" data-fg-d3bl10="0.8:46.6:/src/app/App.tsx:86:13:4455:47:e:Coins::::::Pvs" data-fgid-d3bl10=":r8:"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
            <span class="text-xl sm:text-2xl font-black tracking-tight" data-fg-d3bl11="0.8:46.6:/src/app/App.tsx:87:13:4515:85:e:span:t" data-fgid-d3bl11=":r9:">RETRO EXCHANGE</span>
          </div>
          <div className='flex flex-col items-stretch'>
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

            <InfoBox from={from} to={to}/>
          </div>
        </div>
      </>
  )
}

export default App
