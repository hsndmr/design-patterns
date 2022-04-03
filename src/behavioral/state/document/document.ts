import { DocumentStateType } from "./document.state.type";
import { StateMachineModel } from "./state.machine.model";

export class Document implements StateMachineModel {
  state: DocumentStateType;

  content = "";

  constructor() {
    // default state
    this.state = DocumentStateType.DRAFT;
  }

  setCurrentState(state: DocumentStateType) {
    this.state = state;
  }

  getCurrentState(): DocumentStateType {
    return this.state;
  }
}
