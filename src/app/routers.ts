export interface Route {
    label: string;
    path: string;
}

export const routes: Route[] = [
    { label: 'ME', path: '/' },
    { label: 'SKILLS', path: '/skills' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
]