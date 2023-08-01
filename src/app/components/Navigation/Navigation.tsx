'use client'

import { useState } from "react"

import { routes } from "@/app/routers"
import { NavItem } from "./NavItem"

import styles from './Navigation.module.css'
import VerticalBarSVG from '../Icons/VerticalBarSVG';

export function Navigation() {

    const [tabs, setTabs] = useState(() => {
        if (globalThis.localStorage.getItem('activeTab')) {
            routes.map((route) => {
                if (route.path === globalThis.localStorage.getItem('activeTab')) {
                    route.active = true
                } else {
                    route.active = false
                }
                return route
            })
        }
        return routes
    })

    const handleActive = (path: string) => {
        globalThis.localStorage.setItem('activeTab', path)

        const newTabs = tabs.map((route) => {
            if (route.path === path) {
                route.active = true
            } else {
                route.active = false
            }
            return route
        })
        setTabs(newTabs)
    }

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
                                handleActive={handleActive}
                            />
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}