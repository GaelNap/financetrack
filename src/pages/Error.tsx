import { Box, Typography } from "@mui/material";

export default function Error() {

  return (
    <Box className="error-page" sx={{ padding: "1rem" }}>
      <Box>
        <Typography variant="h1" fontWeight={600} textAlign="center">404</Typography>
      </Box>
      <Typography variant="h4" mt={4} textAlign="center">
        This page drifted out to sea.
      </Typography>
      <Typography variant="h6" fontWeight={400} textAlign="center">
        The page may have been removed or renamed — or the address is simply
        wrong. Head back to the overview and start again.
      </Typography>
    </Box>
  )
}