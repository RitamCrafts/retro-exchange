import React from 'react'
import { useId } from 'react';
import { fullCurrency } from '../currencyData';
import Select from 'react-select';

function MainBox({className,fromTrue,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false
  }) {
  const options = currencyOptions.map((currency) => ({
    value: currency,
    label: (
      currency +
      (fullCurrency[currency] ? " - " + fullCurrency[currency] : "")
    ).toUpperCase(),
  }));  
  const selectedOption = options.find(
    (o) => o.value === selectCurrency
  );
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
        {/*<select 
          className="w-full bg-white border-3 border-slate-800 px-3 py-2 mb-3 text-lg font-black text-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-400 cursor-pointer shadow-md"
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
            {optionMap()}     
        </select>*/}
        
        
        <Select
          options={options}
          className="mb-3"
          value={selectedOption}
          onChange={(opt) => onCurrencyChange?.(opt.value)}
          styles={{
            control: (base, state) => ({
              display:'flex',
              flexDirection:'row',
              backgroundColor: "white",
              border: "3px solid #1f2937",
              borderRadius: 0,
              padding: "2px",
              fontWeight: 800,
              boxShadow: state.isFocused
                ? "0 0 0 4px #2dd4bf"
                : "none",
              transition: "all 0.15s ease",
            }),

            menu: (base) => ({
              ...base,
              zIndex: 9999,
            }),

            option: (base, state) => ({
              ...base,
              fontWeight: 800,
              backgroundColor: state.isFocused
                ? "#99f6e4"
                : "white",
              color: "#0f172a",
              cursor: "pointer",
            }),
          }}
        />
        
          


        <input 
          id={amountinputId}
          type='number' 
          readOnly={amountDisable}
          value={amount} 
          min={0}
          onChange={(e)=>onAmountChange && 
            onAmountChange(Number(e.target.value))
          } 
          className="w-full cursor-text bg-white border-3 border-slate-800 px-4 py-3 text-3xl font-black text-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-400 shadow-md"/>
    </div>
  )
}

export default MainBox
