import { defineI18n } from '@i18n/shared/define-i18n';

export const signupLiterals = defineI18n({
  ptBR: {
    brand: {
      name: 'OSManager',
    },

    success: {
      icon: '✓',
      title: 'Cadastro recebido!',
      description:
        'Enviamos um e-mail de confirmação. Após confirmar, seu período de teste gratuito será iniciado automaticamente.',
      action: 'Voltar ao site',
    },

    header: {
      tag: 'Teste grátis',
      title: 'Comece seu trial em poucos minutos',
      description:
        'Preencha os dados básicos da empresa para receber o e-mail de confirmação.',
    },

    fields: {
      name: 'Nome da empresa',
      document: 'Documento',
      email: 'E-mail',
      phoneNumber: 'Telefone',
    },

    placeholders: {
      name: 'Ex: Oficina do João',
      document: 'CNPJ ou CPF',
      email: 'responsavel@empresa.com.br',
      phoneNumber: '(31) 99999-9999',
    },

    slug: {
      label: 'Identificador:',
      empty: 'gerado-automaticamente',
    },

    actions: {
      submit: 'Iniciar teste grátis',
      submitting: 'Enviando...',
    },

    errors: {
      submit:
        'Não foi possível concluir o cadastro. Tente novamente em instantes.',
    },
  },

  enUS: {
    brand: {
      name: 'OSManager',
    },

    success: {
      icon: '✓',
      title: 'Registration received!',
      description:
        'We sent you a confirmation email. After confirming, your free trial period will start automatically.',
      action: 'Back to website',
    },

    header: {
      tag: 'Free trial',
      title: 'Start your trial in just a few minutes',
      description:
        'Fill in the company basic information to receive the confirmation email.',
    },

    fields: {
      name: 'Company name',
      document: 'Document',
      email: 'Email',
      phoneNumber: 'Phone',
    },

    placeholders: {
      name: 'Example: John’s Workshop',
      document: 'Tax ID',
      email: 'owner@company.com',
      phoneNumber: '+1 555 000 0000',
    },

    slug: {
      label: 'Identifier:',
      empty: 'generated-automatically',
    },

    actions: {
      submit: 'Start free trial',
      submitting: 'Sending...',
    },

    errors: {
      submit: 'Could not complete the registration. Please try again shortly.',
    },
  },
});
