import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({theme})=> ({
	backgroundColor: theme.palette.background.light,
	borderRadius: "1rem",
	boxShadow : "2px 3px 11px 0rem rgba(0,0,0,.8)"
}))

export default DashboardBox