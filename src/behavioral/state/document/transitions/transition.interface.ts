import { StateMachine } from "../state.machine";
import { StateMachineModel } from "../state.machine.model";

export interface TransitionInterface {
  handle(stateMachine: StateMachine): StateMachineModel;
}
