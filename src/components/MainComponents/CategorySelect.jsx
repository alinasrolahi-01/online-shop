import React from 'react'
import { Link } from 'react-router'
import { GoArrowLeft } from "react-icons/go";
import SectionHeader from '../common/SectionHeader';


const CategorySelect = () => {
    return (
        <div className=' wrapper py-16 '>
            <div className='flex items-center justify-between'>
                <div>
                    <SectionHeader badge="محصولات ویژه" title="پرفروش‌ترین محصولات" description="انتخاب کاربران در سراسر کشور" align="right" />
                </div>
                <Link to="/" className='flex items-center gap-2 hidden sm:flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors'>
                   مشاهده همه
                   <GoArrowLeft />
                </Link>
            </div>
        </div>
    )
}

export default CategorySelect