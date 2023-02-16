import React from 'react'
import { Field } from 'redux-form'
import './Toggler.scss'

const Toggler: React.FC = () => (
    <label className='toggler'>
      <Field name='tax' component='input' type='checkbox' />
      <span />
    </label>
  )

export default Toggler
