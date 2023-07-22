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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          name: 'section',
          fields: [
            {
              name: 'details',
              title: 'Details',
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
    {
      name: 'outro',
      title: 'Outro',
      type: 'string',
    },
  ],
}
console.log(blockContent.name)
