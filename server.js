
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`Testing travis ${process.env.TRAVIS_TESTING}`)
    await sleep(5000);
  }
}

main();
