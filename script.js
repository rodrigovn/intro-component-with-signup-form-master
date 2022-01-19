function validateEmail(val){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (val.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function validatetext(val){
  if (val.length == 0) {
    return false;
  } else {
    return true;
  }
}
function validadeinput(input,btn,err,invalid){
  btn.addEventListener('click', ()=>{
  val = input.value;
  if (input.type == "email") {
    result = validateEmail(val);
  } else {
    result = validatetext(val)
  }
  if(result == false){
    err.style.opacity = '1';
    invalid.style.opacity = '1';
    input.style.border = '1.5px solid red';
  }
  else{
    thanks.style.opacity = '1';
    input.style.border = '1.5px solid green';
  }
  })

  input.addEventListener('input', ()=>{
    err.style.opacity = '0';
    invalid.style.opacity = '0';
    input.style.border = '1px solid hsl(0, 36%, 70%)';
  })

  input.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { 
      btn.click();
    }
  });
}

var input,btn,err,invalid;
input = document.getElementById('input1');
btn = document.getElementById('button-claim-free-trial');
err = document.getElementById('err1');
invalid = document.getElementById('invalid-first-name');
validadeinput(input,btn,err,invalid);

var input,btn,err,invalid;
input = document.getElementById('input2');
btn = document.getElementById('button-claim-free-trial');
err = document.getElementById('err2');
invalid = document.getElementById('invalid-last-name');
validadeinput(input,btn,err,invalid);

var input,btn,err,invalid;
input = document.getElementById('input3');
btn = document.getElementById('button-claim-free-trial');
err = document.getElementById('err3');
invalid = document.getElementById('invalid-email');
validadeinput(input,btn,err,invalid);

var input,btn,err,invalid;
input = document.getElementById('input4');
btn = document.getElementById('button-claim-free-trial');
err = document.getElementById('err4');
invalid = document.getElementById('invalid-password');
validadeinput(input,btn,err,invalid);