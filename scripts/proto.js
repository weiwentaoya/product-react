
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const ora = require('ora')

const spinner = ora()

const protoBase = path.resolve(__dirname, '../proto')

const allNames = fs.readdirSync(protoBase)

const allDirs = []
allNames.map((item) => {
  const stat = fs.statSync(path.resolve(protoBase, item))
  return stat.isDirectory() && allDirs.push(item)
})

allDirs.map((item, index) => {
  try {
    const protoPath = path.resolve(__dirname, `../proto/${item}/*.proto`)
    const outputPath = path.resolve(__dirname, `../src/proto/${item}`)

    // pb2json
    execSync(
      `pbjs -t json -o ${outputPath}.json ${protoPath}`
    )

    // pb2js
    // execSync(
    //   `pbjs -r -t json-module -w commonjs -o  ${outputPath}.pb.js ${protoPath}`
    // )

    // pb2ts
    // execSync(
    //   `npx pbjs -t static-module  ${protoPath} | npx pbts -o ${outputPath}.pb.d.ts -`
    // )
  } catch (error) {
    spinner.fail(chalk.red('Build error:', error))
    process.exit(1)
    return null
  }

  spinner.succeed(
    chalk.green(
      'Build file: The',
      chalk.underline.bold(item),
      'directory is successfully built.'
    )
  )

  return null
})

spinner.succeed('done ✨✨✨')
