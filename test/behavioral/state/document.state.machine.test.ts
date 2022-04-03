import { Document } from "../../../src/behavioral/state/document/document";
import { DocumentStateMachine } from "../../../src/behavioral/state/document/document.state.machine";
import { DocumentStateType } from "../../../src/behavioral/state/document/document.state.type";
import { NotFoundNextStateException } from "../../../src/behavioral/state/document/exceptions/not.found.next.state.exception";

test("Document state can change to IN_REVIEW  from  DRAFT", () => {
  const document = new Document();
  const documentStateMachine = new DocumentStateMachine(document);
  documentStateMachine.setArgs({
    content: "content",
  });
  const newDocument = documentStateMachine.toState(DocumentStateType.IN_REVIEW);
  expect(newDocument.getCurrentState()).toBe(DocumentStateType.IN_REVIEW);
});

test("Document state must not change to Another State  from DRAFT except IN_REVIEW", () => {
  const document = new Document();
  const documentStateMachine = new DocumentStateMachine(document);
  documentStateMachine.setArgs({
    content: "content",
  });

  const states = [
    DocumentStateType.APPROVED,
    DocumentStateType.CLOSED,
    DocumentStateType.REJECTED,
    DocumentStateType.DRAFT,
  ]

  states.forEach(state => expect(() => {documentStateMachine.toState(state)}).toThrow(NotFoundNextStateException) )
});
