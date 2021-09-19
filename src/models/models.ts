import { Models } from "@rematch/core"
import { time } from "./time"
 
export interface RootModel extends Models<RootModel> {
  time: typeof time
}
 
export const models: RootModel = { time }