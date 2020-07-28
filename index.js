document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score')
    const highestScoreDisplay = document.getElementById('hScore')
    var oldScore = localStorage.getItem('hScore');
    highestScoreDisplay.innerHTML = oldScore;
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid');
    var x = document.getElementById("myBtn");
    x.style.display = "none";

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squares = []

    let up = new Audio();
    let right = new Audio();
    let left = new Audio();
    let down = new Audio();
    let powerpellet = new Audio();
    let eat = new Audio();
    let dead = new Audio();
    let winning = new Audio();

    up.src = "up.mp3";
    right.src = "right.mp3";
    left.src = "left.mp3";
    down.src = "down.mp3";
    powerpellet.src = "powerpellet.aac";
    eat.src = "eat.mp3";
    dead.src = "dead.mp3";
    winning.src = "winning.mpeg";

    //create your board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
            //add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
        }
    }
    createBoard()
    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')
    //get the coordinates of pacman on the grid with X and Y axis
    // function getCoordinates(index) {
    //   return [index % width, Math.floor(index / width)]
    // }
    // console.log(getCoordinates(pacmanCurrentIndex))
    //move pacman
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        switch (e.keyCode) {
            case 37:
                //left
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= 1
                if (squares[pacmanCurrentIndex - 1] === squares[363]) {
                    pacmanCurrentIndex = 391
                }
                left.play();
                break
            case 38:
                //up
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= width
                up.play();
                break
            case 39:
                //right
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += 1
                if (squares[pacmanCurrentIndex + 1] === squares[392]) {
                    pacmanCurrentIndex = 364
                }
                right.play();
                break
            case 40:
                //down
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += width
                down.play();
                break
        }
        squares[pacmanCurrentIndex].classList.add('pac-man')
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }
    document.addEventListener('keyup', movePacman)
    // what happens when you eat a pac-dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
            eat.play();
        }
    }
    //what happens when you eat a power-pellet
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
            powerpellet.play();
        }
    }

    //make the ghosts stop flashing
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }
    //create ghosts using Constructors
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }
    //all my ghosts
    ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]
    //draw my ghosts onto the grid
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
    })
    //move the Ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))
    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]
        ghost.timerId = setInterval(function () {
            //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
            if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall')) {
                //remove the ghosts classes
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                //move into that space
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                //else find a new random direction ot go in
            } else direction = directions[Math.floor(Math.random() * directions.length)]
            //if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }
            //if the ghost is currently scared and pacman is on it
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
            checkForGameOver()
        }, ghost.speed)
    }

    //check for a game over
    function checkForGameOver() {
        /*if (squares[pacmanCurrentIndex].classList.contains('pac-man') &&
         !squares[pacmanCurrentIndex].classList.contains('ghost') &&*/

        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            scoreDisplay.innerHTML = 'GAME OVER';
            setTimeout(function(){ alert("Click on NEW GAME to play again!"); }, 500)
            dead.play();
            
            var x = document.getElementById("myBtn");
            x.style.display = "block";


            var oldScore = parseInt(localStorage.getItem('hScore'));
            //2 is my old score and current is 5
            if (oldScore > score) {
               
            } else {
                //2 > 5 false so go else
                localStorage.setItem('hScore', score);
                highestScoreDisplay.innerHTML = score;
            }
            //setTimeout(function(){ alert("Game Over"); }, 500)
            
        }
    }
    //check for a win - more is when this score is reached
    function checkForWin() {
        console.log(score);
        if (score === 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function () { alert("You have WON!"); }, 500)
            winning.play();
            var img = document.createElement("img");
            img.src = "youwin.jpg";
            // var imgClass = document.getElementsByClassName("grid")
            var src = document.getElementById("win");
            src.innerHTML = "";
            src.appendChild(img);

            var x = document.getElementById("myBtn");
            x.style.display = "block";

            var oldScore = parseInt(localStorage.getItem('hScore'));
            if (oldScore > score) {
            } else {
                localStorage.setItem('hScore', score);
                highestScoreDisplay.innerHTML = score;
            }
            // document.getElementById("text").innerHTML = "Congratulations";
        }
    }
})
