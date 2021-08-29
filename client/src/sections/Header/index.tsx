import React from 'react'
import {HeaderLineTwo, HeaderLineThree, HeaderLineOne} from './components'
import {COLOR} from '../../helpers/cssVariables'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    width: '100%',
    color: COLOR.white,
  }
})

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <HeaderLineOne />
      <HeaderLineTwo />
      <HeaderLineThree />
    </div>
  )
} 

export default Header