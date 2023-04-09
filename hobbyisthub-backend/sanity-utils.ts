import {createClient, groq} from 'next-sanity'

const client = createClient({
  projectId: 'd7lyxbp2',
  dataset: 'production',
  apiVersion: '2023-04-08',
})

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      url
    }`
  )
}
