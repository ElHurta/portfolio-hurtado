import React from 'react'
import { SVGProps } from 'react'

export default function VerticalBarSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={50}
        fill="none"
        {...props}
    >
        <path fill="#AAA591" d="M0 0h12v50H0zM18 0h4v50h-4z" />
    </svg>
  )
}
