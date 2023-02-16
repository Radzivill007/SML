import React from 'react'
import { Field, reduxForm, InjectedFormProps, formValueSelector, change } from 'redux-form'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Toggler from '../Toggler'
import { Container } from 'react-bootstrap'
import numberToLocateString from '../../Utils/numberToLocateString'
import { IData, IFormProps } from '../../Types'
import InfoCard from '../InfoCard'
import Radio from '../Radio'
import './Form.scss'

let Form: React.FC<InjectedFormProps<IData, IFormProps> & IFormProps> = (props) => {
  const { title, types, taxAmount, defaultType, dedaultTax, getType, getTax, getWages, dispatchChange } = props

  React.useEffect(() => {
    dispatchChange?.('myform', 'type', defaultType)
    dispatchChange?.('myform', 'tax', dedaultTax)
  }, [dedaultTax, defaultType, dispatchChange])

  return (
    <Container>
      <form className='form'>
        <h1 className='title'>{title}</h1>
        <div className='types'>
          {types.map((type) => (
            <div key={type.name}>
              <Radio name={type.name} help={type.help} />
            </div>
          ))}
        </div>

        {getType !== 'МРОТ' && (
          <>
            <div className='tax'>
              <span className={getTax ? 'gray' : ''}>Указать с НДФЛ</span>
              <Toggler />
              <span className={getTax ? '' : 'gray'}>Без НДФЛ</span>
            </div>
            <div className='wages'>
              <Field name='wages' component='input' type='text' normalize={numberToLocateString} />
              <span>{types.find((type) => type.name === getType)?.pay}</span>
            </div>
          </>
        )}
        {getType === 'Оклад за месяц' && <InfoCard wages={getWages} tax={getTax} taxAmount={taxAmount} />}
      </form>
    </Container>
  )
}

const selector = formValueSelector('myform')

const mapStateToProps = (state: IData) => ({
  getType: selector(state, 'type'),
  getTax: selector(state, 'tax'),
  getWages: selector(state, 'wages'),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchChange: (formName: string, field: string, value: string | number | boolean) => dispatch(change(formName, field, value)),
})

Form = connect(mapStateToProps, mapDispatchToProps)(Form)

export default reduxForm<IData, IFormProps>({
  form: 'myform',
})(Form)
