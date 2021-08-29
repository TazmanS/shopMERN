import React from 'react'
import { injectIntl } from 'react-intl'

interface UserInterface {
  intl: any
}

const User:React.FC<UserInterface> = (props) => {
  const {intl} = props;

  return (
    <div>
      
    </div>
  )
}

export default injectIntl(User);