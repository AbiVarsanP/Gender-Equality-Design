// Discussion Post Feature
document.getElementById('post-button')?.addEventListener('click', function () {
    let inputText = document.getElementById('discussion-input').value;
    if (inputText) {
        let post = document.createElement('p');
        post.innerText = inputText;
        document.getElementById('discussion-feed').appendChild(post);
        document.getElementById('discussion-input').value = '';
    }
});

// Quiz Submission
document.getElementById('quiz-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    let answer = document.getElementById('question1').value;
    if (answer.toLowerCase().includes("equality")) {
        document.getElementById('quiz-result').innerText = "Correct! Gender equality means equal rights and opportunities for all genders.";
    } else {
        document.getElementById('quiz-result').innerText = "Try again. Think about equal rights for everyone.";
    }
});
