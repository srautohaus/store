import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"
import { onlyUnique } from "@lib/util/only-unique"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm text-white">Select {title}</span>
      <div className="flex flex-wrap justify-between gap-2 text-black">
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clx(
                "border-ui-border-base bg-ui-bg-subtle text-small-regular h-10 rounded p-2 flex-1 ",
                {
                  "border-grey-2 bg-gold font-semibold text-zinc-800 transition-all duration-300 ease-in-out ":
                    v === current,
                  "hover:shadow-elevation-card-rest hover:font-semibold hover:text-base hover:bg-gold-2 hover:scale-105 hover:-translate-y-0.5 hover:text-black transition-all duration-300 ease-in-out ":
                    v !== current,
                }
              )}
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
