export const filterWikimediaFeed = (data: any, lang: string): boolean => {      
    if (data && data.meta && data.meta.domain && data.type && data.type === 'edit') {
        return data.meta.domain.includes(`${lang}.wikipedia.org`)
    }
    return false;
}