export enum ActionType {
  NoOp = 'NOOP',
}

export interface Action {
  [key: string]: any;
  type: ActionType;
}
