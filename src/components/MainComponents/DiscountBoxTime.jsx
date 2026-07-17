import React, { useEffect, useState } from 'react'
import BaseButton from '../common/BaseButton'
import { IoIosArrowRoundForward } from "react-icons/io";


const DiscountBoxTime = () => {

    const [time, setTime] = useState(5 * 3600);


    useEffect(() => {

        const interval = setInterval(() => {

            setTime(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }

                return prev - 1;
            });

        }, 1000);


        return () => clearInterval(interval);

    }, []);



    const hour = Math.floor(time / 3600);

    const min = Math.floor((time % 3600) / 60);

    const sec = time % 60;

    const timeData = [
        { value: hour, title: "ساعت" },
        { value: min, title: "دقیقه" },
        { value: sec, title: "ثانیه" },
    ]


    // console.log(
    //   `${hour}:${min}:${sec}`
    // );


    return (
        <div className=' flex items-center justify-center gap-4 sm:justify-between flex-wrap sm:flex-nowrap wrapper relative overflow-hidden rounded-3xl bg-gradient-to-l from-indigo-700 via-purple-700 to-violet-700 p-8 sm:p-12 pb-[40px] mt-[40px]'>

            <div className='text-center sm:text-right'>
                <div>
                    <span className='inline-flex items-center gap-2 bg-white/20 text-white font-black text-xs px-4 py-1.5 rounded-full mb-4'>

                        <span className='relative flex h-2 w-2'>
                            <span className='pulse-ring absolute inline-flex h-full w-full rounded-full bg-amber-400'></span>
                        </span>
                        حراج لحظه‌ای — موجودی محدود!
                    </span>
                </div>

                <div>
                    <h3 className='text-3xl sm:text-4xl font-black text-white leading-tight'>
                        تا ۶۵٪ تخفیف ویژه
                        <br />
                        <span className="text-amber-300">فقط امروز!</span>
                    </h3>
                </div>
                <p class="text-white/70 text-sm mt-2 max-w-xs">این فرصت فقط تا اتمام موجودی است. همین الان اقدام
                    کنید!</p>

                <BaseButton title={"مشاهده محصولات"} icon={<IoIosArrowRoundForward />} className={" flex-row-reverse mt-5 bg-white cursor-pointer  text-indigo-700 font-black px-7 py-3.5 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-95 shine text-sm inline-flex items-center gap-2"} />
            </div>

            <div className='flex items-center gap-2 sm:gap-3 '>
                {
                    timeData.map((item , index) => (
                        <div className="text-center flex items-center justify-center gap-3">
                            <div>
                                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl flex items-center justify-center">
                                    <span class="text-2xl sm:text-3xl font-black text-white tabular-nums" x-text="String(unit.val).padStart(2,'0')">
                                        {item.value}
                                    </span>
                                </div>
                                <p className="text-white/60 text-[10px] sm:text-xs font-bold mt-1.5" x-text="unit.label">{item.title}</p>
                            </div>
                            {
                                index !== timeData.length - 1 && (
                                    <span className="text-white/40 text-2xl sm:text-3xl font-black -mt-6">
                                        :
                                    </span>
                                )
                            }
                        </div>
                    ))
                }

            </div>

            <span class="absolute -top-6 right-6 text-[180px] font-black text-white/5 leading-none">SALE</span>
                    <span class="absolute -bottom-4 left-6 text-[130px] font-black text-white/5 leading-none">%65</span>

        </div>
    )
}

export default DiscountBoxTime