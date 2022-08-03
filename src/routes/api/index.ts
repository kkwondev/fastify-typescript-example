import { FastifyPluginAsync } from "fastify";
import healthRoute from "./health";

const api: FastifyPluginAsync = async (fastify) => {
    fastify.register(healthRoute, { prefix: '/health' })
}

export default api;