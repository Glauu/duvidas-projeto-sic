function carregaInstrucoes (){
  var tiraDuvida = {

    nav:{ topico01:"Perguntas",     
         topico02:"Assinalações", 
         topico03:"Estudo de Casos", 
         topico04:"Códigos",},
  
    orientacoes01:{ 
      título:"Códigos",     
      texto:"Códigos alfanuméricos identificam individualmente os polígonos correspondentes às áreas identificadas em Processos Admnistrativos de CGPATRI C - corresponde ao desenho de uma área municipal. Polígonos reaproveitados pelos técnicos de SI podem ter códigos iniciados com C. A - corresponde à localização de uma área municipal que não pertencia a um croqui no momento de sua anotação. Esses registros diferem dos polígonos de assinalação pois foram migrados do Arquivo de Fichas de Anotações Diversas e nem todos os expedientes da ABA ADs possuem um desenho de assinalação dentro do Qgis.",},
  
  orientacoes02:{
    título:"Utilizando Códigos",
    texto:"Podemos reutilizar registros de expedientes já cadastrados na Camada Croqui ou na ABA AD's, ou seja, eles não precisam ser duplicados quando o código de assinalação estiver preenchido com: Apenas uma letra: S C ou A Caracter nullo: NULL Registro duplicado: código e demais informações do registro idênticas a outro configurando duplicidade.",},

  orientacoes03: {
  título:"Indexação de Novos Expedientes", 
  pergunta01:"Será feito o preenchimento do campo 'Nº de Croqui' e 'Área M' para expedientes novos?", 
  resposta01:"ABA Expedientes Não. Expedientes novos que passam pela primeira vez no departamento para informar e tem o desenho de sua assinalação feita no Qgis, não recebem informação no campo Nº do Croqui ou Área M para não serem vinculados à camada croquis do Projeto-Sic.", 
  resposta02:"ABA Assinalação Indiferente, pois o preenchimento do campo nessa ABA não vincula os registros à camada Croqui. Não é preciso editar o campo para apagar essa informação quando o mesmo estiver preenchido.",
  pergunta02:"Quando preencher os campos Nº de Croqui e Área M?",
  resposta02:"xpedientes de informações anteriores que foram anotados na Pasta de Croqui física e estão sendo migrados para sistema digital iinuam recebendo informações nos campos Nº do Croqui e Área M, esses expedientes antigos terão vínculo com a pasta de croqui.",
  pergunta03:"O campo CAP será preenchido?",
  resposta03:"O preenchimento do campo CAP é opcional, pois não há vinculação feita a partir do preenchimento desse campo no cadastro digital. Essa informação deve ser incluída no campo 'Observações_planilha' para que apareça no relatório de informações a ser incluído no SEI.",},
  };
  console.log(tiraDuvida);
  
}
carregaInstrucoes()


const botao = document.querySelector('#menu');
const boxConteudo = document.querySelectorAll('.tema');

function mudaConteudo(){

  let j = 0;
  let i = 0;
  const boxAtual = boxConteudo[i];
  const botaoAtual = botao[j];
  const atSection = boxAtual.atributes.URL.value
  const atListItem = botaoAtual.atributes.URL.value
  for (i = 0; i < boxConteudo.lenght; i++){
    for(j = 0; j < botao.lenght; j++){
  
      if (atListItem === atSection){

        boxAtual.classList.add('aberto');
        console.log(boxAtual);
      }
      else {
      return(1);
      }
    }
  }
}
botao .onclick = function(){
  mudaConteudo()
}
