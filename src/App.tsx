import { FluentProvider, makeStyles, webLightTheme, tokens } from "@fluentui/react-components";
import Home from "./Home";

const useStyles = makeStyles({
	root: {
		height: "100%",
        padding: tokens.spacingHorizontalM,
        backgroundColor: tokens.colorNeutralBackground2,
	},
	container: {
		height: "100%",
		padding: tokens.spacingHorizontalL,
		fontSize: tokens.fontSizeBase300,
		overflow: "auto",
		borderRadius: tokens.borderRadiusMedium,
		'& h1': {
			marginTop: tokens.spacingVerticalS,
            fontSize: tokens.fontSizeHero900,
            fontWeight: tokens.fontWeightRegular,
		},
		'& h2': {
			margin: tokens.spacingVerticalNone,
			fontSize: tokens.fontSizeBase300,
			fontWeight: tokens.fontWeightSemibold
		}
	}
});

function App() {
	const classes = useStyles();
	return (
		<FluentProvider theme={webLightTheme} className={classes.root}>
			<div className={classes.container}>
				<Home />
			</div>
		</FluentProvider>
	);
}

export default App;
