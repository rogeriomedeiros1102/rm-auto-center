
import { Service } from './types';

export const COMPANY_PHONE = "5584999845443"; 
export const COMPANY_PHONE_DISPLAY = "84 99984-5443 / 84 99180-6669";
export const COMPANY_EMAIL = "rmautocenternatal@gmail.com";
export const COMPANY_ADDRESS = "Rua Duque de Caxias, 170 - Ribeira - Natal/RN";
export const COMPANY_INSTAGRAM = "rmautocenternatal";

export const SERVICES: Service[] = [
  {
    id: 'mecanica',
    title: 'Mecânica Geral',
    description: 'Diagnóstico computadorizado, suspensão, freios e motor.',
    longDescription: 'Oferecemos soluções completas em mecânica preventiva e corretiva. Nossa equipe utiliza diagnósticos avançados para garantir que seu motor, freios e suspensão funcionem com máxima eficiência e segurança.',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop',
    features: ['Injeção Eletrônica', 'Suspensão e Freios', 'Troca de Óleo', 'Revisão Preventiva']
  },
  {
    id: 'funilaria',
    title: 'Funilaria',
    description: 'Restauração de lataria e remoção de amassados.',
    longDescription: 'Recupere a estética original do seu carro. Utilizamos técnicas avançadas de funilaria para grandes reparos e pequenos ajustes, sempre focando na estrutura original e no alinhamento perfeito das peças.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    features: ['Recuperação de Lataria', 'Recuperação de Para-choques', 'Solda Especializada', 'Alinhamento de Chassi']
  },
  {
    id: 'pintura',
    title: 'Pintura Automotiva',
    description: 'Pintura em cabine pressurizada com fidelidade de cor.',
    longDescription: 'Acabamento de alto padrão com laboratório de cores próprio. Garantimos a mesma tonalidade original do seu veículo utilizando tintas e vernizes de alta resistência.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    features: ['Pintura Geral', 'Retoques Localizados', 'Cabine Pressurizada', 'Verniz Premium']
  },
  {
    id: 'estetica',
    title: 'Estética Automotiva',
    description: 'Polimento, vitrificação e higienização interna profunda.',
    longDescription: 'O brilho e a proteção que seu carro merece. Realizamos vitrificação cerâmica, polimento técnico e higienização detalhada para um interior impecável e protegido contra o tempo.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop',
    features: ['Vitrificação 9H', 'Polimento Técnico', 'Higienização Interna', 'Limpeza de Couro']
  }
];
