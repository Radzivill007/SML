import React from 'react'
import { Field } from 'redux-form'
import HelpInfo from '../HelpInfo'
import './Radio.scss'

const Radio: React.FC<{ name: string; help?: string }> = ({ name, help }) => {
  return (
    <>
      <label className='radio'>
        <Field name='type' component='input' type='radio' value={name} />
        {name}
        <span className='checkmark' />
      </label>
      {help && <HelpInfo text={help} />}
    </>
  )
}

export default Radio
