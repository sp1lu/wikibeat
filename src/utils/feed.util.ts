export const filterWikimediaFeed = (data: any): boolean => {      
    if (data && data.meta && data.meta.domain && data.type && data.type === 'edit') {
        return data.meta.domain.includes('en.wikipedia.org')
    }
    return false;
}