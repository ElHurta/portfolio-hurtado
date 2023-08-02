import React from 'react'
import { Language } from '@/interfaces/portfolio.interfaces'

import styles from './DevFeatures.module.css'

export default function DevFeatures({ features, languages }: { features: string[], languages: Language[] }) {
    return (
        <>
            {
                features.map((feature: string, index: number) => {
                    return (
                        <div className={styles.listElement} key={index}>
                            <div className={styles.customMarker}></div>
                            <li>{feature}</li>
                        </div>
                    )
                })
            }

            <hr className={styles.solid} />

            <h2 className={styles.subtitle}>Languages:</h2>
            {
                languages.map((language: Language, index: number) => {
                    const languageName = language.name.charAt(0).toUpperCase() + language.name.slice(1)
                    return (
                        <div key={index} className={styles.listElement}>
                            <div className={styles.customMarker}></div>
                            <li>{languageName}</li>
                        </div>
                    )
                })
            }
        </>
    )
}
