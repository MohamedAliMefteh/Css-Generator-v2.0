import React from 'react'
import { useSelector } from 'react-redux'

const BorderCssResult = () => {
    const {value}=useSelector(state=>state.border)
    const borderRadius=`${value.topLeftBorder}px ${value.topRightBorder}px ${value.bottomRightBorder}px ${value.bottomLeftBorder}px `
  return (
    <div className='bordercssresult'>
        <pre>
            <code>
                {`border-radius:${borderRadius}`}
            </code>
        </pre>
    </div>
  )
}

export default BorderCssResult