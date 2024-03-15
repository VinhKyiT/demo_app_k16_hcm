import {COLORS} from './colors';

const EDIT_PROFILE_PAYMENT_METHODS = [
  {
    id: 'card',
    title: 'Card',
    icon: {
      type: 'font-awesome',
      name: 'credit-card',
    },
    iconBackground: COLORS.LIGHT_ORANGE,
  },
  {
    id: 'bankAccount',
    title: 'Bank Account',
    icon: {
      type: 'material-community',
      name: 'bank',
    },
    iconBackground: COLORS.APP_PINK,
  },
  {
    id: 'paypal',
    title: 'Paypal',
    icon: {
      type: 'material',
      name: 'paypal',
    },
    iconBackground: COLORS.APP_SEA_BLUE,
  },
];
export {EDIT_PROFILE_PAYMENT_METHODS};
