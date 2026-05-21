import React from 'react'
import useCurrencyinfo from '../hooks/useCurrencyInfo'
import { useEffect } from 'react';

function InfoBox({ from, to }) {
    const data = useCurrencyinfo(from);

    return (
        <div className='mt-6 bg-slate-800 text-white font-bold border-4 border-slate-800 shadow-[6px_6px_0px_0px_rgba(251,146,60,1)] p-4'>
            <div className='flex items-center justify-center gap-2 flex-wrap'>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-teal-300"
                >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                </svg>

                <div>
                    1 {from.toUpperCase()} = {" "}
                    {data[to]?.toFixed(4)} {to.toUpperCase()}
                </div>
            </div>
            <div className="text-center mt-2 text-amber-200 text-xs font-bold tracking-wide"> ★ LIVE EXCHANGE RATE ★</div>
        </div>
    )
}

export default InfoBox