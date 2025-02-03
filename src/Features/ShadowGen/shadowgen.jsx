import React from 'react'
import ShadowSetting from './components/ShadowSetting'
import PreviewShadow from './components/PreviewShadow'
import ShadowCssResult from './components/ShadowCssResult'
import './shadowgen.css'

function ShadowGen() {
  return (
    <div className='shadowgen'>
      <ShadowSetting/>
      <PreviewShadow/>
      <ShadowCssResult/>
    </div>
  )
}

export default ShadowGen