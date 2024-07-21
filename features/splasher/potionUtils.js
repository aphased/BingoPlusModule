import { registerWhen } from "../../utils/utils"
import Settings from "../../settings"
import Skyblock from "../../utils/Skyblock"

// Show potion abbreviation
registerWhen(register("renderItemIntoGui", (item, x, y) => {
    name = item.getName()
    if (!name.includes("Splash Potion")) return
    let text = name.slice(0,5) + "."

    Renderer.translate(x, y, 250) // 250 puts it behind the tooltip and in front of head textures 
    Renderer.scale(0.6)
    Renderer.drawString(text, 0, 0)

}), () => Settings.potionAbbreviation && Skyblock.inSkyblock)