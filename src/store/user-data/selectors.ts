import { NameSpace } from '../../const';
import { RootState } from '../../types/state';

export const selectIsAuthorized = (state: RootState): boolean => state[NameSpace.User].isAuthorized;
