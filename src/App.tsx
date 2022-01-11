import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

function App() {
	const theme = useMemo(() => {
		let theme = createTheme({
			palette: {
				primary: {
					main: '#38302E'
				},
				text: {
					primary: '#d8b162',
					secondary: '#38302E'
				}
			},
			typography: {
				fontFamily: '"Roboto", serif',
				fontSize: 16,
				htmlFontSize: 16
			},
			shape: {
				borderRadius: 4
			},
			spacing: 16
		});

		theme = responsiveFontSizes(theme);

		return theme;
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Container
				disableGutters
				fixed
				sx={{
					marginTop: 2,
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					width: '100%'
				}}
			>
				<Stack spacing={2} direction='column' justifyContent='center' alignItems='center'>
					<Avatar alt='Lukas' src='/lukas.jpg' sx={{ width: 200, height: 200 }} />
					<Typography variant='h4' color='text.primary' fontFamily='Luxurious Roman'>
						Hi, I am Lukas and this is my story!
					</Typography>
					<Divider
						sx={{
							width: '100%'
						}}
					/>
					<Grid
						container
						spacing={2}
						sx={{
							marginTop: `0 !important`
						}}
					>
						<Grid item xs={6}>
							<Box
								sx={{
									color: 'text.secondary'
								}}
							>
								<Typography variant='body1' textAlign='justify' gutterBottom>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget pretium
									augue, eu commodo lectus. Phasellus at feugiat massa. In at egestas arcu. Vivamus
									volutpat turpis sit amet sagittis efficitur. Sed at finibus sapien. Maecenas id nunc
									ac nisl pharetra efficitur quis vel est. Donec sit amet quam molestie, volutpat arcu
									at, dictum nulla. Suspendisse congue vehicula aliquam.
								</Typography>
								<Typography variant='body1' textAlign='justify'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget pretium
									augue, eu commodo lectus. Phasellus at feugiat massa. In at egestas arcu. Vivamus
									volutpat turpis sit amet sagittis efficitur. Sed at finibus sapien. Maecenas id nunc
									ac nisl pharetra efficitur quis vel est. Donec sit amet quam molestie, volutpat arcu
									at, dictum nulla. Suspendisse congue vehicula aliquam.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Typography
								variant='h5'
								textAlign='center'
								gutterBottom
								color='text.secondary'
								fontWeight='bold'
								fontFamily='Luxurious Roman'
							>
								Fundraiser
							</Typography>
							<Grid container spacing={1}>
								<Grid item xs={4}>
									<StyledButton variant='outlined' size='large'>
										1 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={4}>
									<StyledButton variant='outlined' size='large'>
										5 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={4}>
									<StyledButton variant='outlined' size='large'>
										10 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6}>
									<StyledButton variant='outlined' size='large'>
										15 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6}>
									<StyledButton variant='outlined' size='large'>
										20 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={12}>
									<StyledButton variant='contained' size='large'>
										Donate custom amount
									</StyledButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Stack>
			</Container>
		</ThemeProvider>
	);
}

const StyledButton = styled(Button)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	borderRadius: 500,
	width: '100%',
	textTransform: 'initial'
}));

export default App;
