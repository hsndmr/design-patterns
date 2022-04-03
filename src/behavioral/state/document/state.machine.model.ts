export interface StateMachineModel {
  getCurrentState(): number;
  setCurrentState(state: number): void;
}
