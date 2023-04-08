let userName = document.querySelector('.user__name');
let info = document.querySelector('.user__info');
let userInfo = document.querySelectorAll('.user__info-text');
let editForm = document.forms.editForm;
let elements = editForm.elements;
let editProfBtn = document.querySelector("#editProf");

if (localStorage.getItem('htmlLS')) {
    info.innerHTML = localStorage.getItem('htmlLS');
}

editProfBtn.addEventListener('click', () => {
    editForm.classList.add('active');
})


elements.closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editForm.classList.remove('active');
    editForm.reset();
})


elements.saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userName.textContent = elements.userName.value;
    userInfo[0].textContent = elements.city.value;
    userInfo[1].textContent = elements.learnLocation.value;
    localStorage.setItem('htmlLS', info.innerHTML);
    editForm.reset();
})

localStorage.setItem('Name', 'Polina');
console.log(localStorage.getItem('Name'));