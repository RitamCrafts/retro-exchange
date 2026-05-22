import React from 'react'
import { useId } from 'react';
import { fullCurrency } from '../currencyData';

function MainBox({className,fromTrue,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions={},
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false
  }) {
  const optionMap = () => {
    
    return currencyOptions.map((currency) => (
        <option value={currency} key={currency}>
          {(currency + (fullCurrency[currency] ? " - " + fullCurrency[currency] : "")).toUpperCase()}
        </option>
      ));
  };
  const amountinputId=useId();  
  const dotColour=fromTrue?"bg-teal-500":"bg-orange-500";
  return (
    <div className={`${className} p-5 min-w-60 max-w-200`}>
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 ${dotColour} rounded-full`}/>
          <div className={`w-2 h-2 ${dotColour} rounded-full`}/>
          <div className={`w-2 h-2 ${dotColour} rounded-full`}/>
          <label htmlFor={amountinputId} className='ml-2 text-slate-700 font-black text-xs tracking-widest'>{fromTrue?"FROM":"TO"}</label>
        </div>
        <select 
          className="w-full bg-white border-3 border-slate-800 px-3 py-2 mb-3 text-lg font-black text-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-400 cursor-pointer shadow-md"
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
            {optionMap()}     
        </select>
        <input 
          id={amountinputId}
          type='number' 
          disabled={amountDisable} 
          value={amount} 
          min={0}
          onChange={(e)=>onAmountChange && 
            onAmountChange(Number(e.target.value))
          } 
          className='w-full cursor-text bg-white border-3 border-slate-800 px-4 py-3 text-3xl font-black text-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-400 shadow-md'/>
    </div>
  )
}

export default MainBox
