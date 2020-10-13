
const output = document.getElementById('output'),
      text = document.querySelector('.textLimits'),
      event = ['change','keyup','keydown'];

event.forEach(a=>text.addEventListener(a,countText))

const maxLength = 20, minLength = 8;

function countText(e){
  let count = text.value.length;
  if(count >= maxLength){
  text.value = text.value.substring(0,maxLength);
  output.innerText = 'Warning : Limit Exceeded.';
    output.classList.add('red')
  } else if(count >= minLength){
    output.innerText = `Warning : You have ${maxLength-count} count left`;
    output.classList.add('red')
  }else{
    output.innerText = '';
  }
}

