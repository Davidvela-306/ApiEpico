async function fetchData(type) {
  const response = await fetch(`https://epic.gsfc.nasa.gov/api/${type}`);
  const data = await response.json();
  console.log(data);
  
  return data;
}

export default fetchData;
