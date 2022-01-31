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
						to: '8ead44e70d740aa347203143b3d8ab09c5aeed318aeb3db2e527846875c27e2a',
						amount
					});
				} else {
					(window as any).ic.plug.requestConnect().then((response: any) => {
						if (response) {
							(window as any).ic.plug.requestTransfer({
								to: '8ead44e70d740aa347203143b3d8ab09c5aeed318aeb3db2e527846875c27e2a',
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
							<Box display='flex' justifyContent='center' marginBottom={1}>
								<video style={{borderRadius: 20}} width='360' height='640' controls>
									<source src='lukas_explain.mov' type='video/mp4' />
									Your browser does not support the video tag.
								</video>
							</Box>
							<Typography
								variant='caption'
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								We asked him to make this video short after his diagnose (19 nov. 2021)
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Typography
								variant='body2'
								gutterBottom
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								Hello everyone, I’m Martin, a team member of NFT Studio. As you might have heard, our
								founder Lukas has been diagnosed with cancer. To provide for his family, me and a couple
								of friend and co-internet computer developers decided to set up a fundraiser.
							</Typography>
							<Divider style={{ margin: '16px' }} />
							<Typography gutterBottom variant='h6'>
								Who is Lukas Merville?
							</Typography>
							<Typography
								variant='body2'
								gutterBottom
								style={{ paddingBottom: '16px' }}
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								Lukas graduated in Art History, Philosophy of Arts and Literature. After graduation he
								decided to explore other countries, he lived in Japan and South Korea for ten years.
								During that time, he met his girlfriend Anna and since then they are in love, living in
								Poland. Lukas is a smart guy who made attention of big tech companies and people in the
								Crypto sphere.
							</Typography>
							<Typography gutterBottom variant='h6'>
								What happened?
							</Typography>
							<Typography
								variant='body2'
								gutterBottom
								style={{ paddingBottom: '16px' }}
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								As some of you know he founded the project called NFT Studio approximately 6 months ago
								while he was living in Poland. Lukas was developing his project when he and his
								girlfriend found out that she was pregnant. The happiness did not last long
								because Lukas was diagnosed with colon cancer. He started treatment in
								Poland, but the doctors recommend him to continue his treatment in Canada. The situation is
								difficult, and Lukas keeps fighting cancer. He is not able to work right now and his
								pregnant girlfriend neither, so they do not have a stable income.
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
