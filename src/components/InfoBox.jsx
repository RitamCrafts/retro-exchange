import React from 'react'

function InfoBox({ from, to, refresh, data}) {

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

                <svg
                    onClick={refresh}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="cursor-pointer w-5 h-5 text-cyan-300 select-none transition-transform duration-300 ease-in-out hover:rotate-180 active:rotate-180 active:scale-90 active:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M22 12l-3 3-3-3" />
                    <path d="M2 12l3-3 3 3" />
                    <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22" />
                    <path d="M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10" />
                    <path d="M5 10V9" />
                    <path d="M19 15v-1" />
                </svg>

            </div>
            <div className="text-center mt-2 text-amber-200 text-xs font-bold tracking-wide"> ★ LIVE EXCHANGE RATE ★</div>
        </div>
    )
}

export default InfoBox