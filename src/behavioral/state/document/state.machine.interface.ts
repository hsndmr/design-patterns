import { StateMachineModel } from "./state.machine.model";
import { DocumentStateType } from "./document.state.type";
import { TransitionInterface } from "./transitions/transition.interface";
import { StateMachineDto } from "./dtos/state.machine.dto";

export interface State {
  state: DocumentStateType;
  nextStates?: Array<{
    state: DocumentStateType;
    transition: TransitionInterface;
  }>;
}

export interface StateMachineInterface {
  model?: StateMachineModel;
  args?: StateMachineDto;
  toState(state: number): StateMachineModel;
  setArgs(args: StateMachineDto): void;
  states(): Array<State>;
}
