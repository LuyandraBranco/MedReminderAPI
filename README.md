# MedReminder API

**MedReminder** é uma API para gerenciamento de medicamentos e lembretes, oferecendo suporte para notificações em tempo real via e-mail, SMS e notificações push. O objetivo da API é ajudar os usuários a manterem-se organizados e a seguirem corretamente seus regimes de medicamentos.

## Funcionalidades

- **Gerenciamento de Medicamentos**
  - Adicionar, atualizar e remover medicamentos.
- **Gerenciamento de Lembretes**
  - Criar, atualizar e cancelar lembretes para tomar medicamentos.
- **Notificações em Tempo Real**
  - Enviar notificações via e-mail, SMS e notificações push.
- **Rastreamento e Status**
  - Consultar status e histórico de notificações.

## Entidades

### Usuário
- **userId**: Identificador único do usuário (UUID ou ID numérico).
- **username**: Nome de usuário.
- **email**: Endereço de e-mail.
- **phoneNumber**: Número de telefone.
- **passwordHash**: Senha do usuário (armazenada como hash).
- **apiKey**: Chave de API para autenticação.
- **createdAt**: Data e hora de criação.
- **updatedAt**: Data e hora da última atualização.

### Medicamento
- **medicationId**: Identificador único do medicamento (UUID ou ID numérico).
- **userId**: Identificador do usuário (referência para Usuário).
- **name**: Nome do medicamento.
- **dosage**: Dosagem recomendada.
- **frequency**: Frequência de administração.
- **createdAt**: Data e hora de adição.
- **updatedAt**: Data e hora da última atualização.

### Lembrete
- **reminderId**: Identificador único do lembrete (UUID ou ID numérico).
- **userId**: Identificador do usuário (referência para Usuário).
- **medicationId**: Identificador do medicamento (referência para Medicamento).
- **reminderTime**: Data e hora programada para o lembrete.
- **status**: Status do lembrete (ativo, cancelado).
- **createdAt**: Data e hora de criação.
- **updatedAt**: Data e hora da última atualização.

### Notificação
- **notificationId**: Identificador único da notificação (UUID ou ID numérico).
- **userId**: Identificador do usuário (referência para Usuário).
- **reminderId**: Identificador do lembrete (referência para Lembrete).
- **notificationType**: Tipo de notificação (e-mail, SMS, push).
- **message**: Corpo da notificação.
- **status**: Status da notificação (enviada, falhada).
- **sentAt**: Data e hora em que a notificação foi enviada.
- **failedAt**: Data e hora em que o envio falhou (se aplicável).
- **errorMessage**: Mensagem de erro (se aplicável).
- **createdAt**: Data e hora de criação.
- **updatedAt**: Data e hora da última atualização.

## Endpoints da API

### Usuários
- `POST /users`: Criar um novo usuário.
- `GET /users/{userId}`: Obter informações do usuário.
- `PUT /users/{userId}`: Atualizar informações do usuário.
- `DELETE /users/{userId}`: Excluir um usuário.

### Medicamentos
- `POST /medications`: Adicionar um novo medicamento.
- `GET /medications/{medicationId}`: Obter detalhes de um medicamento.
- `PUT /medications/{medicationId}`: Atualizar informações de um medicamento.
- `DELETE /medications/{medicationId}`: Remover um medicamento.

### Lembretes
- `POST /reminders`: Criar um novo lembrete.
- `GET /reminders/{reminderId}`: Obter detalhes de um lembrete.
- `PUT /reminders/{reminderId}`: Atualizar um lembrete existente.
- `DELETE /reminders/{reminderId}`: Cancelar um lembrete.

### Notificações
- `POST /notifications`: Enviar uma nova notificação.
- `GET /notifications/{notificationId}`: Obter detalhes de uma notificação.
- `GET /notifications/history`: Consultar histórico de notificações.

## Requisitos

- **Autenticação**: API Key ou OAuth 2.0.
- **Desempenho**: Respostas rápidas e baixa latência.
- **Segurança**: Criptografia em trânsito e em repouso, proteção contra ataques comuns.
- **Escalabilidade**: Suporte para alto volume de dados e notificações.
- **Documentação**: Clareza na documentação e exemplos de uso.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/medreminder-api.git
