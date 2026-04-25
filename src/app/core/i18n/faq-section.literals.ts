import { defineI18n } from '@i18n/shared/define-i18n';

export const faqSectionLiterals = defineI18n({
  ptBR: {
    heading: {
      tag: 'Dúvidas frequentes',
      title: 'Perguntas comuns antes de começar',
      description:
        'Aqui estão as respostas para as dúvidas mais comuns sobre o OSManager.',
    },

    items: {
      creditCard: {
        question: 'Preciso de cartão de crédito para começar?',
        answer:
          'Não. Você pode testar gratuitamente sem precisar informar cartão.',
      },
      trialPeriod: {
        question: 'Como funciona o período de teste?',
        answer:
          'Após o cadastro, você tem acesso completo ao sistema por um período limitado. Depois disso, pode escolher um plano.',
      },
      cancelAnytime: {
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Sim. Não há contrato de fidelidade.',
      },
      serviceTypes: {
        question: 'O sistema funciona para qualquer tipo de serviço?',
        answer:
          'Sim. O OSManager foi pensado para atender diversos tipos de operações de serviços.',
      },
      addUsers: {
        question: 'Consigo adicionar mais usuários depois?',
        answer: 'Sim. Você pode escalar conforme sua equipe cresce.',
      },
      dataSecurity: {
        question: 'Os dados ficam seguros?',
        answer:
          'Sim. Utilizamos boas práticas de segurança e armazenamento em nuvem.',
      },
    },
  },

  enUS: {
    heading: {
      tag: 'FAQ',
      title: 'Common questions before getting started',
      description:
        'Here are the answers to the most common questions about OSManager.',
    },

    items: {
      creditCard: {
        question: 'Do I need a credit card to get started?',
        answer: 'No. You can try it for free without entering a credit card.',
      },
      trialPeriod: {
        question: 'How does the trial period work?',
        answer:
          'After signing up, you get full access to the system for a limited period. After that, you can choose a plan.',
      },
      cancelAnytime: {
        question: 'Can I cancel at any time?',
        answer: 'Yes. There is no long-term contract.',
      },
      serviceTypes: {
        question: 'Does the system work for any type of service?',
        answer:
          'Yes. OSManager was designed to support several types of service operations.',
      },
      addUsers: {
        question: 'Can I add more users later?',
        answer: 'Yes. You can scale as your team grows.',
      },
      dataSecurity: {
        question: 'Is my data secure?',
        answer: 'Yes. We use security best practices and cloud storage.',
      },
    },
  },
});
