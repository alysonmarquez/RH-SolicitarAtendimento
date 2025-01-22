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
