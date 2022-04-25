import { resolve } from 'path'
import { readdirSync, statSync } from 'fs-extra'

const path = resolve(__dirname, '..')
export function getFunctionNames() {
  let dirs = readdirSync(path)
  dirs = dirs.filter((dir) => {
    return statSync(resolve(path, dir)).isDirectory() && dir.indexOf('use') === 0
  })
  return dirs
}
