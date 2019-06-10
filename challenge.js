const counter = document.querySelector('#counter')
let timer
let status = 'not paused'

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('click', handleClick)

function init() {
  timer = window.setInterval(() => counter.innerText++, 1000)
}

function handleClick(e) {
  e.preventDefault()
  if (status !== 'paused') {
    if (e.target.id === '-') {
      counter.innerText--
    }
    if (e.target.id === '+') {
      counter.innerText++
    }
    if (e.target.id === '<3') {
      likes()
    }
    if (e.target.id === 'submit') {
      addComment()
    }
  }
  if (e.target.id === 'pause') {
    pause(e)
  }
}

function likes() {
  let number = document.querySelector(`ul[class="likes"] > li[data-num="${counter.innerText}"]`)
  if (number) {
    number.querySelector("span").innerText++
  } else {
    document.querySelector('.likes').innerHTML += `<li data-num=${counter.innerText}>${counter.innerText} has been liked <span>1</span> time</li>`
  }
}

function pause(e) {
  if (e.target.innerText === 'pause') {
    e.target.innerText = 'resume'
    clearInterval(timer)
    status = 'paused'
  } else {
    e.target.innerText = 'pause'
    init()
    status = 'not paused'
  }
}

function addComment() {
  const comment = document.querySelector('#comment')
  const list = document.querySelector('#list')
  console.log(list)
  list.innerHTML += `<p>${comment.value}</p>`
  comment.value = ''
}