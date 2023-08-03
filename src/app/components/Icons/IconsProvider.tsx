import React from 'react'
import { FaAws, FaReact, FaNodeJs, FaSass, FaGithub } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript, IoLogoIonic } from 'react-icons/io5'
import { GrMysql } from 'react-icons/gr'
import { BsGit} from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { LiaAngular } from 'react-icons/lia'

export default function IconsProvider({requestedIcon}: {requestedIcon: string}) {
  
    switch (requestedIcon) {
        case 'SiTypescript':
            return <SiTypescript />
        case 'IoLogoJavascript':
            return <IoLogoJavascript />
        case 'GrMysql':
            return <GrMysql />
        case 'TbBrandNextjs':
            return <TbBrandNextjs />
        case 'FaNodeJs':
            return <FaNodeJs />
        case 'FaAws':
            return <FaAws />
        case 'IoLogoIonic':
            return <IoLogoIonic />
        case 'FaSass':
            return <FaSass />
        case 'LiaAngular':
            return <LiaAngular />
        case 'FaReact':
            return <FaReact />
        case 'BsGit':
            return <BsGit />
        case 'FaGithub':
            return <FaGithub />
        default:
            return <></>
}}
