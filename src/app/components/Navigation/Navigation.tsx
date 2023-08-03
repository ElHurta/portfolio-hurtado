'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

import { routes } from "@/app/routers"
import { NavItem } from "./NavItem"

import styles from './Navigation.module.css'
import VerticalBarSVG from '../Icons/VerticalBarSVG';

export function Navigation() {

    const pathname = usePathname()

    const [tabs, setTabs] = useState(routes)

    useEffect(() => {
        setTabs(routes.map((route) => {
            return {
                ...route,
                active: pathname === route.path
            }
        }))
    }, [pathname])

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul>
                    <VerticalBarSVG height={40} />
                    {
                        tabs.map((route) => (
                            <NavItem
                                key={route.path}
                                route={route}
                            />
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}