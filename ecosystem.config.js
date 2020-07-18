
module.exports = {
apps: [
  {
    name: 'hello',
    script: '/home/drtob/hello/releases/20200718103107/index.js',
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