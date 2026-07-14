import React from 'react'


const SendFreeInfo = () => {
    return (
        <div 
            className="absolute bottom-10 left-6 bg-white rounded-2xl shadow-xl p-3.5 float border border-slate-100"
            style={{ animationDelay: "0.5s" }}
        >
            <div className="flex items-center gap-2.5">

                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">
                    ✅
                </div>

                <div>
                    <p className="text-xs font-black text-slate-800">
                        ارسال رایگان
                    </p>

                    <p className="text-[10px] text-slate-400">
                        خرید بالای ۵۰۰ هزار
                    </p>
                </div>

            </div>
        </div>
    )
}


export default SendFreeInfo