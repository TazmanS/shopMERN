import React, { Provider } from 'react'
import {BG_COLOR, NUMBER} from '../../../helpers/cssVariables'
import {BaseToggle} from '../../../components'
import { makeStyles } from '@material-ui/core'
import User from './User'
import { injectIntl } from 'react-intl'


const useStyles = makeStyles({
  container: {
    width: '100%',
    backgroundColor: BG_COLOR.bg_dark_light,
  },
  wrap: {
    maxWidth: 1170,
    padding: `${NUMBER.num1} ${NUMBER.num1}`,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

})

interface HeaderLineOneInterface {
  intl: any
}

const HeaderLineOne:React.FC<HeaderLineOneInterface> = (props) => {
  const { intl } = props;
  const classes = useStyles()
  
  const [checkOne, setCheckOne] = React.useState(true)
  const [checkTwo, setCheckTwo] = React.useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <BaseToggle 
          check={checkOne} 
          leftComponent={intl.formatMessage({id: 'header.bright'})}
          rightComponent={intl.formatMessage({id: 'header.dark'})}
          change={() => setCheckOne(!checkOne)} 
        />
        <div>
          <BaseToggle
            leftComponent={'Рус'}
            rightComponent={'Англ'}
            check={checkTwo}
            change={() => setCheckTwo(!checkTwo)} 
          /> 
          <User />
        </div>
      </div>
    </div>
  )
}

export default injectIntl(HeaderLineOne)