// s.classList.add("badge-em-breve", "badge", "position-absolute", "bg-secondary");
// s.innerHTML='EM BREVE';
// TEMPORARIO PARA TER NOÇÃO DOS QUE FALTAM


let elementos = document.getElementsByClassName('card-body-menu');
console.log(elementos);

for(let el of elementos) {
    console.log(el.href.endsWith('#'));
    if(el.href.endsWith('#')){
        const span = Object.assign(document.createElement("span"), {classList:"badge-em-breve badge position-absolute bg-secondary", innerText:"EM BREVE"});
        el.classList.add('position-relative');
        el.appendChild(span);
    }
}

