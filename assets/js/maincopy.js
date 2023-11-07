console.log("connected test is good.");


cityForm.addEventListener("submit", captureCity);

function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    const commentList = document.getElementById("comment-list");
    const listItem = document.createElement("li");
    listItem.className = "collection-item";
    listItem.textContent = commentText;
    commentList.appendChild(listItem);
    commentInput.value = ""; // Clear the input field after adding a comment
  }}
