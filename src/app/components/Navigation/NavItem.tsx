'use client'

import { Route } from "@/app/routers"
import Link from "next/link"
import Image from "next/image"
import pointer from '../../../../assets/pointer.svg'

import styles from './NavItem.module.css'

export function NavItem({route, handleActive}: {route: Route, handleActive: (path: string) => void}){

    return (
        <li className={styles.navitem}>
            {
                route.active && (        
                    <div className={styles.pointerContainer}>
                        <div className={styles.decorationBar}>

                        </div>
                        <Image src={pointer} alt="pointer" />
                        <div className={styles.dotsContainer}>
                            <div className={styles.dot}></div>
                            <div className={styles.dot}></div>
                        </div>
                    </div>
                )
            }

            
            <div className={styles.navButton}>
                <div
                    onClick={() => handleActive(route.path)}
                    className={styles.buttonContent}>
                    <Link href={route.path}>
                        <div className={styles.routeIcon}></div>
                        <p>{route.label}</p>
                    </Link>
                </div>
            </div>
        </li>
    )
}