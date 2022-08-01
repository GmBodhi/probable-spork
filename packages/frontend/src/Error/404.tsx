import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  let navigate = useNavigate();
  return (
    <div className="blackout">
      <div id="main404">
        <div className="message404">
          <h1>404</h1>
          <Typography variant="h3" gutterBottom>
            This page doesn't exist.{" "}
            <Typography
              component="a"
              className="buttonlike"
              sx={{
                textDecoration: "underline",
              }}
            >
              Report an Error
            </Typography>
          </Typography>
        </div>
        <div className="footer404">
          <Typography
            component="a"
            className="buttonlike"
            onClick={() => navigate("/")}
          >
            Go to Home<span></span>
          </Typography>
          <Typography
            component="a"
            className="buttonlike"
            onClick={() =>window.history.back()}
          >
            Go Back<span></span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
