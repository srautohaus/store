import { Metadata } from "next"
import { MantineProvider } from "@mantine/core"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider>
        <div className="bg-black text-white">
          <Nav />
          {props.children}
          <Footer />
        </div>
      </MantineProvider>
    </>
  )
}
