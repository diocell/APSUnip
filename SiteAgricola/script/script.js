const meusProdutos = [
  {title: "Mel", id: "1", pag: "produtos.html"},
  {title: "Pólem", id: "2", pag: "produtos.html"},
  {title: "Própolis", id: "3", pag: "produtos.html"},
  {title: "Geleia Real", id: "4", pag: "produtos.html"},
  {title: "Cera", id: "5", pag: "produtos.html"},
  {title: "Aptoxina", id: "6", pag: "produtos.html"},
  {title: "Abelha Africana (Apis mellifera scutellata)", id: "7", pag: "tiposAbelha.html"},
  {title: "Abelha Europeia (Apis mellifera mellifera)", id: "8", pag: "tiposAbelha.html"},
  {title: "Abelha Italiana (Apis mellifera ligustica)", id: "9", pag: "tiposAbelha.html"},
  {title: "Abelha Carnica (Apis mellifera carnica)", id: "10", pag: "tiposAbelha.html"}
]

const ul = document.getElementById('listaProdutos');
    meusProdutos.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${item.pag}#${item.id}">
          <span class="item-name"> ${item.title} </span>
        </a>
      `;
      ul.appendChild(li);
    });

function filtrar(){
  var input, filter, ul, li, a, i, txtValue, count = 0

  //PEGAR OS ELEMENTOS HTML
  input = document.getElementById('txtBusca');
  ul = document.getElementById('listaProdutos');
  
  //FILTRO  
  filter = input.value.toUpperCase();

  //PEGAR TODAS AS LT'S DA LISTA
  li = ul.getElementsByTagName("li");

  //PERCORRENDO TODOS OS LI'S
  for (i = 0; i < li.length; i++){
    //PEGAR A TAG DO ELEMENTO PERCORRIDO
    a = li[i].getElementsByTagName("a")[0];
    //PEGAR O TEXTO DENTRO DA TAG a
    txtValue = a.textContent || a.innerText;
    //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM O TEXTO DA TAG A
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      //VALOR BATEU
      li[i].style.display = "";  
      //INCREMENTAR O CONTADOR
      count++

      span = li[i].querySelector(".item-name");
      if(span){
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match)=>{
          return "<strong>" + match + "</strong>";
        })
      }
    } else {
      li[i].style.display = "none";
    }
  }

  //VARIAVEL PARA PEGAR O VALOR DA INPUT E SE FOR ZERADA, NAO MOSTRAR NADA
  inputValor = input.value;
  
  if(count === 0 ){
    ul.style.display = "none";
  } if(inputValor === "") {
    ul.style.display = "none";
  } 
  else {
    ul.style.display = "block";
  }

  document.addEventListener('click', function(event){
    if(!ul.contains(event.target)) {
      ul.style.display = "none";
    }
  })

  
}