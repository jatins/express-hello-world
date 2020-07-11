module.exports = {
  apps: [
    {
      name: "hell",
      script: "index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      watch: ".",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "drtob",
      host: "jozech.com",
      ref: "origin/master",
      repo: "https://github.com/drtobbyas/express-hello-world.git",
      path: "/home/drtob/jozechlaw",
      "pre-deploy-local": "",
      "post-deploy":
        "yarn install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
