/**
 *
 * Asynchronously loads the component for BlackjackPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
