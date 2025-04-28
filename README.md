# Projeto BPC-PII-2025

Este projeto tem como objetivo criar um sistema web para análise de dados do Benefício de Prestação Continuada (BPC), utilizando dados públicos do Portal da Transparência.

## Tecnologias Utilizadas

- **Frontend**: React.js (Vite)
- **Backend**: Django + Django REST Framework
- **Banco de Dados**: PostgreSQL
- **Hospedagem**:
  - Frontend: Vercel
  - Backend: Render
- **Testes**:
  - Backend: Pytest
  - Frontend: Jest + React Testing Library

## Funcionalidades

- Download automatizado dos dados do BPC
- Análises estatísticas por Estado e Cidade
- Gráficos interativos
- Exportação de dados filtrados para CSV
- Acessibilidade (seguindo diretrizes WCAG)

## Como Rodar Localmente

### Backend (Django)

1. Acesse a pasta `backend`
2. Crie e ative um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
