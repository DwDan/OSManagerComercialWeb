import { defineI18n } from '@i18n/shared/define-i18n';

export const featuresSectionLiterals = defineI18n({
  ptBR: {
    heading: {
      tag: 'Funcionalidades',
      title: 'Tudo o que sua operação precisa, em um lugar só.',
      description:
        'Do primeiro chamado ao relatório final. OSManager conecta todas as etapas do serviço em uma plataforma única.',
    },

    items: {
      serviceOrders: {
        title: 'Gestão de ordens de serviço',
        description:
          'Crie, edite e acompanhe ordens com histórico completo, anexos e mensagens.',
      },
      statusControl: {
        title: 'Controle de status avançado',
        description:
          'Organize o fluxo da OS desde a abertura até o encerramento.',
      },
      technicianAssignment: {
        title: 'Atribuição de técnicos',
        description:
          'Distribua chamados por responsável e acompanhe a execução em tempo real.',
      },
      operationalTracking: {
        title: 'Acompanhamento operacional',
        description:
          'Tenha visibilidade da operação, pendências e serviços em andamento.',
      },
      customerManagement: {
        title: 'Gestão de clientes',
        description:
          'Centralize informações de clientes, histórico de atendimento e dados comerciais.',
      },
      teamProductivity: {
        title: 'Produtividade da equipe',
        description:
          'Ganhe clareza sobre volume de trabalho, gargalos e evolução dos atendimentos.',
      },
    },
  },

  enUS: {
    heading: {
      tag: 'Features',
      title: 'Everything your operation needs, in one place.',
      description:
        'From the first request to the final report. OSManager connects every step of your service workflow in a single platform.',
    },

    items: {
      serviceOrders: {
        title: 'Service order management',
        description:
          'Create, edit and track service orders with full history, attachments and messages.',
      },
      statusControl: {
        title: 'Advanced status control',
        description: 'Organize the workflow from opening to completion.',
      },
      technicianAssignment: {
        title: 'Technician assignment',
        description: 'Assign tasks and track execution in real time.',
      },
      operationalTracking: {
        title: 'Operational tracking',
        description:
          'Get full visibility of operations, pending tasks and ongoing services.',
      },
      customerManagement: {
        title: 'Customer management',
        description:
          'Centralize customer data, service history and business information.',
      },
      teamProductivity: {
        title: 'Team productivity',
        description:
          'Understand workload, bottlenecks and service performance.',
      },
    },
  },
});
