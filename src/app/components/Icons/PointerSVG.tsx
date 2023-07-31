import * as React from "react"
import { SVGProps } from "react"

export default function PointerSVG(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={50}
            fill="none"
            {...props}
        >
            
            <path
                fill="#44413A"
                fillRule="evenodd"
                d="m3 25 13-9 31 9-31 8-13-8Zm11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
                clipRule="evenodd"
            />
            <path fill="#413E35" d="M49 13h-4v4h4zM49 34h-4v4h4z" />
        </svg>
    )
}
