import React from 'react'
import { useSelector } from 'react-redux'
import hexToRgba from '../../../Utils/hexToRgba'

const ShadowCssResult = () => {
    const {value}=useSelector(state=>state.shadow)
    const shadowcolor=  hexToRgba(value.shadowColor,value.shadowOpacity)
  const  boxShadow=`${value.horizontal}px ${value.vertical}px ${value.blurRadius}px ${value.spreadRadius}px ${shadowcolor}`
  return (
    <div className='shadowcssresult'>
        <pre>
            <code>
                {`box-shadow:${boxShadow}`}
            </code>
        </pre>
    </div>
  )
}

export default ShadowCssResult