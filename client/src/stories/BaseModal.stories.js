import BaseModal from '../components/BaseModal'
import React from 'react'

const BaseModalStory = {
  title: 'Base Modal', 
  component: BaseModal
}
export default BaseModalStory


export const DefaultView = () => {

  const [show, setShow] = React.useState(false)


  return (
    <div style={{margin: '0 auto', width: 'max-content'}}>
      <BaseModal show={show} click={() => setShow(!show)} left={'50%'}/>
    </div>
  )
}
