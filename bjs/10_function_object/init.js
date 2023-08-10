let firstNameNode = document.querySelector('#firstNameOutput'),
    surnameNode = document.querySelector('#surnameOutput'),
    lastNameNode = document.querySelector('#lastNameOutput'),
    genderNode = document.querySelector('#genderOutput'),
    professionNode = document.querySelector('#professionOutput'),
    birthDateNode = document.querySelector('#birthDateOutput'),
    firstNameDefaultText = firstNameNode.innerText,
    surnameDefaultText = surnameNode.innerText,
    lastNameDefaultText = lastNameNode.innerText,
    genderDefaultText = genderNode.innerText,
    professionDefaultText = professionNode.innerText,
    birthDateDefaultText = birthDateNode.innerText;

function init() {
    const initPerson = personGenerator.getPerson();
    firstNameNode.innerText = initPerson.firstName;
    surnameNode.innerText = initPerson.surname;
    lastNameNode.innerText = initPerson.lastName;
    genderNode.innerText = initPerson.gender;
    professionNode.innerText = initPerson.profession;
    birthDateNode.innerText = initPerson.birthDate + ' ' + initPerson.birthMonth + ' ' + initPerson.birthYear + ' года рождения';
}

function clearPerson() {
    firstNameNode.innerText = firstNameDefaultText;
    surnameNode.innerText = surnameDefaultText;
    lastNameNode.innerText = lastNameDefaultText;
    genderNode.innerText = genderDefaultText;
    professionNode.innerText = professionDefaultText;
    birthDateNode.innerText = birthDateDefaultText;
}

window.onload = function() {
    init();
};
