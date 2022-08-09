export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
// export const STRAPI_BASE = 'http://localhost:1337';
// export const STRAPI_BASE = 'http://54.193.111.245:1337';
// export const STRAPI_BASE = location.origin.replace(':3000', ':1337');
export const STRAPI_BASE = 'https://blackjack-wce7.onrender.com/api';

export const USER_MENU_DATA = {
  name: 'Profile',
  icon: 'admin',
  path: 'user',
  authority: 'Administrator',
  children: [
    {
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Blackjack',
      path: 'blackjack',
    },
  ],
};
