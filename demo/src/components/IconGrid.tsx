import { Icon } from 'ding-icons';
import React from 'react';

export default function IconGrid({ icons }) {
  return (
    <div className="grid">
      {icons.map((iconName) => (
        <div key={iconName} className="grid-item">
          <Icon name={iconName} className="icon" />
          <span className="icon-name">{iconName}</span>
        </div>
      ))}
    </div>
  )
}