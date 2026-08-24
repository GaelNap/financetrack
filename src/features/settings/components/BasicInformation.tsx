import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import avatarImage from "../../../assets/avatar.svg";
import { tokens } from "../../../assets/theme";
import { account } from "../../../config/brand";

const BasicInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gap: "clamp(0.5em, 5%, 3em)",
          paddingBlock: "clamp(0.5em, 5%, 2em)",
        }}
      >
        <Box>
          <Avatar
            alt={account.displayName}
            src={avatarImage}
            sx={{ height: 90, width: 90 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">{account.displayName}</Typography>
          <Typography variant="h5" color={colors.grey[100]}>
            {account.owner} · {account.role}
          </Typography>
          <Typography variant="h6" color={colors.grey[100]}>
            {account.address.city}, {account.address.country}
          </Typography>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <Button color="success" endIcon={<Edit />} variant="outlined">
            <Typography variant="h6">Edit</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BasicInformation;
