import { useContext } from 'react';

import { AppContext } from 'src/contexts';
import { TAppContext } from 'src/types';

export const useAppContext = () => useContext(AppContext) || ({} as TAppContext);
