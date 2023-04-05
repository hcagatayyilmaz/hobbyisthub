// Import blockContent
import blockContent from './blockContent'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Content Block',
          name: 'contentBlock',
          fields: [
            {
              name: 'blockContent',
              title: 'Text Content',
              type: 'blockContent',
            },
            {
              name: 'products',
              title: 'Products',
              type: 'array',
              of: [{type: 'reference', to: {type: 'product'}}],
              validation: (Rule: any) => Rule.max(3),
            },
          ],
        },
      ],
    },
  ],
}
console.log(blockContent.name)
