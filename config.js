module.exports = {
  Bot: {
    token: "",
    prefix: "$",
    intents: "all",
    database: {
      db: 'default',
      tables: ["main"],
      path: './database/',
      promisify: false
    }
  }
}
