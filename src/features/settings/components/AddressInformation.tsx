import { Box, Button, Typography, useTheme } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { tokens } from "../../../assets/theme";
import { account } from "../../../config/brand";

const AddressInformation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box className="settingWrapper">
        <Box>
          <Typography variant="h5">Address</Typography>
        </Box>
        <Box className="settingLayout">
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Country
            </Typography>
            <Typography variant="h5">{account.address.country}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Postal Code
            </Typography>
            <Typography variant="h5">{account.address.postalCode}</Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              Street / City
            </Typography>
            <Typography variant="h5">
              {account.address.street}, {account.address.city}
            </Typography>
          </Box>
          <Box className="settingItem">
            <Typography color={colors.grey[300]} variant="h6">
              VAT / Tax ID
            </Typography>
            <Typography variant="h5">{account.taxId}</Typography>
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

export default AddressInformation;
