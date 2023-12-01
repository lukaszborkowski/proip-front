import React from 'react'
import Opinions from '../Home/Opinions'
import Availability from './Availability'
import Footer from './Footer'

export default function Index({ content = {} }) {
    return (
        <div>
            <Availability content={content} />
            <Footer content={content} />
        </div>
    )
}
