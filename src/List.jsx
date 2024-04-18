const List = ({ notes }) => {
    const styles = {
        list: {
            margin: "0 5%",
            paddingBottom: "2%",
            color: "gray",
            fontSize: "1.5em",
            fontWeight: "bold",
            textTransform: "uppercase"
        },
    };

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id} style={styles.list}>{note.content}</li>
            ))}
        </ul>
    );
};

export default List;
