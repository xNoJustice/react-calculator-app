import { Grid, Button } from "@material-ui/core";

const GridKeys = (props) => {
  return (
    <Grid className="Calculator-content">
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onChangeSignButtonClick()}
        >
          +/-
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onAllClearButtonClick()}
        >
          AC
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onClearEntryButtonClick()}
        >
          C
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 0 3px 0" }}
          onClick={() => props.onOperatorButtonClick("÷")}
        >
          ÷
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(7)}
        >
          7
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(8)}
        >
          8
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(9)}
        >
          9
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 0 3px 0" }}
          onClick={() => props.onOperatorButtonClick("×")}
        >
          ×
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(4)}
        >
          4
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(5)}
        >
          5
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(6)}
        >
          6
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 0 3px 0" }}
          onClick={() => props.onOperatorButtonClick("-")}
        >
          -
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(1)}
        >
          1
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(2)}
        >
          2
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(3)}
        >
          3
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 0 3px 0" }}
          onClick={() => props.onOperatorButtonClick("+")}
        >
          +
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onDigitButtonClick(0)}
        >
          0
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "3px 3px 3px 0" }}
          onClick={() => props.onPointButtonClick()}
        >
          .
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: "3px 0 3px 0", width: "130px" }}
          onClick={() => props.onEqualButtonClick()}
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
};
export default GridKeys;
