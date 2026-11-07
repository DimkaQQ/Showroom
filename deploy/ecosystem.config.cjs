module.exports = {
  apps: [
    {
      name: "mirelli-contact",
      script: "server/contact/index.mjs",
      cwd: "/opt/docker/showroom",
      max_memory_restart: "100M",
      env: { NODE_ENV: "production" },
    },
  ],
};
