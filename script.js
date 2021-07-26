

let names=['akaki','vaja','galaktion','shota','vaxtang']
let lastname =['wereteli','razikashvili','tabidze','rustaveli','gorgasali']
let ponenumber=['555 66 77 88','555 66 77 88','222 44 55 66','555 22 33 11','456 67 89 45 ']
let email =['wereteli@gmail.com','razikashvili@gmail.com','tabidze@gmail.com','rustaveli@gmail.com','gorgasali@gmail.com']
let subject =['subject1','subject2','subject3','subject4','subject5']

let button = document.querySelector('.button');
button.addEventListener('click', function(){ 
let rendomnumber = Math.floor(Math.random() *4 );
console.log(rendomnumber)
document.querySelector('#first-name').value  = names[rendomnumber];
document.querySelector('#Last-name').value  = lastname[rendomnumber];
document.querySelector('#pone-number').value  = ponenumber[rendomnumber];
document.querySelector('#Email').value  = email[rendomnumber];
document.querySelector('#subject').value  = subject[rendomnumber];
});
