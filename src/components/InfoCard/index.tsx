import React from 'react'
import './InfoCard.scss'

const InfoCard: React.FC<{ wages?: string; tax?: boolean; taxAmount: number }> = ({ wages, tax, taxAmount }) => {
  const getRoundLocateNumber = (num: number) => Math.round(num).toLocaleString()

  let salary, fee, expenses

  if (wages) {
    let numberWages = Number(wages.toString().replaceAll(String.fromCharCode(160), ''))
    if (tax) {
      salary = getRoundLocateNumber(numberWages)
      fee = getRoundLocateNumber(numberWages / (1 - taxAmount) - numberWages)
      expenses = getRoundLocateNumber(numberWages / (1 - taxAmount))
    } else {
      salary = getRoundLocateNumber(numberWages - numberWages * taxAmount)
      fee = getRoundLocateNumber(numberWages * taxAmount)
      expenses = getRoundLocateNumber(numberWages)
    }

    return (
      <div className='infoCard'>
        <div>
          <span>{salary} ₽</span> сотрудник будет получать на руки
        </div>
        <div>
          <span>{fee} ₽</span> НДФЛ, 13% от оклада
        </div>
        <div>
          <span>{expenses} ₽</span> за сотрудника в месяц
        </div>
      </div>
    )
  }
  return null
}
export default InfoCard
