import { FastifyPluginAsync } from "fastify";

const healthRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get('/check', async (request, reply) => {
        reply.send({ message: 'Server ON' })
    })
}

export default healthRoute