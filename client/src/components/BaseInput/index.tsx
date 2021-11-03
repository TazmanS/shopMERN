import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';


interface InputProps {
  value: string,
  placeholder: string,
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
  intl: any,
  
  errorMessage?: string,
  propClasses?: object,
  icon?: React.Component,
  label?: string,
  clearError?: () => void
}

const BaseInput:React.FC<InputProps> = (props) => {
  const { icon, placeholder, value, setValue, errorMessage, propClasses, label, intl, clearError } = props
  const classes = useStyles() 

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e)
    clearError && clearError()
  }

  return (
    <div className={classes.container}>
      <div className={classes.searchIcon}>
        {icon}
      </div>
      <TextField 
        placeholder={placeholder}
        classes={propClasses}
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        error={!!errorMessage}
        label={errorMessage ? intl.formatMessage({id: errorMessage}) : label || placeholder}
        onChange={_onChange}
        fullWidth={true}
      />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {

    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

  })
)

export default injectIntl(BaseInput)