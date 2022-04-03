import { StateMachine } from "./state.machine";
import { DraftToInReviewTransition } from "./transitions/draft.to.in.review.transition";
import { DocumentStateType } from "./document.state.type";
import { State } from "./state.machine.interface";
import { Document } from "./document";
import { DocumentStateMachineDto } from "./dtos/document.state.machine.dto";

export class DocumentStateMachine extends StateMachine {
  model!: Document;

  args?: DocumentStateMachineDto;

  setArgs(args: DocumentStateMachineDto): void {
    this.args = args;
  }

  states(): Array<State> {
    return [
      {
        state: DocumentStateType.DRAFT,
        nextStates: [
          {
            state: DocumentStateType.IN_REVIEW,
            transition: new DraftToInReviewTransition(),
          },
        ],
      },
    ];
  }
}
