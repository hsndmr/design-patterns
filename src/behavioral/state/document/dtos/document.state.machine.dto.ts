import { StateMachineDto } from "./state.machine.dto";

export interface DocumentStateMachineDto extends StateMachineDto {
  content?: string;
}
