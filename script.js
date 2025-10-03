const avanca = document.querySelectorA11('.btn-proximo');

avanca.forEach(button => {
    button.addEventlistener('click', function(){
       const atual = documnt.queryselector('.ativo');
       const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(proximopasso).classList.add('ativo'):
    })
})
  

