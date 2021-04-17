import React, { useState } from "react";
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import Input from "./components/Input";
import GridKeys from "./components/GridKeys";
import logo from "./logo.svg";
import "./logo.css";

function Calculator() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [result, setResult] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState("");
  const [display, setDisplay] = useState("0");

  const calculate = (rightOperand, pendingOperator) => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }
        newResult /= rightOperand;
        break;
      default:
        break;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  const onDigitButtonClick = (digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 99) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid>
          <img src={logo} className="logo" alt="logo" />
        </Grid>
        <Grid>
          <Input
            display={display}
            pending={
              typeof pendingOperator !== "undefined"
                ? `${result}${pendingOperator}${
                    waitingForOperand ? "" : display
                  }`
                : ""
            }
          />
        </Grid>
        <Grid>
          <GridKeys
            onEqualButtonClick={onEqualButtonClick}
            onAllClearButtonClick={onAllClearButtonClick}
            onChangeSignButtonClick={onChangeSignButtonClick}
            onOperatorButtonClick={onOperatorButtonClick}
            onPointButtonClick={onPointButtonClick}
            onDigitButtonClick={onDigitButtonClick}
            onClearEntryButtonClick={onClearEntryButtonClick}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Calculator;
