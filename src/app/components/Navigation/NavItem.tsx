'use client'

import { Route } from "@/app/routers"
import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import pointer from '../../../../assets/pointer.svg'

import styles from './NavItem.module.css'

export function NavItem({route}: {route: Route}){

    const [active, setActive] = useState(route.active)

    return (
        <li className={styles.navitem}>
            {
                active && (
                    <Image src={pointer} alt="pointer" />
                )
            }
            
            <div className={styles.navButton}>
                <div className={styles.buttonContent}>
                    <Link href={route.path}>
                        <div className={styles.routeIcon}></div>
                        <p>{route.label}</p>
                    </Link>
                </div>
            </div>
        </li>
    )
}