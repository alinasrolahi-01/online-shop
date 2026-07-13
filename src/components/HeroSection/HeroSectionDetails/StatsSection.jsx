import React from 'react'

import { statsData } from '../../../data/statsData'
import Stats from './Stats'

const StatsSection = () => {
    return (
        <div className=' flex gap-10 flex-wrap'>
            {
                statsData.map((item) => (
                    <div key={item.id}>
                        <Stats title={item.title} desc={item.number}/>
                    </div>
                ))
            }
        </div>
    )
}

export default StatsSection