import { BOCHK, Beulah, DBS, Tutornotes, CTBC } from './supplyinfo';

/** Tiles for work section: same order as before (newest first). */
export const WORK_EXPERIENCE_TILES = [
  {
    id: 'ctbc',
    title: 'CTBC Bank',
    period: '2025–present',
    role: 'Senior Associate',
    teaser: 'Customer enquiries, VIP follow-up, e-banking, and ad-hoc projects.',
    items: CTBC,
  },
  {
    id: 'dbs',
    title: 'DBS',
    period: '2024–2025',
    role: 'Senior Officer (Licensed), Consumer Banking',
    teaser: 'Omnichannel service, cross-sell, scorecards, and complaint handling.',
    items: DBS,
  },
  {
    id: 'bochk',
    title: 'BOCHK',
    period: '2023–2024',
    role: 'CSO',
    teaser: 'Branch service, referrals, licensing, and account opening.',
    items: BOCHK,
  },
  {
    id: 'beulah',
    title: 'Beulah (HK) Ltd.',
    period: '2018–2023',
    role: 'Assistant Manager',
    teaser: 'Trade documents, logistics, invoicing, and financial reporting.',
    items: Beulah,
  },
  {
    id: 'tutornotes',
    title: 'Tutornotes',
    period: '2009–2018',
    role: 'General Manager',
    teaser: 'Study centres, YouTube channel, and cost-effective promotion.',
    items: Tutornotes,
  },
];
