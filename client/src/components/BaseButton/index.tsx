import React from 'react'
import {Button} from '@material-ui/core'


interface BaseButtonProps {
  onClick?(): void,
  color?: any
}

const BaseButton:React.FC<BaseButtonProps> = (props) => {
  const { onClick, color = 'primary', children } = props;
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  )
}



export default BaseButton