export interface gameType{
    id:number
    title?: string
    thumbnail?:string | null | undefined
    short_description?:string
    game_url?:string
    genre?:string
    platform?:string
    publisher?:string
    developer?:string
    release_date?:string
    profile_url?:string
}

export interface gameData{
    id:number
    title: string
    thumbnail: string
    status:string
    short_description:string
    description: string
    game_url:string
    genre:string
    platform:string
    publisher:string
    developer:string
    release_date:string
    profile_url:string
    minimum_system_requirements: systemRequirements
    screenshots: screenshots[]
}

interface systemRequirements{
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
}

interface screenshots{
    id:number
    image:string
}

export interface News{
    id:number
    title: string
    short_description: string
    thumbnail?: string
    main_image?:string
    article_content?: string
    article_url?: string
}