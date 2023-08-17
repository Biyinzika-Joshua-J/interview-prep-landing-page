import React from 'react'
import Link from 'next/link'
import './GradientButton.css'

const GradientButton = ({text, link, id}) => {
  return (
    <Link href={link} id={id} className={`grad-btn `}>
        {text}
    </Link>
  )
}

export default GradientButton