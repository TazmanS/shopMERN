import React from 'react'
import Switch from '@material-ui/core/Switch'

interface BaseToggleInterface {
  check?: boolean,
  change(): void,
  leftComponent: string | React.Component,
  rightComponent: string | React.Component

}

const BaseToggle:React.FC<BaseToggleInterface> = (props) => {
  const {check = true, change, leftComponent, rightComponent} = props;
  return (
    <div>
      {leftComponent}
      <Switch
        defaultChecked={check}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onChange={change}
      />
      {rightComponent}
    </div>
  )
}

export default BaseToggle