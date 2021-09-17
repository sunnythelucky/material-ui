import React, { useState, useEffect } from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import useStyles from "./styles";
import unsplash from "./unsplash";

function ImageCard() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		getPhotos();
	}, []);

	const getPhotos = async () => {
		try {
			const response = await unsplash.get("/search/photos", {
				params: { query: "animal" },
			});
			setData(response.data.results);
			console.log(response.data.results);
		} catch (err) {
			setError(err);
			console.error("Here some errors got caught!", err);
		}
	};

	return (
		<Grid container spacing={4}>
			{data.map(({ id, urls, alt_description }) => (
				<Grid item key={id} xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardMedia className={classes.cardMedia} image={urls.raw} title="Image title" />
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant="h5">
								Photo
							</Typography>
							<Typography>{alt_description}</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" color="primary">
								View
							</Button>
							<Button size="small" color="primary">
								Edit
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}

export default ImageCard;
