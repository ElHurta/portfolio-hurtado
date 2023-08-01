
export interface Profile {
    birthday: string
    city: string
    collectionId: string
    collectionName: string
    contact_email: string
    country: string
    created: string
    expand: Expand
    first_description: string
    id: string
    long_description: string
    name: string
    picture: string
    second_description: string
    skills: string[]
    updated: string
}

export interface Expand {
    skills: Skill[]
}

export interface Skill {
    big_icon_name: string
    collectionId: string
    collectionName: string
    created: string
    description: string
    id: string
    name: string
    small_icon_name: string
    updated: string
}