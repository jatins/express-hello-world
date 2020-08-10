module.exports = (shipit) => {
  require("shipit-deploy")(shipit);
  require("shipit-shared")(shipit);

  const appName = "express-hello-world2";

  shipit.initConfig({
    default: {
      deployTo: "/home/drtob/express-hello-world2",
      repositoryUrl: "https://github.com/drtobbyas/express-hello-world.git",
      keepReleases: 3,
      shared: {
        overwrite: true,
        dirs: ["node_modules"],
      },
    },
    production: {
      servers: "drtob@134.209.82.147",
    },
  });

  const path = require("path");
  const ecosystemFilePath = path.join(
    shipit.config.deployTo,
    "shared",
    "ecosystem.config.js"
  );

//   Our listeners and tasks will go here

  shipit.on("updated", () => {
    shipit.start("npm-install", "copy-config");
  });

  shipit.on("published", () => {
    shipit.start("pm2-server");
  });

  shipit.blTask("copy-config", async () => {
    const fs = require("fs");

    const ecosystem = `
module.exports = {
apps: [
  {
    name: '${appName}',
    script: '${shipit.releasePath}/index.js',
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
};`;

    fs.writeFileSync("ecosystem.config.js", ecosystem, function (err) {
      if (err) throw err;
      console.log("File created successfully.");
    });

    await shipit.copyToRemote("ecosystem.config.js", ecosystemFilePath);
  });

  
shipit.blTask('npm-install', async () => {
  shipit.remote(`cd ${shipit.releasePath} && yarn install --production`);
});

shipit.blTask('pm2-server', async () => {
  await shipit.remote(`pm2 delete -s ${appName} || :`);
  await shipit.remote(
    `pm2 start ${ecosystemFilePath} --env production --watch true`
  );
});

};
