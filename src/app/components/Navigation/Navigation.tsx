'use client'

import {useState} from "react"

import { routes } from "@/app/routers"
import { NavItem } from "./NavItem"

import styles from './Navigation.module.css'
import VerticalBarSVG from '../Icons/VerticalBarSVG';

export function Navigation() {

    const [tabs, setTabs] = useState(routes)

    const handleActive = (path: string) => {
        const newTabs = tabs.map((route) => {
            if(route.path === path){
                return {
                    ...route,
                    active: true
                }
            }
            return {
                ...route,
                active: false
            }
        })
        setTabs(newTabs)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul>
                    <VerticalBarSVG
                        height={40}
                    />
                    {
                        tabs.map((route) => (
                            <NavItem
                                key = {route.path}
                                route = {route}
                                handleActive = {handleActive}
                            />
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}