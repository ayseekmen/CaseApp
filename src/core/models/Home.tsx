export interface Questions {
    id: number,
    title: string,
    subtitle: string,
    image_uri: string,
    uri: string,
    order: number
}

export interface Categories {
    data: [
        {
            id: number,
            title: string,
            subtitle: string,
            image_uri: string,
            uri: string,
            order: number
        }
    ]
}
