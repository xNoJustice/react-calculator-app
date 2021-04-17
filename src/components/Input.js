import { Grid } from "@material-ui/core";

const Input = (props) => {
  return (
    <Grid
      style={{
        backgroundColor: "rgb(57, 57, 57)",
        color: "rgb(255, 255, 255)",
        padding: "24px 16px",
      }}
    >
      <Grid
        style={{
          fontSize: "12px",
          lineHeight: "1",
          opacity: "0.4",
          textAlign: "right",
          marginBottom: "4px",
          minHeight: "16px",
          minWidth: "16px",
          maxWidth: "230px",
        }}
      >
        <span style={{ marginLeft: "auto", wordBreak: "break-all" }}>
          {props.pending}
        </span>
      </Grid>
      <Grid
        style={{
          fontSize: "40px",
          minHeight: "20px",
          minWidth: "230px",
          maxWidth: "230px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <span style={{ wordBreak: "break-all" }}>{props.display}</span>
      </Grid>
    </Grid>
  );
};
export default Input;
