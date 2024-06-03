async function getData() {
  // const res = await fetch("http://cms-caritravel.test/api/postdata", {
  const res = await fetch("https://backend.caritravel.com/api/postdata", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log(data); // Tambahkan ini untuk melihat data yang dikembalikan
  return data;
}

export const getDetailProductsPage = async (id: number) => {
  const products = await getData();
  const singleItem = products.find((product: any) => {
    // console.log(product.id); // Log setiap ID untuk memeriksa
    return product.id === id;
  });

  // console.log(singleItem); // Ini akan menunjukkan produk yang ditemukan atau undefined

  return singleItem;
};
