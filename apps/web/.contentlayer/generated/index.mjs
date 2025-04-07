// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer2/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allArticles from './Article/_index.json' with { type: 'json' }
import allHackathons from './Hackathon/_index.json' with { type: 'json' }
import allProjects from './Project/_index.json' with { type: 'json' }

export { allArticles, allHackathons, allProjects }

export const allDocuments = [...allArticles, ...allHackathons, ...allProjects]


