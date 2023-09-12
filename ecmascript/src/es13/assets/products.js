import fetch from 'node-fetch'

const datas = await fetch("https://api.escuelajs.co/api/v1/products")
const products = await datas.json();

export {products}