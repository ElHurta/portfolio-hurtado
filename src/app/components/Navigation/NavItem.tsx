'use client'

import { Route } from "@/app/routers"
import Link from "next/link"

import styles from './NavItem.module.css'
import PointerSVG from "../Icons/PointerSVG"

export function NavItem({ route }: { route: Route}) {

    return (
        <li className={`${styles.navitem} ${route.active ? styles.navitemActive : ''}`}>

            {
                route.active && (
                    PointerSVG({
                        className: styles.pointer,
                        width: 50,
                        height: 50,
                        fill: styles.pointer
                    })
                )
            }

            <div className={`${styles.navButton} ${route.active ? styles.navButtonActive : ''}`}>
                <div
                    className={`${styles.buttonContent} ${route.active ? styles.buttonContentActive : ''}`}>
                    <Link href={route.path}>
                        <div className={`${styles.routeIcon} ${route.active ? styles.routeIconActive : ''}`}></div>
                        <p>{route.label}</p>
                    </Link>
                </div>
            </div>
        </li>
    )
}