import { BoxColumn, BoxRow } from "@/utils/custom";
import SearchBar from "../SearchBar";
import { ThemeTogglerIconButton } from "../Buttons/ThemeChangerButton";
import { Typography, Box } from "@mui/material";
import MyDrawer from "../MenuDrawer";
import PhoneIcon from "@mui/icons-material/Phone";

function Navbar() {
  return (
    <BoxColumn
      sx={{
        width: "100vw",
        height: { xs: 60, sm: 120 },
        bgcolor: "background.default",
        boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.45)",
        padding: { xs: 1, sm: 2 },
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
        alignItems: "center",
        flexDirection: { xs: "row", sm: "column" },
      }}
    >
      <BoxRow sx={{ justifyContent: "space-around", width: "100%" }}>
        <BoxRow
          sx={{
            gap: 0,
            justifyContent: "flex-start",
            userSelect: "none",
            pt: 1,
          }}
        >
          <Typography
            variant="h4"
            lineHeight={0.8}
            fontWeight={100}
            color="primary.main"
          >
            TAK
          </Typography>
          <Typography variant="h4" lineHeight={0.8} fontWeight={900}>
            CARD
          </Typography>
        </BoxRow>
        <SearchBar />
        <ThemeTogglerIconButton />
        <BoxRow sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography variant="h6" color="grey">
            09305842211
          </Typography>
          <PhoneIcon sx={{ color: "grey" }} />
        </BoxRow>
      </BoxRow>
      {/* Burger menu for xs screens */}
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <MyDrawer />
      </Box>

      {/* List options for sm and larger screens */}
      <BoxRow
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          width: "100%",
          gap: 3,
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          بازی دیجیتال
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          آیتم ها
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          کارت ها
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          نرم افزار
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          محصولات ویژه
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          variant="body1"
          color="text.primary"
        >
          وبلاگ
        </Typography>
      </BoxRow>
    </BoxColumn>
  );
}

export default Navbar;
