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
	const [amount, setAmount] = useState(0);

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
				<Stack direction='column' justifyContent='center' alignItems='center'>
					<Avatar alt='Lukas' src='/lukas.jpg' sx={{ width: 200, height: 200 }} />
					<Typography variant='h4' color='text.primary' textAlign='center' fontFamily='Luxurious Roman' padding={'16px 0'}>
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
							style={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}
								variant='caption'
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								This video was made shortly after his diagnoses (19 Nov. 2021) 
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={6} paddingRight={[0,0,4]}>
						<Grid container spacing={1}>
								<Grid item xs={6} lg={3}>
									<StyledButton
										variant={amount === 100_000_000 ? 'contained' : 'outlined'}
										size='small'
										onClick={() => setAmount(100_000_000)}
									>
										1 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6} lg={3}>
									<StyledButton
										variant={amount === 500_000_000 ? 'contained' : 'outlined'}
										size='small'
										onClick={() => setAmount(500_000_000)}
									>
										5 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6} lg={3}>
									<StyledButton
										variant={amount === 1_000_000_000 ? 'contained' : 'outlined'}
										size='small'
										onClick={() => setAmount(1_000_000_000)}
									>
										10 ICP
									</StyledButton>
								</Grid>
								<Grid item xs={6} lg={3}>
									<StyledButton
										variant={amount === 1_500_000_000 ? 'contained' : 'outlined'}
										size='small'
										onClick={() => setAmount(1_500_000_000)}
									>
										15 ICP
									</StyledButton>
								</Grid>
							</Grid>
							<Box display='flex' paddingTop={1} flexDirection={['column', 'column', 'row']} paddingBottom={1}>
								<StyledTextField
								sx={{
									marginBottom: [0.5, 0.5, 0]
								}}
									label='Custom amount'
									type='number'
									value={amount / 100_000_000}
									onChange={e => setAmount(Number(e.target.value) * 100_000_000)}
								/>
								<Box display='flex' flexGrow={1} paddingLeft={[0,0,1]}>
									<StyledButton
										disabled={amount <= 0}
										variant='contained'
										size='small'
										onClick={() => handleOnDonate(amount)}
									>
										Donate
									</StyledButton>
								</Box>
							</Box>
							<Typography
								variant='body2'
								gutterBottom
								sx={{paddingBottom: 1, overflowWrap: 'break-word'}}
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								<strong>Wallet address:</strong> 8ead44e70d740aa347203143b3d8ab09c5aeed318aeb3db2e527846875c27e2a
							</Typography>
							<Divider sx={{marginBottom: 2}}/>
							<Typography
								variant='body2'
								gutterBottom
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								Hello everyone, I am Martin a team member of the NFT Studio project. As you might have heard our founder Lukas Merville has been diagnosed with cancer. To help Lukas provide for his family in this difficult time - myself, and a couple of developer friends from other IC projects decided to setup a fundraising page. If you have a moment, please watch the video and if you can afford to donate, please do. Thank you. 
							</Typography>
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
								Lukas graduated in Art History, Philosophy of Arts and Literature. After graduation he decided to explore other countries and lived in Japan and South Korea for ten years. It was during this time; he met his girlfriend Anna and they fell in love. In early 2021 Lukas and Anna found out that she was pregnant and decided to move to Poland to be closer to Anna's family. 
In Poland things were going really well, Lukas was hard at work developing the NFT Studio project and it didn’t take long for his work to capture the attention of the Dfinity foundation, and after highlighting NFT Studio in a tweet, the project really started to take off. 
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
								However the happiness of the year was overshadowed in November, when Lukas was diagnosed with colon cancer. After starting his treatment in Poland, the doctors recommended he continued his treatment in Canada, where he’d have a better chance of recovery. 
Now in Canada, the situation is difficult. With Lukas fighting his cancer daily, he is not able to work, and with the baby due in February neither can Anna as she is heavily pregnant - meaning they do not have a stable income – which is why we really felt the need to create this fundraiser to support them.
							</Typography>
							<Typography
								variant='body2'
								gutterBottom
								style={{ paddingBottom: '16px' }}
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								Thank you for taking the time to read this, and if you do decide to donate thank you for your support.
							</Typography>
							<Divider style={{ margin: '16px' }} />
							<Typography
								variant='caption'
								gutterBottom
								sx={{paddingBottom: 1 }}
								color='text.secondary'
								fontFamily='Luxurious Roman'
							>
								All donations are send to a ICP wallet controlled by Anna
							</Typography>
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
