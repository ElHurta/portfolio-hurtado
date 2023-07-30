import type { Metadata } from 'next'

import './globals.css'
import { Navigation } from './components/Navigation/Navigation'

import styles from './styles/main.module.css'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Juan Hurtado Developer Portfolio',
  description: 'This is my personal portfolio site, describes my skills and projects I have worked on. Design inspired on NieR:Automata.',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
