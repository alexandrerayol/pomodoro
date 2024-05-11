import { useContext, useEffect } from "react";
import { FormCountDown } from "./styles";
import { CycleContext } from "../../../../contexts/CycleContext";

export function FormCountdown() {
  const {
    activeCycle,
    marksCurrentCycleAsFinished,
    amountSecondsPassed,
    calcAmountSecondsPassed,
  } = useContext(CycleContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutesAmountFormatted = String(minutesAmount).padStart(2, "0");
  const secondsAmountFormatted = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    const isCycleStopped = currentSeconds <= 0;

    if (activeCycle) {
      interval = setInterval(() => {
        if (isCycleStopped) {
          marksCurrentCycleAsFinished();
        }
        calcAmountSecondsPassed();
      }, 500);

      document.title = `${minutesAmountFormatted}:${secondsAmountFormatted}`;
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    currentSeconds,
    calcAmountSecondsPassed,
    marksCurrentCycleAsFinished,
    minutesAmountFormatted,
    secondsAmountFormatted,
  ]);

  return (
    <FormCountDown>
      <span>{minutesAmountFormatted[0]}</span>
      <span>{minutesAmountFormatted[1]}</span>
      <div>:</div>
      <span>{secondsAmountFormatted[0]}</span>
      <span>{secondsAmountFormatted[1]}</span>
    </FormCountDown>
  );
}
