if (typeof window === 'undefined') {
  const { server } = require('./server')
  if (server) {
    server.listen()
  }
} else {
  const { worker } = require('./browsers')
  worker.start()
}
export {}
