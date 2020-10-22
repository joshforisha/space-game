export enum ActionType {
  SelectSystem = 'SELECT_SYSTEM'
}

export interface Action {
  [key: string]: any;
  type: ActionType;
}

// Action helpers --------------------------------------------------------------

export function selectSystem (id: string): Action {
  return { id, type: ActionType.SelectSystem }
}
