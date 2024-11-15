import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hobbyisthub-backend',
  projectId: 'd7lyxbp2',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
