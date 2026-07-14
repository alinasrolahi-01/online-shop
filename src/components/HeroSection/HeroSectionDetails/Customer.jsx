import React from 'react'


const Customer = () => {

    const customers = [
        {color: "#6366f1", name: "ع"},
        {color: "#8b5cf6", name: "م"},
        {color: "#06b6d4", name: "س"},
        {color: "#10b981", name: "ف"},
    ]

    return (
        <div className="absolute top-10 left-4 bg-white rounded-2xl shadow-xl p-3.5 float2 border border-slate-100 min-w-[175px]">
            
            <p className="text-xs font-black text-slate-700 mb-2">
                📦 سفارش‌های امروز
            </p>

            <div className="flex items-center gap-2">

                <div className="flex -space-x-2 space-x-reverse">

                    {
                        customers.map((customer, index) => (
                            <div
                                key={index}
                                style={{backgroundColor: customer.color}}
                                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black"
                            >
                                {customer.name}
                            </div>
                        ))
                    }

                </div>

                <span className="text-xs font-black text-indigo-600">
                    +۵۱۸ نفر
                </span>

            </div>

        </div>
    )
}


export default Customer