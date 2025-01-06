import { Button, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { BoxRow } from "@/utils/custom";

function InstallAppButton() {
  return (
    <BoxRow sx={{ width: "100%", direction: "ltr" }}>
      <Button
        fullWidth
        size="large"
        variant="contained"
        startIcon={<AndroidIcon fontSize="inherit" sx={{ color: "#fff" }} />}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          نصب برنامه
        </Typography>
      </Button>
    </BoxRow>
  );
}

export default InstallAppButton;
