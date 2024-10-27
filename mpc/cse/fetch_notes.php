<?php

include 'db_connection.php';


if (isset($_GET['lecture_id']) && is_numeric($_GET['lecture_id'])) {
    $lecture_id = intval($_GET['lecture_id']);
} else {
    die("Invalid lecture ID.");
}

$sql = "SELECT note_title, note_link FROM notes WHERE lecture_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $lecture_id);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Notes for Lecture <?php echo htmlspecialchars($lecture_id); ?></title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        a { text-decoration: none; color: #007BFF; }
        a:hover { text-decoration: underline; }
        .error { color: red; }
    </style>
</head>
<body>

<script>
    
    console.log("Executing SQL: <?php echo addslashes($sql); ?>");
    console.log("Bound lecture_id: <?php echo $lecture_id; ?>");
</script>

<?php
$stmt->execute();
$result = $stmt->get_result();

$note_count = $result->num_rows;

echo "<script>console.log('Number of notes retrieved: " . $note_count . "');</script>";

?>
<h1>Notes for Lecture <?php echo htmlspecialchars($lecture_id); ?></h1>

<?php if ($note_count === 1): ?>
    <?php
        $row = $result->fetch_assoc();
        
    
        echo "<script>console.log('Fetched row: " . json_encode($row) . "');</script>";

        
        if (!empty($row['note_link'])) {
           
            echo "<script>console.log('Note link: " . htmlspecialchars($row['note_link']) . "');</script>";
            
            
            echo "<p>Note: <a href='http://localhost" . htmlspecialchars($row['note_link']) . "' target='_blank'>" . htmlspecialchars($row['note_title']) . "</a></p>";
        } else {
            echo "<p class='error'>No valid link for the note available.</p>";
        }
    ?>
<?php elseif ($note_count > 1): ?>
    <ul>
        <?php while ($row = $result->fetch_assoc()): ?>
            <li>
                <a href="http://localhost<?php echo htmlspecialchars($row['note_link']); ?>" target="_blank">
                    <?php echo htmlspecialchars($row['note_title']); ?>
                </a>
            </li>
        <?php endwhile; ?>
    </ul>
<?php else: ?>
    <p class="error">No notes available for this lecture.</p>
<?php endif; ?>

<p><a href="../html/index.html">Back to Home</a></p>

</body>
</html>

<?php

$stmt->close();
$conn->close();
?>
