const workspace = require('./workspace.json')

const [project] = process.argv[3].split(':')

const projectRoot = workspace.projects[project]

const config = `${projectRoot}/tailwind.config.js`

module.exports = {
  plugins: {
    tailwindcss: {config},
    autoprefixer: {},
  },
}
