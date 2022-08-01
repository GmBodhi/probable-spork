import { MobileStepper } from "@mui/material";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "../Nav/timer";
import getQuiz from "./getQuiz";

export default function Quiz() {
  const quizId = useParams().id as string;

  const quiz = getQuiz(quizId);

  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <>
      <Timer />
    <MobileStepper
      variant="progress"
      steps={6}
      position="bottom"
      activeStep={activeQuestion}
      LinearProgressProps={{
        variant: "determinate",
        sx: {
          height: ".5rem",
          borderRadius: ".5rem",
          ".MuiLinearProgress-bar1Determinate": {
            borderRadius: ".5rem",
          },
        },
      }}
      sx={{ maxWidth: "100vw", flexGrow: 1 }}
      nextButton={<span></span>}
      backButton={<span></span>}
    />
    </>
  );
}
