import { StateMachineModel } from "./state.machine.model";
import { StateMachineInterface, State } from "./state.machine.interface";
import { NotFoundStateException } from "./exceptions/not.found.state.exception";
import { NotFoundNextStateException } from "./exceptions/not.found.next.state.exception";
import { StateMachineDto } from "./dtos/state.machine.dto";

export abstract class StateMachine implements StateMachineInterface {
  constructor(model: StateMachineModel) {
    this.model = model;
  }

  args?: StateMachineDto | undefined;

  model: StateMachineModel;

  abstract setArgs(args: StateMachineDto): void;

  toState(state: number) {
    const statesThatCanBeTransition: State = this.getState();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const nextState = statesThatCanBeTransition.nextStates.find(
      (s) => s.state === state
    );

    if (nextState === undefined) {
      throw new NotFoundNextStateException();
    }

    return nextState.transition.handle(this);
  }

  abstract states(): Array<State>;

  currentState(): number {
    return this.model?.getCurrentState();
  }

  getState(): State {
    const state = this.states().find((s) => s.state === this.currentState());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (state === undefined || state.nextStates.length === 0) {
      throw new NotFoundStateException();
    }

    return state;
  }
}
