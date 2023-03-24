//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = "https://api.nasa.gov/planetary/apod?api_key=bv8brTyUEEA31vxIRZu3vQ70uoGmAjqIPSnUlze1"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector(".title").textContent = data.title
        document.querySelector(".explanation-description").textContent = data.explanation
        document.querySelector("img").src = data.hdurl
        document.querySelector(".date").textContent = data.date

      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
}

