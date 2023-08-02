export interface Profile {
    birthday: string
    city: string
    collectionId: string
    collectionName: string
    contact_email: string
    country: string
    created: string
    expand: Expand
    features: string
    id: string
    languages: string[]
    long_description: string
    name: string
    picture: string
    skills: string[]
    updated: string
  }
  
  export interface Expand {
    languages: Language[]
    skills: Skill[]
  }
  
  export interface Language {
    collectionId: string
    collectionName: string
    created: string
    icon: string
    id: string
    name: string
    proficency: string
    updated: string
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
  