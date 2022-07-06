import Router from './router.js'
import RouteResolver from './route_resolver.js'

export default function router(requestParser, routeResolver = new RouteResolver()) {
  return new Router(requestParser, routeResolver)
}
