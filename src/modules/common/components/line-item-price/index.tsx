import { formatAmount } from "@lib/util/prices"
import { LineItem, Region } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"

import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { CalculatedVariant } from "types/medusa"

type LineItemPriceProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  style?: "default" | "tight"
  text?: "dark" | "light"
}

const LineItemPrice = ({
  item,
  region,
  style = "default",
  text = "dark" || "light",
}: LineItemPriceProps) => {
  const originalPrice =
    (item.variant as CalculatedVariant).original_price * item.quantity
  const hasReducedPrice = (item.total || 0) < originalPrice
  let textColorClass = text === "dark" ? "text-zinc-800" : "text-zinc-100"

  return (
    <div className="flex flex-col gap-x-2  items-end">
      <div className={textColorClass}>
        <div className="text-left">
          {hasReducedPrice && (
            <>
              <p>
                {style === "default" && (
                  <span className={textColorClass}>Original: </span>
                )}
                <span className="line-through text-ui-fg-muted">
                  {formatAmount({
                    amount: originalPrice,
                    region: region,
                    includeTaxes: false,
                  })}
                </span>
              </p>
              {style === "default" && (
                <span className="text-ui-fg-interactive">
                  -{getPercentageDiff(originalPrice, item.total || 0)}%
                </span>
              )}
            </>
          )}
          <span
            className={clx("text-base-regular", {
              "text-ui-fg-interactive": hasReducedPrice,
            })}
          >
            {formatAmount({
              amount: item.total || 0,
              region: region,
              includeTaxes: false,
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LineItemPrice
