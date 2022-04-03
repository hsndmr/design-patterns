import { TransitionInterface } from "./transition.interface";
import { Document } from "../document";
import { DocumentStateMachine } from "../document.state.machine";
import { DocumentStateType } from "../document.state.type";

export class DraftToInReviewTransition implements TransitionInterface {
  handle(stateMachine: DocumentStateMachine): Document {
    stateMachine.model.setCurrentState(DocumentStateType.IN_REVIEW);
    return stateMachine.model;
  }
}
