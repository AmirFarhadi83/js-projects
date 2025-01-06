import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BoxRow } from "@/utils/custom";

function SearchBar() {
  return (
    <BoxRow
      sx={{
        width: {
          xs: "calc( 100% - 55px )",
          sm: "calc( 100% - 180px )",
          md: "calc( 100% - 350px )",
        },justifyContent: "flex-end",
      }}
    >
      <TextField
        fullWidth
        sx={{maxWidth: 400}}
        size="small"
        variant="outlined"
        placeholder="جستجو"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </BoxRow>
  );
}

export default SearchBar;
