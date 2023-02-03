import { useContext } from 'react';
import { NavigationContext } from '../router';

export const useNavigation = () => useContext(NavigationContext);
