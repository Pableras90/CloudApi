console.log('Running front app');

fetch('http://localhost:3000/api/houses/2',{
  credentials: "include",
})

  .then((response) => {
    return response.json();
  })
  .then((house) => {
    console.log({ house });
  });