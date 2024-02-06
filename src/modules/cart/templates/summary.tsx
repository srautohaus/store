"use client"

import { Heading } from "@medusajs/ui"
import { Button } from "@mantine/core"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex bg-black flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals data={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step}>
        <Button
          fullWidth
          variant="gradient"
          gradient={{ from: "yellow", to: "orange", deg: 90 }}
          className="w-full h-10 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 hover:shadow-elevation-card-rest"
        >
          Go to checkout
        </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
