import {PortableText} from "@portabletext/react"
import {getPost} from "../../../hobbyisthub-backend/sanity-utils"
import ProductCard from "../../components/ProductCard"
import {Product} from "../../types/Product"

export default async function Post({params}: any) {
  const post = await getPost(params.slug)
  console.log(post.content[0].products)

  return (
    <div className='mx-auto max-w-screen-lg p-4 bg-white rounded text-black text-justify'>
      <div className='mx-auto p-8 md:px-36 flex flex-col gap-4'>
        <h1 className='text-2xl text-center'>{post.title}</h1>
        <p>{post.description}</p>
        <div>
          {post.content.map((section: any) => (
            <div className='my-4' key={post.id}>
              <PortableText value={section.details} />
              <div className='flex flex-col gap-2 justify-between mt-4'>
                {section.products.map((product: Product) => (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    url={product.url}
                    image={product.image}
                    description={product.description}
                    color={product.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {post.outro && <p>{post.outro}</p>}
      </div>
    </div>
  )
}
