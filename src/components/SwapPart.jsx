import React from 'react'

function SwapPart({onClick}) {
  return (
    <div className='flex items-center justify-center bg-linear-to-br from-orange-200 to-rose-200 p-4 border-b-4 border-t-4 md:border-b-0 md:border-t-0 md:border-l-4 md:border-r-4 border-slate-800'>
      <button onClick={()=>onClick && onClick()} className='cursor-pointer bg-linear-to-br from-orange-400 to-rose-500 hover:from-orange-500 hover:to-rose-600 text-white p-4 border-4 border-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-12 transition-all duration-300 active:scale-95'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat2 lucide-repeat-2 w-6 h-6 md:w-7 md:h-7" data-fg-d3bl32="0.8:7.18524:/src/app/App.tsx:130:17:6977:61:e:Repeat2::::::C6OD" data-fgid-d3bl32=":r10:"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
      </button>
    </div>
  )
}

export default SwapPart
