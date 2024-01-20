import {createClient, groq} from 'next-sanity'

const client = createClient({
  projectId: 'd7lyxbp2',
  dataset: 'production',
  apiVersion: '2023-04-08',
  useCdn: false,
})

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "image":image.asset->url,
      "slug":slug.current
    }`
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      outro,
      content[]{
        details,
        products[]->{
          title,
          "image":image.asset->url,
          price,
          url,
          description,
          color
        }
      }
    }`,
    {slug}
  )
}
