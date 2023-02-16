import Form from './components/Form'
import './app.scss'
import types from './Data/types.json'

const App = () => (
  <div className='App'>
    <Form title='Сумма' types={types} taxAmount={0.13} defaultType={types[0].name} dedaultTax={true} />
  </div>
)

export default App
