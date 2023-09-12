const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2004-02-31')

console.table(matchers)