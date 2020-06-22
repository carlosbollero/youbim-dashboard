import PATHS from '../../../constants/paths';
import CreateItems from '../../screens/CreateItems';
import CreateBundle from '../../screens/CreateBundle';
import ReleasedBundles from '../../screens/ReleasedBundles';

const ROUTES = [
  { path: PATHS.RELEASED_BUNDLES, component: ReleasedBundles },
  { path: PATHS.CREATE_BUNDLE, component: CreateBundle },
  { path: PATHS.CREATE_ITEMS, component: CreateItems },
];

export default ROUTES;
