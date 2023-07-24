import type { Metadata } from 'next'
import { routes } from './routers'

import './globals.css'

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
        <header>
          <nav className='navbar'>
            {
              // routes.map((route) => (
              //   <NavItem
              //     key = {route.path}
              //     route = {route}
              //   />
              // ))
            }
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer />
      </body>
    </html>
  )
}
