export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ty60NfqFzLeb9YwboDJifogOF7EFFgXQ&limit=10&q=${category}`;
  const resp =  await fetch(url);
  const {data} = await resp.json();
  console.log(data)
  const gifs = data.map(img => ({
      id : img.id,
      title : img.title,
      url : img.images.original.url
  }))
  return gifs;
}