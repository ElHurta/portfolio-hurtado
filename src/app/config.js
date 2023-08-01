export const api_config = {
    api_host: `http://${process.env.API_HOST || '127.0.0.1'}`,
    api_port: process.env.API_PORT || '',
}