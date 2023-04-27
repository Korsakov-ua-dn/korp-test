import { IDebtor } from 'shared/api';
import { isObject } from 'shared/type-guard';

/**
 * Type guard для валидации server responce
 */
export function isDebtor(value: unknown): value is IDebtor {
  if (!isObject(value)) return false;

  if (
    '_id' in value &&
    typeof value._id === 'string' &&
    'name' in value &&
    typeof value.name === 'string' &&
    'debt' in value &&
    typeof value.debt === 'number' &&
    Number.isInteger(value.debt) &&
    'isPaid' in value &&
    typeof value.isPaid === 'boolean'
  ) {
    return true;
  }

  return false;
}
