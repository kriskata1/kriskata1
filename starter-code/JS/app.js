//destinations page
let allButtons = document.querySelectorAll(".allbuttons button")
let namePlanet = document.getElementById("name")
let imgPlanet = document.getElementById("img")
let descPlanet = document.getElementById("desc")
let distPlanet = document.getElementById("dist")
let travPlanet = document.getElementById("trav")

//destination data
let destination = [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]

  //from json to javascript object
let json1 = JSON.parse(JSON.stringify(destination))

//Destination info change
allButtons.forEach(button => {

    button.addEventListener("click", () => {

        allButtons.forEach(active => {
            active.classList.remove("active")
        })

        button.classList.add("active")

        json1.forEach(item => {

            if (button.textContent.toLowerCase() == item.name.toLowerCase()){       //kogato se checkva neshto vinagi se priravnqvat kum lowercase
                namePlanet.textContent = item.name.toUpperCase()
                imgPlanet.src = item.images.png
                descPlanet.textContent = item.description
                distPlanet.textContent = item.distance
                travPlanet.textContent = item.travel
            }
        })
    })
});

//crew page

let prevarr = document.getElementById("prevarr")
let nextarr = document.getElementById("nextarr")
let img2 = document.getElementById("img2")
let name2 = document.getElementById("name2")
let info2 = document.getElementById("info2")
let job = document.getElementById("job")
let heading = document.getElementById("heading")
let arrow = document.querySelector(".st")

//crew data
let crew = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

//from json to javascript object
let json2 = JSON.parse(JSON.stringify(crew))

//index for data array
let counter = 0;

//nextarrow when clicked
nextarr.addEventListener("click", next)
  
//function for next crew member
function next() {

  //array index increases til the end of the array
  if (counter < json2.length - 1){
    counter++
  } else {
    counter = 0;
  }

  //info change
    img2.src = json2[counter].images.png
    name2.textContent = json2[counter].name
    info2.textContent = json2[counter].bio
    job.textContent = json2[counter].role
}

//previous arrow when clicked
prevarr.addEventListener("click", () => {

  //when array index becomes 0 it becomes array's last index number
  if (counter == 0){
    counter = json2.length - 1;
  } else {
    counter--
  }
  
  //info change 2
    img2.src = json2[counter].images.png
    name2.textContent = json2[counter].name
    info2.textContent = json2[counter].bio
    job.textContent = json2[counter].role
})

//run next function every 5sec
setInterval(next,5000)

// //meet your crew heading animation
// arrow.addEventListener("click", () => {
//   heading.classList.add("hoverClick")
//   heading.classList.remove("blur")
//   arrow.style.transform = "rotate(180deg)"
//   setTimeout(() => arrow.style.filter = "blur(100px)",500)
// })