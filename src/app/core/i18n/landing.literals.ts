import { defineI18n } from '@i18n/shared/define-i18n';

export const landingLiterals = defineI18n({
  ptBR: {
    hero: {
      titlePrefix: 'Sua operação,',
      titleHighlight: 'sob controle absoluto.',
      description:
        'Plataforma completa para gestão de ordens de serviço. Organize equipes, automatize fluxos e entregue resultados previsíveis — do primeiro chamado à conclusão.',
      actions: {
        trial: 'Testar 14 dias grátis',
        plans: 'Ver planos e preços',
      },
      checks: {
        noCreditCard: 'Sem cartão de crédito',
        fastActivation: 'Ativação em minutos',
      },
    },

    dashboard: {
      url: 'osmanager.app',
      status: 'sistema online',
      metricLabel: 'Ordens abertas hoje',
      metricVariation: '+12%',
      orders: {
        first: {
          title: 'OS-4821 · Cliente Premium',
          status: 'Em execução',
        },
        second: {
          title: 'OS-4822 · Cliente Standard',
          status: 'Agendada',
        },
        third: {
          title: 'OS-4823 · Cliente Premium',
          status: 'Concluída',
        },
        fourth: {
          title: 'OS-4824 · Cliente Standard',
          status: 'Em execução',
        },
      },
      sla: {
        label: 'SLA cumprido',
        value: '98.4%',
      },
    },

    trust: {
      text: 'Usado por empresas de serviços em todo o Brasil',
    },
  },

  enUS: {
    hero: {
      titlePrefix: 'Your operation,',
      titleHighlight: 'under absolute control.',
      description:
        'A complete platform for service order management. Organize teams, automate workflows and deliver predictable results — from the first request to completion.',
      actions: {
        trial: 'Try 14 days free',
        plans: 'See plans and pricing',
      },
      checks: {
        noCreditCard: 'No credit card required',
        fastActivation: 'Activation in minutes',
      },
    },

    dashboard: {
      url: 'osmanager.app',
      status: 'system online',
      metricLabel: 'Open orders today',
      metricVariation: '+12%',
      orders: {
        first: {
          title: 'SO-4821 · Premium Customer',
          status: 'In progress',
        },
        second: {
          title: 'SO-4822 · Standard Customer',
          status: 'Scheduled',
        },
        third: {
          title: 'SO-4823 · Premium Customer',
          status: 'Completed',
        },
        fourth: {
          title: 'SO-4824 · Standard Customer',
          status: 'In progress',
        },
      },
      sla: {
        label: 'SLA achieved',
        value: '98.4%',
      },
    },

    trust: {
      text: 'Used by service companies across Brazil',
    },
  },
});
