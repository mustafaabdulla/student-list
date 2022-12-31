function addStudent() {
let name = document.getElementById('nameInput').value;
let classValue = document.getElementById('classInput').value;
let gender = document.getElementById('genderInput').value;

let successValue;
let success = document.getElementsByName('suksesi')
for(let i = 0; i < success.length; i++) {
    if (success[i].checked){
   successValue = success[i].value;
    }
}
if (gender === '-----------') {
alert('Please select your gender.')
return ;
} else if (successValue == undefined) {
alert('Please do not leave the success empty.')
return ;
} else if (classValue > 9 || classValue < 1) {
  alert('Your class cannot be below 1 or above 9.')
  return ;
} else if (name === '') {
  alert('Please fill in your name.')
  return ;
}

let td1 = document.createElement('td')
td1.innerText = name;

let td2 = document.createElement('td')
td2.innerText = classValue;

let td3 = document.createElement('td')
td3.innerText = gender;

let td4 = document.createElement('td')
td4.innerText = successValue;

let tr = document.createElement('tr')

tr.append(td1, td2, td3, td4)

document.getElementById('table').append(tr);

if(successValue == 5){
tr.style.backgroundColor='green'
} else if(successValue == 4 || successValue == 3){
tr.style.backgroundColor='yellow'
} else{
tr.style.backgroundColor='red'
}
}