

document.querySelector('#start').addEventListener("click", function(){

    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').value = initPerson.firstName;
    document.querySelector('#surnameOutput').value = initPerson.surname;
    document.querySelector('#genderOutput').value = initPerson.gender;
    document.querySelector('#middleNameOutput').value = initPerson.middleName;
    document.querySelector('#professionOutput').value = initPerson.profession;
    document.querySelector('#birthYearOutput').value = `${initPerson.birthYear} года`;

});

document.querySelector('#reset').addEventListener("click", function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').value = "";
    document.querySelector('#surnameOutput').value = "";
    document.querySelector('#genderOutput').value = "";
    document.querySelector('#middleNameOutput').value = "";
    document.querySelector('#professionOutput').value = "";
    document.querySelector('#birthYearOutput').value = "";    
});