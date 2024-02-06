import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "../../components/medusa-cta"
import Image from "next/image"

const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className=" bg-black w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          {/* <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center items-center">
            <div className="flex items-center justify-center align-middle">
              <Image
                src="https://i.ibb.co/GThY31B/white.png"
                alt="SR Autohaus Parts"
                width={250}
                height={100}
              />
            </div>
            <p>
              We are a team of enthusiasts who are passionate about the
              automotive industry. We are dedicated to providing the best
              quality products and services to our customers.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0"></div>
          </div> */}
        </div>
        <div className="flex w-full mb-16 justify-between text-grey-2">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} SR Autohaus. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
