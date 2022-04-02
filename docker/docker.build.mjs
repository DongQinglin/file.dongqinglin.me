import child_process from 'child_process';

import pkg from '../package.json';

const pwd = () => child_process.exec(`pwd`, (error, stdout, stderr) => {
  if (error) return new Error(error)
  console.log(stdout)
  build()
})

const build = () => child_process.exec(`docker build --build-arg port=${pkg.port} -f ./docker/Dockerfile  -t ${pkg.author}/${pkg.name}:${pkg.version} .`, (error, stdout, stderr) => {
  if (error) return new Error(error)
  console.log(stdout)
  console.log(`Building is sucessful`)
  push()
})


const push = () => child_process.exec(`docker push ${pkg.author}/${pkg.name}:${pkg.version}`, (error, stdout, stderr) => {
  if (error) return new Error(error)
  console.log(stdout)
  console.log(`Pushing is sucessful`)
})

pwd()