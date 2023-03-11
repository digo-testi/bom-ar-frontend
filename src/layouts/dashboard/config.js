import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import BanknotesIcon from '@heroicons/react/24/solid/BanknotesIcon';


export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Clientes',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Ordens de serviço',
    path: '/service-orders',
    icon: (
      <SvgIcon fontSize="small">
        <BanknotesIcon />
      </SvgIcon>
    )
  },
  
  
];
