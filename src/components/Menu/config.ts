import { MenuEntry } from '@soy-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: 'https://v1exchange.soyswap.finance/#/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.soyswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.soyswap.finance/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: 'https://v1exchange.soyswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://soyswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://soyswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://soyswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://soyswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.soyswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.soyswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/soyswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.soyswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://soyswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://soyswap.creator-spring.com/',
      },
    ],
  },
]

export default config
