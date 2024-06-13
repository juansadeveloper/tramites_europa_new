/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8W2RbLuBcH2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import React from "react"

export default function Carrousel() {
  const categories = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Clothing",
      description: "Discover the latest fashion trends",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Electronics",
      description: "Upgrade your tech with our selection",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Home & Garden",
      description: "Transform your living space",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Beauty & Personal Care",
      description: "Look and feel your best",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Sports & Outdoors",
      description: "Gear up for your next adventure",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Toys & Games",
      description: "Endless fun for the whole family",
    },
  ]
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-[200px] md:w-[250px] lg:w-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={category.title}
                    width={500}
                    height={300}
                    className="w-full h-[150px] md:h-[180px] lg:h-[220px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{category.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}