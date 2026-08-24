import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";
import { account } from "../../../config/brand";

const PersonalInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Studio Information</Typography>
        </Box>
        <Box className="settingLayout threeRows">
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Studio Name
            </Typography>
            <Typography variant="h5">{account.displayName}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Email Address
            </Typography>
            <Typography variant="h5">{account.email}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Bio
            </Typography>
            <Typography variant="h5">{account.role}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Account Owner
            </Typography>
            <Typography variant="h5">{account.owner}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Founded
            </Typography>
            <Typography variant="h5">{account.foundedIn}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Phone Number
            </Typography>
            <Typography variant="h5">{account.phone}</Typography>
          </Box>
          <Box className="settingItem btn">
            <Button color="success" endIcon={<Edit />} variant="outlined">
              <Typography variant="h6">Edit</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInformation;
