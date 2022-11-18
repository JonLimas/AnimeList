// learning variables
const apples = "thursday"
console.log("iphone")
console.log("booty")
console.log("happy")
console.log(apples)

// learning methods
const basketball = "leaves"
console.log(basketball.toUpperCase())
const pineapple = "spaceship"
console.log(pineapple.toLowerCase().toUpperCase())
const pen = "paper"
console.log(pen.repeat(100).toUpperCase().toLowerCase())


// // learning how to interact with page
// const bodyelement = document.body
// console.log(bodyelement)
// bodyelement.style.color = // "yellow"
// bodyelement.style.backgroundColor = // "black"

const toggleElement = document.getElementById("toggle")
const animeListElement = document.getElementById("anime-list")

toggleElement.onclick = () => {
    animeListElement.style.display = "none"
}
// const newAnimeTexts = document.createTextNode("new anime")
// animeListElement.appendChild(newAnimeTexts)

const nameAnime = document.getElementById("anime-name")
const ratingAnime = document.getElementById("anime-rating")

document.getElementById("form").onsubmit = (e) => e.preventDefault()

// listening for clicks
const addButton = document.getElementById("circle")

addButton.onclick = () => {
    console.log(nameAnime.name)
    console.log(nameAnime.value)
    console.log(ratingAnime.name)
    console.log(ratingAnime.value)

    const newAnimeName = document.createElement("p") // <p></p>
    const animeNameArr = nameAnime.value.split(" ")
    console.log(animeNameArr)
    const arrCapital = animeNameArr.map((Word)=> {
        return Word[0].toUpperCase() + Word.slice(1)
    })
    console.log(arrCapital)
    newAnimeName.textContent = arrCapital.join(" ") // nameAnime.value[0].toUpperCase() + nameAnime.value.slice(1) // <p>goku/p>
    const newRatingAnime = document.createElement("p")
    newRatingAnime.textContent = "rating; " + ratingAnime.value // <p>rating/p>
    animeListElement.appendChild(newAnimeName)
    animeListElement.appendChild(newRatingAnime)
    
} 




// learning arrays
const favnums = [1, 2, 3, 4];
console.log(favnums)
const favLetters = ["a", "b", "c", "d"]
console.log(favLetters)
console.log(favLetters[2])

const favwords = ["woo", "pizza", "wings", "pho"]
console.log(favwords[3])

const title = "attack on titan";
const titleArr = title.split(" ");
console.log(titleArr)
console.log(titleArr[0])
const newArrTitle = titleArr[0]
console.log(newArrTitle[0])
const titletwo = "pencils on paper"
const titleArr2 = titletwo.split(" ")
console.log(titleArr2)
console.log(titleArr2[0])
const newArr2Title = titleArr2[2]
console.log(newArr2Title[0])


 
// console.logtitleArr2.forEach((Word) => {
//     console.log(Word[0].toUpperCase() + Word.slice(1))
//     Word= Word[0].toUpperCase() + Word.slice(1)

// })

const capitalArr = titleArr2.map((Word)=> {
    return Word[0].toUpperCase() + Word.slice(1)
})
console.log(capitalArr)
