import React from 'react'
import BorderSettings from './components/BorderSettings'
import PreviewBorder from './components/PreviewBorder'
import BorderCssResult from './components/BorderCssResult'
import './bordergen.css'


const BorderGen = () => {
  return (
    <div className='bordergen'>
        <BorderSettings/>
        <PreviewBorder/>
        <BorderCssResult/>
    </div>
  )
}

export default BorderGen