import { FluentProvider, makeStyles, webLightTheme, tokens } from "@fluentui/react-components";
import GlobalContext from "./sdk/GlobalContext";

const useStyles = makeStyles({
	root: {
		height: "100%",
		padding: tokens.spacingHorizontalM,
		backgroundColor: tokens.colorNeutralBackground2
	},
	container: {
		height: "100%",
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow8,
		padding: tokens.spacingHorizontalL,
		fontSize: tokens.fontSizeBase300,
		overflow: "auto",
		borderRadius: tokens.borderRadiusMedium,
		'& h1': {
			marginTop: tokens.spacingVerticalNone,
			fontSize: tokens.fontSizeBase500,
			fontWeight: tokens.fontWeightSemibold
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
				<h1>Form Wired WebResource</h1>
				<p>
				{GlobalContext.getFormContext().data.entity.getEntityName()}: {GlobalContext.getFormContext().data.entity.getId()}
				</p>
			</div>
		</FluentProvider>
	);
}

export default App;
