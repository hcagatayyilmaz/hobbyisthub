export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'Amazon URL',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Taxonomy',
      name: 'taxonomy',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner ', value: 'beginner'},
          {title: 'Price-performance', value: 'price-performance'},
          {title: 'Advanced', value: 'advanced'},
        ],
      },
    },
  ],
}
