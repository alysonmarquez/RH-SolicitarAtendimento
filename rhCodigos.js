/ Função genérica para ocultar campos
function ocultarCampos(campos) {
  campos.forEach(campo => schema[campo].hide = true);
}

// Função genérica para exibir campos
function exibirCampos(campos) {
  campos.forEach(campo => schema[campo].hide = false);
}

// TRANSFERÊNCIA ENTRE EMPRESAS
function configurarTransferenciaEntreEmpresas() {
  if (data.sltSELECTE_EMPRESA_ALOCADO === "Não") {
    ocultarCampos(["txtINFORME_RH_CLIENTE_ALOCADO"]);
  } else if (data.sltSELECTE_EMPRESA_ALOCADO === "Sim") {
    exibirCampos(["txtINFORME_RH_CLIENTE_ALOCADO"]);
  }
}

// SEGURANÇA DO TRABALHO - ENQUADRAMENTO PCD
function configurarEnquadramentoPCD() {
  if (data.sltSELECT_ENQUADRAMENTO_PCD === "Sim") {
    ocultarCampos(["txtNOME_COMPLETO_USUARIO_PCD"]);
  } else if (data.sltSELECT_ENQUADRAMENTO_PCD === "Nao") {
    exibirCampos(["txtNOME_COMPLETO_USUARIO_PCD"]);
  }
}

// SOLICITAÇÃO DE PPP
function configurarSolicitacaoPPP() {
  if (data.sltSELECT_MUDANCA_CARGO_PPP === "Sim") {
    exibirCampos(["txtDESCRICAO_INFORME_CARGO_ANTERIOR_PPP"]);
  } else if (data.sltSELECT_MUDANCA_CARGO_PPP === "nao") {
    ocultarCampos(["txtDESCRICAO_INFORME_CARGO_ANTERIOR_PPP"]);
  }

  if (data.sltHOUVE_ACIDENTE_TRABALHO_PPP === "Sim") {
    exibirCampos(["txtINFORME_NUMERO_CAT_PPP"]);
  } else if (data.sltHOUVE_ACIDENTE_TRABALHO_PPP === "Nao") {
    ocultarCampos(["txtINFORME_NUMERO_CAT_PPP"]);
  }
}

// CRACHÁ - SOLICITAR CRACHÁ
function configurarSolicitacaoCracha() {
  if (data.sltPEDIDO_CRACHA_TITULAR === "Sim") {
    ocultarCampos(["txtSOLICITAR_CRACHA_NOME_PEDIDO"]);
  } else if (data.sltPEDIDO_CRACHA_TITULAR === "Não") {
    exibirCampos(["txtSOLICITAR_CRACHA_NOME_PEDIDO"]);
  }

  if (data.sltTIPO_ENVIO_SOLICITACAO_CRACHA === "Retirada") {
    ocultarCampos(["txaTIPO_ENVIO_CRACHA"]);
  } else if (data.sltTIPO_ENVIO_SOLICITACAO_CRACHA === "Envio") {
    exibirCampos(["txaTIPO_ENVIO_CRACHA"]);
  }
}

// PONTO - ALTERAÇÃO DE ESCALA DE HORÁRIO
function configurarPontoEscalaHorario(){
  if(data.sltINFORME_CICLO_ESCALA_OPCAO === "outros"){
    exibirCampos(["txtINFORME_OUTRO_CICLO_ESCALA"]);
  }
  else if(["plantão", "vinteQuatroDiasSete", "cincoDois", "seisUm",].includes(data.sltINFORME_CICLO_ESCALA_OPCAO)){
    ocultarCampos(["txtINFORME_OUTRO_CICLO_ESCALA"]);
  }
}

// PONTO - DÚVIDA ORIENTAÇÃO
function configurarPontoDuvidaOrientacao() {
  const todosCampos = [
    "lnkLINKGUIA_PRINCIPAL",
    "lnkLINK_CONVERTER_BANCO_HORAS",
    "lnkLINK_ESQUECEU_BATER_PONTO",
    "lnkLINK_EXTENSAO_JORNADA",
    "lnkLINK_MARCACAO_PONTO_APP",
    "lnkLINK_PEDIDO_AUSENCIA_FERIAS",
    "lnkLINK_SICRONIZACAO_APP_MOBILE",
    "radRADIO_ESCOLHA",
    "txaDESCRICAO_DUVIDA_MARCACAO_PONTO"
  ];

  ocultarCampos(todosCampos);

  if (data.sltPONTO_DUVIDA_ORIENTACAO === "baseQualitor") {
    exibirCampos([
      "lnkLINKGUIA_PRINCIPAL",
      "lnkLINK_CONVERTER_BANCO_HORAS",
      "lnkLINK_ESQUECEU_BATER_PONTO",
      "lnkLINK_EXTENSAO_JORNADA",
      "lnkLINK_MARCACAO_PONTO_APP",
      "lnkLINK_PEDIDO_AUSENCIA_FERIAS",
      "lnkLINK_SICRONIZACAO_APP_MOBILE"
    ]);
  }

  if (data.sltPONTO_DUVIDA_ORIENTACAO === "aindaTreinamentos") {
    exibirCampos(["radRADIO_ESCOLHA"]);
  }

  if (data.sltPONTO_DUVIDA_ORIENTACAO === "realizouTreinamentos") {
    exibirCampos(["txaDESCRICAO_DUVIDA_MARCACAO_PONTO"]);
  }
}

//SEGURANÇA DO TRABALHO - INFORMAR ACIDENTE DE TRABALHO
function configurarSegurancaAcidenteTrabalho(){
	if(data.sltINFORME_COLABORADOR_PASSOU_PRIMEIRO_ATENDIMENTO_ACIDENTE === "Não"){
		ocultarCampos(["txaPRIMEIRO_ATENDIMENTO_RH"])
	}
	else if(data.sltINFORME_COLABORADOR_PASSOU_PRIMEIRO_ATENDIMENTO_ACIDENTE === "Sim"){
		exibirCampos(["txaPRIMEIRO_ATENDIMENTO_RH"])
	}


	if (data.sltINFORME_HOUVE_TESTEMUNHA_ACIDENTE === "Não") {
		schema.txaINFORME_DADOS_TESTEMUNHA_ACIDENTE.required = false;
	}
	else if (data.sltINFORME_HOUVE_TESTEMUNHA_ACIDENTE === "Sim") {
		schema.txaINFORME_DADOS_TESTEMUNHA_ACIDENTE.required = true;
	}
}


// Configurar todas as funções
configurarTransferenciaEntreEmpresas();
configurarEnquadramentoPCD();
configurarSolicitacaoPPP();
configurarSolicitacaoCracha();
configurarPontoDuvidaOrientacao();
configurarPontoEscalaHorario();
configurarSegurancaAcidenteTrabalho();

if (continueClicked && currentPage == 1) {
   //formularios que precisam confirmar duas variaveis
  if(data.sltRH_SOLICITA_ATENDIMENTO == "Férias" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(6);
}
  if(data.sltRH_SOLICITA_ATENDIMENTO == "FGTS" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(9);
}
  if(data.sltRH_SOLICITA_ATENDIMENTO == "Folha Pagamento" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(34);
}
  if(data.sltRH_SOLICITA_ATENDIMENTO == "Alteração de Dados de Funcionários e Declarações" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(48);
}
  if(data.sltRH_SOLICITA_ATENDIMENTO == "Ponto" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(52);
}
  if(data.sltRH_SOLICITA_ATENDIMENTO == "Segurança do trabalho" && data.sltESCOLHA_TIPO_ATENDIMENTO == "Dúvida / Orientação"){
  goToAndFinalPage(63);
}
  
  switch (data.sltESCOLHA_TIPO_ATENDIMENTO) {
    case "Alteração Planejamento de Férias":
        goToAndFinalPage(2);
        break;
      
    case "Consulta período aquisitivo":
        goToAndFinalPage(3);
        break;
      
    case "Demonstrativo de férias":
        goToAndFinalPage(4);
        break;
      
    case "Solicitar cancelamento de férias":
        goToAndFinalPage(5);
        break;
      
    case "Atualização cadastral / RDT":
        goToAndFinalPage(7);
      break;
      
    case "Não pagamento, sem deposito":
      goToAndFinalPage(8);
      break;
      
    case "Alteração de benefícios da cesta":
      goToAndFinalPage(10);
      break;
      
    case "Aposentadoria - Enviar carta de estabilidade":
      goToAndFinalPage(11);
      break;
      
    case "Bônus eu indico - Informações sobre pagamento":
        goToAndFinalPage(12);
        break;

    case "Contribuição assistencial - Envio de carta de autorização de desconto":
        goToAndFinalPage(13);
        break;

    case "Dissídio":
        goToAndFinalPage(14);
        break;

    case "Empréstimo consignado - Informar quitação de empréstimo consignado":
        goToAndFinalPage(15);
        break;

    case "Informe de rendimento - Solicitar informe de rendimento":
        goToAndFinalPage(16);
        break;

    case "Inss - Cancelamento ou redução de desconto de inss":
        goToAndFinalPage(17);
        break;

    case "Irrf - Informações sobre cálculo de irrf":
        goToAndFinalPage(18);
        break;

    case "Pagamento - Demonstrativo":
        goToAndFinalPage(19);
        break;

    case "Pagamento - Desconto Indevido, exceto benefícios":
        goToAndFinalPage(20);
        break;
      
     case "Informações sobre calculo de adicional noturno":
        goToAndFinalPage(21);
        break;

    case "Informações sobre calculo de banco de horas":
        goToAndFinalPage(22);
        break;

    case "Informações sobre calculo de horas extra":
        goToAndFinalPage(23);
        break;

    case "Informações sobre calculo de sobreaviso":
        goToAndFinalPage(24);
        break;

    case "Informações sobre reajuste/Dissídio":
        goToAndFinalPage(25);
        break;

    case "Salário não caiu":
        goToAndFinalPage(26);
        break;

    case "Pensão alimentícia - Alteração cadastral":
        goToAndFinalPage(27);
        break;

    case "Pensão alimentícia - Dúvida sobre valor de desconto":
        goToAndFinalPage(28);
        break;

    case "Pensão alimentícia - Exclusão":
        goToAndFinalPage(29);
        break;

    case "Pensão alimentícia - Inclusão":
        goToAndFinalPage(30);
        break;

    case "Periculosidade - Exclusão de pagamento":
        goToAndFinalPage(31);
        break;

    case "Periculosidade - Solicitação de pagamento":
        goToAndFinalPage(32);
        break;

    case "Saque de pis - Divergência de dados ou valores para saque pis":
        goToAndFinalPage(33);
        break;

    case "Correção de dados de filiação (Pai e Mãe)":
        goToAndFinalPage(35);
        break;

    case "Cadastro - Ctps digital (CBO)":
        goToAndFinalPage(36);
        break;

    case "Cadastro - Jornada de trabalho":
        goToAndFinalPage(37);
        break;

    case "Cadastro - Validação de salário/cargo":
        goToAndFinalPage(38);
        break;

    case "Cadastro - Valor salário":
        goToAndFinalPage(39);
        break;

    case "Admissão Dúvida / Orientação":
        goToAndFinalPage(40);
        break;

    case "Alteração de conta corrente":
        goToAndFinalPage(41);
        break;

    case "Alteração de endereço residencial":
        goToAndFinalPage(42);
        break;

    case "Alteração de estado civil":
        goToAndFinalPage(43);
        break;

    case "Alteração de nome":
        goToAndFinalPage(44);
        break;

    case "Inclusão ou Exclusão de dependentes":
        goToAndFinalPage(45);
        break;

    case "Inclusão ou renovação de cnh":
        goToAndFinalPage(46);
        break;

    case "Transferência entre empresas":
        goToAndFinalPage(47);
        break;

    case "Alteração de escala de horário":
        goToAndFinalPage(49);
        break;

    case "Banco de horas/horas extra":
        goToAndFinalPage(50);
        break;

    case "Marcação de ponto":
        goToAndFinalPage(51);
        break;

    case "Informar acidente de trabalho":
        goToAndFinalPage(53);
        break;

    case "Afastamento - Informar atestado inferior a 15 dias":
        goToAndFinalPage(54);
        break;

    case "Afastamento - Informar atestado superior 15 dias":
        goToAndFinalPage(55);
        break;

    case "Enquadramento pcd":
        goToAndFinalPage(56);
        break;

    case "Envio de declaração de horas":
        goToAndFinalPage(57);
        break;

    case "Licença maternidade":
        goToAndFinalPage(58);
        break;

    case "Licença paternidade":
        goToAndFinalPage(59);
        break;

    case "Licenças legais":
        goToAndFinalPage(60);
        break;

    case "Solicitação de EPI":
        goToAndFinalPage(61);
        break;

    case "Solicitação de PPP":
        goToAndFinalPage(62);
        break;

    case "Declarações de vinculo":
        goToAndFinalPage(64);
        break;

    case "Solicitar crachá":
        goToAndFinalPage(65);
        break; 

     case "Auxílio Home Office":
        goToAndFinalPage(66);
        break; 
      
  }
}

// Code to run after submit is clicked
if(submitting){}
