const { build } = require('esbuild')

const options = {
  bundle: true,
  entryPoints: ['./index.js'],
  external: ["mongodb-client-encryption"],
  outfile: './dist/index.js',
  platform: 'node',
  target: "node12",
}
build(options).then(() => console.log("Successfully built!")).catch(() => process.exit(1))