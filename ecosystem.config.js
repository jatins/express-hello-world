
module.exports = {
apps: [
  {
    name: 'express-hello-world',
    script: '/home/drtob/express-hello-world/releases/20200718161242/index.js',
    watch: true,
    autorestart: true,
    restart_delay: 1000,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
]
};