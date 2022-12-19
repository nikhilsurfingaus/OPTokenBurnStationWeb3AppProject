import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '7w2876b5',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skJ2EJSsPauaYLP86cM0KN4xJIIHYyQUD6tGrWxO6jarvcWm79yKXjnrNUeowN19JPCWmPLW0HZKiBuv0Rfb7OgwfLyXSkSJ5VGAkIMVeqlZe7VDGFrRnC686hqgMm7OFgqfBfNic7XDJCte71DWcGanvM8YsIImapOJdbzM0hwQZKlZWPCp',
    useCdn: false,
})