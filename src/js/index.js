const vw = innerWidth;
const imgHero = document.querySelector('figure.main-img > img');
vw < 1024 ? imgHero.src = 'src/assets/images/hero-mobile.jpg' : imgHero.src = 'src/assets/images/hero-desktop.jpg';

const validacao = () => {
    const btn = document.querySelector('button.btn');
    const inputEmail = document.querySelector('input#email');
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const erroSpan = `<span class="spanError">Please provide a valid email</span>`;
    const erroImg = `<img src="src/assets/images/icon-error.svg" class="img-erro" alt="icon error">`;

    const validarEmail = () => {
        
        if(!regExp.test(inputEmail.value)) {
            inputEmail.classList.add('erro');
            inputEmail.insertAdjacentHTML('beforebegin', erroSpan);
            inputEmail.insertAdjacentHTML('beforebegin', erroImg);
        }  else {
            const spanError = document.querySelector('span.spanError');
            const imgErro = document.querySelector('img.img-erro');
            spanError.remove();
            imgErro.remove();
            inputEmail.classList.remove('erro');

        }
    }
    
    btn.addEventListener('click', validarEmail)
}

validacao();