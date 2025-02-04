import React from 'react'
import { useSelector } from 'react-redux'

const PreviewBorder = () => {
    const {value}=useSelector(state=>state.border)
    const style={
        height:`${value.height}px`,
        width:`${value.width}px`,
        borderRadius:`${value.topLeftBorder}px ${value.topRightBorder}px ${value.bottomRightBorder}px ${value.bottomLeftBorder}px `,
        backgroundColor:'white'
    }
  return (
    <div className='previewborder'>
        <div style={style}></div>
    </div>
  )
}

export default PreviewBorder