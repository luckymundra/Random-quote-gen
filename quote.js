let button = document.querySelector("button")

 async function Getmore(){
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await response.json()
    let heading = document.querySelector("h5")
    heading.innerText = joke.value
    form.reset()
 }
 
 button.addEventListener("click",Getmore)
//  console.log("button")