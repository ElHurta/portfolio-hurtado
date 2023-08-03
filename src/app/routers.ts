export interface Route {
    label: string;
    path: string;
    active: boolean;
}

export const routes: Route[] = [
    { label: 'ME', path: '/', active : false },
    { label: 'SKILLS', path: '/skills', active : false },
    { label: 'PROJECTS', path: '/projects', active : false },
    { label: 'CONTACT', path: '/contact', active : false },
]