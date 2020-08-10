
module.exports = {
apps: [
  {
    name: 'express-hello-world2',
    script: '/home/drtob/express-hello-world2/releases/20200718165552/index.js',
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