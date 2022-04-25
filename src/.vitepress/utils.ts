import { statSync } from "fs-extra"
import { readdirSync } from "fs-extra"
import { resolve } from "path"

const path = resolve(__dirname, '..')
export function getFunctionNames() {
  let dirs = readdirSync(path)
  dirs = dirs.filter(dir => {
    return statSync(resolve(path, dir)).isDirectory() && dir.indexOf('use') === 0
  })
  return dirs
}
