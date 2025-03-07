import React from 'react'
import { useDingIcon } from './context';

import './styles/icons.css';

type IconName = string;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName
  size?: number | string
  color?: string
}

export const Icon = ({
  name,
  size,
  color,
  className = '',
  ...props
}: IconProps) => {
  const context = useDingIcon()
  
  return (
    <span
      className={`icon-${name} ${className}`}
      style={{
        fontSize: size || context.size,
        color: color || context.color,
        fontFamily: 'icomoon',
        lineHeight: 1,
        display: 'inline-block',
        ...props.style
      }}
      {...props}
    />
  )
}