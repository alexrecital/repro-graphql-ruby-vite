// Direct import of the compiled CJS file.
// That file has: exports.__esModule = true; exports.default = ActionCableLink
// Vite 8 (consistent CJS interop) no longer auto-unwraps __esModule default exports,
// so `ActionCableLink` below is the whole module.exports object instead of the class.
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink"

const app = document.getElementById("app")


try {
  // Passing null as cable — we just want to hit the constructor
  const link = new ActionCableLink({ cable: null })
  app.textContent = `OK — ActionCableLink constructor worked, channelName=${link.channelName}`
} catch (err) {
  app.textContent = `BROKEN — ${err}`
  throw err
}
