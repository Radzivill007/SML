import React from 'react'
import './HelpInfo.scss'

const HelpInfo: React.FC<{ text: string }> = ({ text }) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className={`help ${show && 'active'}`} onClick={() => setShow(!show)}>
      <span>{text}</span>
    </div>
  )
}

export default HelpInfo
