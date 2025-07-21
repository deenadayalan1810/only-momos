function animateCounter(element, start, end, duration) {
  let range = end - start,
     stepTime = Math.abs(Math.floor(duration / range)),
      startTime = new Date().getTime(),
      endTime = startTime + duration,
      timer

  function run() {
    let now = new Date().getTime(),
        remaining = Math.max((endTime - now) / duration, 0),
        value = Math.round(end - (remaining * range))
    
    element.innerHTML = value
    
    if (value === end) {
      clearInterval(timer)
      element.innerHTML = value + '+'
    }
  }

  timer = setInterval(run, stepTime)
  run()
}

const counter = document.querySelectorAll('.counter')
const startValue = parseInt(counter.getAttribute('data-start'), 10)
const endValue = parseInt(counter.getAttribute('data-end'), 10)
const duration = parseInt(counter.getAttribute('data-duration'), 10)

animateCounter(counter, startValue, endValue, duration)