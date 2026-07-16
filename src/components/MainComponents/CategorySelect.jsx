import React from 'react'
import { Link } from 'react-router'
import { GoArrowLeft } from "react-icons/go";
import SectionHeader from '../common/SectionHeader';
import { categoryList } from '../../data/categoryList ';
import CategoryListBox from './CategoryListBox';

const CategorySelect = () => {
    return (
        <div className=' wrapper py-16 '>
            <div className='flex items-center justify-between mb-10'>
                <div>
                    <SectionHeader badge="محصولات ویژه" title="پرفروش‌ترین محصولات" description="انتخاب کاربران در سراسر کشور" align="right" />
                </div>
                <Link to="/" className='flex items-center gap-2 hidden sm:flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors'>
                   مشاهده همه
                   <GoArrowLeft />
                </Link>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3'>
                {
                    categoryList.map((item) => (
                        <CategoryListBox  item={item}/>
                    ))
                }
            </div>


        </div>
    )
}

export default CategorySelect