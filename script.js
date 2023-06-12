const size16 = document.querySelector('#s16')
const size32 = document.querySelector('#s32')
const size64 = document.querySelector('#s64')
const size128 = document.querySelector('#s128')

s16.addEventListener("click", () => {
    createBoard(16)
})

s32.addEventListener("click", () => {
    createBoard(32)
})

s64.addEventListener("click", () => {
    createBoard(64)
})

s128.addEventListener("click", () => {
    createBoard(128)
})


document.addEventListener("DOMContentLoaded", createBoard(16))
function createBoard(size) {
    let board = document.querySelector(".board")
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black"
        })
        div.style.backgroundColor = "yellow"
        board.insertAdjacentElement("beforeend", div)

    }
}

