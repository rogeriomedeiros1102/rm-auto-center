
import { Service } from './types';

export const COMPANY_PHONE = "5584999845443"; 
export const COMPANY_PHONE_DISPLAY = "084 99984-54443 / 084 99180-6669";
export const COMPANY_EMAIL = "rmautocenternatal@gmail.com";
export const COMPANY_ADDRESS = "Rua Duque de Caxias, 170 - Ribeira - Natal/RN";
export const COMPANY_INSTAGRAM = "rmautocenternatal";

export const SERVICES: Service[] = [
  {
    id: 'mecanica',
    title: 'Mecânica Geral',
    description: 'Diagnóstico computadorizado e reparos de alta precisão.',
    longDescription: 'Nossa equipe de especialistas utiliza tecnologia de ponta para garantir o desempenho máximo e a segurança do seu veículo. Desde revisões preventivas até reparos complexos em motor e transmissão.',
    image: 'images/mecanica.jpg',
    features: ['Injeção Eletrônica', 'Suspensão e Freios', 'Motor e Câmbio', 'Revisão Preventiva']
  },
  {
    id: 'funilaria',
    title: 'Funilaria & Martelinho',
    description: 'Restauração de lataria com técnicas artesanais e precisas.',
    longDescription: 'Recuperamos a originalidade do seu veículo com técnicas de funilaria artesanal e o famoso martelinho de ouro, eliminando amassados sem comprometer a pintura original.',
    image: 'images/funilaria.jpg',
    features: ['Martelinho de Ouro', 'Recuperação de Para-choques', 'Alinhamento de Chassi', 'Solda Especializada']
  },
  {
    id: 'pintura',
    title: 'Pintura Automotiva',
    description: 'Acabamento impecável com laboratório de cores próprio.',
    longDescription: 'Trabalhamos com cabine de pintura pressurizada e tintas premium para garantir uma fidelidade de cor absoluta e um brilho duradouro que valoriza seu patrimônio.',
    image: 'images/pintura.jpg',
    features: ['Cabine de Pintura', 'Cores Customizadas', 'Pintura Parcial ou Geral', 'Verniz de Alta Resistência']
  },
  {
    id: 'estetica',
    title: 'Estética & Detalhamento',
    description: 'O luxo e o cuidado que o seu carro merece nos mínimos detalhes.',
    longDescription: 'Transformamos seu veículo com serviços de detalhamento avançado, desde vitrificação de pintura até higienização interna profunda com ozônio.',
    image: 'images/estetica.jpg',
    features: ['Vitrificação Cerâmica', 'Polimento Técnico', 'Limpeza de Couro', 'Higienização Interna']
  }
];
