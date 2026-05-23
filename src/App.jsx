import { useEffect,useState } from 'react'
import MainBox from './components/MainBox'
import SwapPart from './components/SwapPart'
import useCurrencyinfo from "./hooks/useCurrencyInfo"
import InfoBox from './components/InfoBox'
 

function App() {
  const [amount, setAmount] = useState("5");
  const [from, setFrom]=useState("usd");
  const [to, setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [refreshTrigger,setRefreshTrigger]=useState(false);
  const currencyInfo=useCurrencyinfo(from,refreshTrigger);
  if(currencyInfo===-1){
    alert(":( Failed to fetch currency data. Try reloading the page.");
  }
  
  const options=Object.keys(currencyInfo || ["inr","usd"]);


  const fromBoxClass="bg-linear-to-br from-teal-100 to-teal-50";
  const toBoxClass="bg-linear-to-br from-orange-100 to-rose-50";
  useEffect(() => {
    setConvertedAmount((Number(amount) * currencyInfo[to]).toFixed(2))
  }, [amount, currencyInfo, to])

  const swap=()=>{
    setAmount(convertedAmount);
    setFrom(to);
    setTo(from);
  }

  const refresh=()=>{
    setRefreshTrigger((prev)=>(!prev))
  }

  return (
      <>
        <div className="h-screen w-full bg-linear-to-br from-amber-50 via-rose-50 to-teal-50 flex flex-col gap-y-6 items-center justify-center p-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-rose-500 text-white px-6 py-2 shadow-lg border-4 border-slate-800 z-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins w-6 h-6" data-fg-d3bl10="0.8:46.6:/src/app/App.tsx:86:13:4455:47:e:Coins::::::Pvs" data-fgid-d3bl10=":r8:"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
            <span className="text-xl sm:text-2xl font-black tracking-tight">RETRO EXCHANGE</span>
          </div>
          <div className='flex flex-col items-stretch z-100'>
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

            <InfoBox from={from} to={to} refresh={refresh} data={currencyInfo}/>
          </div>


          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

            {/* Top Circle */}
            <div className="absolute top-16 right-16 w-36 h-36 border-[6px] border-orange-100 rounded-full" />

            {/* Bottom Left Rhombus */}
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-teal-100 rotate-45" />

          </div>
        </div>
      </>
  )
}

export default App
