
export interface IData {
  type: string
  tax: boolean
  wages: string
}

interface ITypes {
  name: string
  help?: string
  pay?: string
}

export interface IFormProps {
  title: string
  types: ITypes[]
  taxAmount: number
  defaultType: string
  dedaultTax: boolean
  getType?: string
  getTax?: boolean
  getWages?: string
  dispatchChange?: (formName: string, field: string, value: string | boolean) => void
}