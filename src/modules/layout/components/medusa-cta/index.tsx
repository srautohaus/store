import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex text-white gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      &
      <a href="https://teamrr.live" target="_blank" rel="noreferrer">
        TeamrrDev
      </a>
    </Text>
  )
}

export default MedusaCTA
