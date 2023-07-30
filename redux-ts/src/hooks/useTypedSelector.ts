import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
