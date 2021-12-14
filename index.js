// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(`${name}`)
    }
    function destructivelyPrependCat(name) {
        cats.unshift(`${name}`)
    }
    function destructivelyRemoveLastCat(name) {
        cats.pop(`${name}`)
    }
    function destructivelyRemoveFirstCat(name) {
        cats.shift(`${name}`)
    }

    function appendCat() {
        const appendCat = [...cats, "Broom"]
        return appendCat
    }
    function prependCat() {
        const prependCat = ["Arnold", ...cats]
        return prependCat
    }
    function removeLastCat(slice) {
        const removeLastCat = cats.slice(0,-1)
    }




