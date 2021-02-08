import React from 'react'
import BaseToggle from '../components/BaseToggle'

const BaseToggleStory =  {
  title: 'Base Toggle',
  component: BaseToggle
}
export default BaseToggleStory


export const DefaultView = () => {

  const options = [
    {
      title: 'Светлая',
      value: 'light'
    },
    {
      title: 'Темная',
      value: 'dark'
    }
  ]
  


  return (
    <div style={{background: '#F8F8F8', width: '100%', height: '50px' }}>
      <BaseToggle options={options} />
    </div>
  )
}
 
