import React from "react";
import { Typography, AppBar, Button, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import ImageCard from "./Card";

const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant="h6">Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Photo Album
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Velit commodo dolore ullamco nulla elit exercitation non velit mollit eiusmod in ea veniam commodo.
							Exercitation deserunt do ipsum pariatur tempor aute sit occaecat ullamco aute magna deserunt aute. Ullamco
							duis aliqua ex cupidatat minim dolore cillum laborum ad magna nostrud. Non anim nostrud adipisicing ut
							pariatur. Nostrud sunt nisi officia quis et qui veniam ea nostrud. Qui aute do amet consectetur
							adipisicing in occaecat esse mollit officia elit.
						</Typography>
						<div className={classes.button}>
							<Grid container spacing={2} justifyContent="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<ImageCard />
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary">
					Something here to give the footer a purpose!
				</Typography>
			</footer>
		</>
	);
};

export default App;
