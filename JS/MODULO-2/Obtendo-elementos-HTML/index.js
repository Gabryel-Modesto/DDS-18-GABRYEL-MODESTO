function show() {
    const contaticList = document.getElementById('contact-list');
    console.log(contaticList);

    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    const contaticInputs = document.getElementsByClassName('contatic-input');
    console.log(contaticInputs);

    const contatics = document.querySelectorAll('#contatic-list > li > label');
    console.log(contatics);

    const contatic1 = document.getElementsByName('contatic1');
    console.log(contatic1);

    const firsContatic = document.querySelector('#contatic-list > li > label');
    console.log(firsContatic);

};