import React from 'react'
import { FaAws, FaReact } from 'react-icons/fa'
import { SiCss3, SiHtml5, SiJavascript, SiTypescript } from 'react-icons/si'

export default function IconsProvider({requestedIcon}: {requestedIcon: string}) {
  
    switch (requestedIcon) {
        case 'FaReact':
            return <FaReact />
        case 'SiJavascript':
            return <SiJavascript />
        case 'SiTypescript':
            return <SiTypescript />
        case 'SiHtml5':
            return <SiHtml5 />
        case 'SiCss3':
            return <SiCss3 />
        case 'FaAws':
            return <FaAws />
        default:
            return <></>
}}
