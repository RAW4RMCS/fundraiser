import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';

function App() {
	const [customAmount, setCustomAmount] = useState(0);

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

	const handleOnDonate = (amount: number) => {
		try {
			(window as any).ic.plug.isConnected().then((connected: any) => {
				if (connected) {
					(window as any).ic.plug.requestTransfer({
						to: 'rszt5-dlas5-k7rk5-tdtb2-iqpsh-5tf7q-hfpoc-led3k-xgdqn-shcav-uae',
						amount
					});
				} else {
					(window as any).ic.plug.requestConnect().then((response: any) => {
						if (response) {
							(window as any).ic.plug.requestTransfer({
								to: 'rszt5-dlas5-k7rk5-tdtb2-iqpsh-5tf7q-hfpoc-led3k-xgdqn-shcav-uae',
								amount
							});
						}
					});
				}
			});
		} catch (error) {
			console.error(error);
			alert('something went wrong when initializing PLUG, do you have the extension installed?');
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container
				// disableGutters
				fixed
				sx={{
					marginTop: 2,
					marginBottom: 2,
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					width: '100%'
				}}
			>
				<Stack spacing={2} direction='column' justifyContent='center' alignItems='center'>
					<Avatar alt='Lukas' src='/lukas.jpg' sx={{ width: 200, height: 200 }} />
					<Typography variant='h4' color='text.primary' textAlign='center' fontFamily='Luxurious Roman'>
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
						<Grid item xs={12} sm={12} md={6}>
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
						<Grid item xs={12} sm={12} md={6}>
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
									<StyledButton
										variant='outlined'
										size='large'
										onClick={() => handleOnDonate(100_000_000)}
									>
										1 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={4}>
									<StyledButton
										variant='outlined'
										size='large'
										onClick={() => handleOnDonate(500_000_000)}
									>
										5 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={4}>
									<StyledButton
										variant='outlined'
										size='large'
										onClick={() => handleOnDonate(1_000_000_000)}
									>
										10 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6}>
									<StyledButton
										variant='outlined'
										size='large'
										onClick={() => handleOnDonate(1_500_000_000)}
									>
										15 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6}>
									<StyledButton
										variant='outlined'
										size='large'
										onClick={() => handleOnDonate(2_000_000_000)}
									>
										20 ICP
									</StyledButton>
								</Grid>
							</Grid>
							<Divider
								sx={{
									width: '100%',
									marginY: 2
								}}
							/>
							<Box display='flex' flexDirection={['column', 'column', 'row']}>
								<StyledTextField
									label='Custom amount'
									type='number'
									onChange={e => setCustomAmount(Number(e.target.value))}
								/>
								<Box marginLeft={[0, 0, 1]} marginTop={[1, 1, 0]} width={['100%', '100%', '50%']}>
									<StyledButton
										variant='contained'
										size='large'
										onClick={() => handleOnDonate(customAmount * 100_000_000)}
									>
										Donate
									</StyledButton>
								</Box>
							</Box>
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

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiInputBase-root': {
		borderRadius: 50,
		color: 'black',
		paddingLeft: theme.spacing(0.5)
	},
	'& .MuiInputLabel-root': {
		paddingLeft: theme.spacing(0.5)
	}
}));

export default App;
