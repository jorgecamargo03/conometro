const minutesEL = document.getElementById('minutes')
const milisegundosEL = document.getElementById('miliseconds')
const secondsEL = document.getElementById('seconds')
const btnpause = document.getElementById('pause')
const btnstart = document.getElementById('start')
const btnreset = document.getElementById('reset')
const btnresume = document.getElementById('resume')

let isRunning = false
let interval
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

btnreset.addEventListener('click',reset)
btnresume.addEventListener('click',resume)
btnpause.addEventListener('click',pause)
btnstart.addEventListener('click',startTimer)

function startTimer(){
 
     

    if(!isRunning){
        isRunning = true
    }else{
        return
    }
  

    isPaused = false

      interval = setInterval(()=>{
        if(isPaused) return

            miliseconds += 10

         if(miliseconds===1000){
            miliseconds=0
            seconds++

         }if(seconds===60){
             seconds=0
             minutes++
         }

        secondsEL.textContent = format(seconds)
        milisegundosEL.textContent = formatMillis(miliseconds)
        minutesEL.textContent = format(minutes)
       
        btnstart.style.display='none'
         btnpause.style.display='block'
        },10)

    

}
function format(time){
    return time < 10 ? `0${time}` : time
   }
   function formatMillis(time){
       return time < 100 ? `${time}`.padStart(3,"0") : time
   }
function pause(){
    isPaused=true
    btnresume.style.display = 'block'
    btnpause.style.display = 'none'
}
function resume(){
    isPaused = false
     btnpause.style.display = 'block'
     btnresume.style.display = 'none'
}
function reset(){
    isPaused = false
    isRunning = false
    clearInterval(interval)


    minutes=0
    seconds=0
    miliseconds=0

    minutesEL.textContent = "00"
    secondsEL.textContent = "00"
    milisegundosEL.textContent = "000"

     btnstart.style.display = 'block'
     btnpause.style.display = 'none'
    btnresume.style.display = 'none'



}
