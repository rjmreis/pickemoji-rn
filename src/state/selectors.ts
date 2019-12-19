import { RootState } from './reducer';

export const getValueFromProp = (propName: string) => (_: RootState, props: any) => props && props[propName];
export const getIdFromProps = getValueFromProp('id') || '';
