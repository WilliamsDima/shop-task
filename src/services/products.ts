const allProductsUrl = process.env.BASE_URL as string

const getProducts = async (page: number = 1) => {
  // `?_page=${page}&_limit=12`

  try {
    const res = await fetch(allProductsUrl)
    const data = await res.json()
    return data
  } catch (error) {
    console.log('error getProducts', error)
  } finally {
  }
}

export default {
  getProducts,
}
