import { CyclesType } from "./reduce";

export function createNewCycleAction(newCycle: CyclesType) {
  return {
    type: "create_new_cycle",
    payload: {
      newCycle,
    },
  };
}

export function interruptCycleAction() {
  return {
    type: "interrupt_cycle",
  };
}

export function marksCurrentCycleAsFinishedAction() {
  return {
    type: "marks_current_cycle_as_finished",
  };
}
