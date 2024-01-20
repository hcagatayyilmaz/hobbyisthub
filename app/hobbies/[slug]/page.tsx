import {PortableText} from "@portabletext/react"
import {getPost} from "../../../hobbyisthub-backend/sanity-utils"
import ProductCard from "../../components/ProductCard"
import {Product} from "../../types/Product"

export default async function Post({params}: any) {
  // Fetch the post data from the backend
  const post = await getPost(params.slug)

  // Log the products of the post
  console.log(post)

  return (
    <div className='mx-auto max-w-screen-lg p-4 bg-white rounded text-black text-justify'>
      <div className='mx-auto p-8 md:px-36 flex flex-col gap-4'>
        {/* Display the post title */}
        <h1 className='text-2xl text-center'>{post.title}</h1>

        {/* Display the post description */}
        <PortableText value={post.description} />

        <div>
          {/* Iterate over each section of the post */}
          {post.content.map((section: any) => (
            <div className='my-4' key={post.id}>
              {/* Display the section details */}
              <PortableText value={section.details} />

              <div className='flex flex-col gap-2 justify-between mt-4'>
                {/* Iterate over each product in the section */}
                {section.products.map((product: Product) => (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    url={product.url}
                    image={product.image}
                    description={product.description}
                    color={product.color}
                    key={product.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Display the post outro if available */}
        {post.outro && <PortableText value={post.outro.details} />}
      </div>
    </div>
  )
}
