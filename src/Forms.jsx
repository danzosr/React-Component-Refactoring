const Forms = ({ addNote, handleNoteChange, newNote }) => {
    const styles = {
    input: {
        fontSize: "1.25em",
        marginLeft: "5%",
        marginRight: "2%",
        padding: ".25em .75em",
        width: "13%",
        border: "1px solid rgba(83, 126, 251)",
        borderRadius: "5px",
    },
    submit: {
        color: "white",
        backgroundColor: "#7296FF",
        padding: ".5em",
        borderRadius: "10px",
        borderColor: "white",
        fontSize: "1.25em",
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "background-color 0.3s, border-radius 0.3s",
        ':hover': {
            backgroundColor: "#5a7bcd",  // Más oscuro al hacer hover
            borderRadius: "1px solid"  // Añade redondeo al hacer hover
        }
    },
    };

    return (
    <form onSubmit={addNote}>
        <input style={styles.input} value={newNote} onChange={handleNoteChange} />
        <button style={styles.submit} type="submit">Save</button>
    </form>
    );
};

export default Forms;
