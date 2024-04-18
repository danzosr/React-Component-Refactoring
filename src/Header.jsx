const Header = () => {
    const styles = {
        header: {
            margin: "0 5%",
            paddingTop: "3%",
            paddingBottom: ".5%",
        },
        title: {
            fontSize: "3em",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: ".5em"
        },
    };


    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Notes</h1>
        </header>
    );
};

export default Header;