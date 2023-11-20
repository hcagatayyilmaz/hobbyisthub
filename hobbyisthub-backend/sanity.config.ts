import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hobbyisthub-backend',
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: 'production',
  plugins: [deskTool(),],
  schema: {
    types: schemaTypes,
  },
})
