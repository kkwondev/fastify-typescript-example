import fastify, { FastifyReply, FastifyRequest } from "fastify";
import compress from '@fastify/compress'
import routes from "./routes";

const server = fastify({
    logger: true
})
server.register(compress)
server.register(routes)


server.listen({ port: 4000 })

