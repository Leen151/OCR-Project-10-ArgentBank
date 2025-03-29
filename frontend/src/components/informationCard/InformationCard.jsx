import React from 'react'

export const InformationCard = ({icon, alt, title, text}) => {
  return (
    <div class="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {text}
      </p>
    </div>
  )
}
