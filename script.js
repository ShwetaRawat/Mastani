const progressBar = document.getElementById('progress-bar-inner');
const progressText = document.getElementById('progress-text');
const amountRaisedText = document.getElementById('amount-raised');
const amountRemainingText = document.getElementById('amount-remaining');




function updateProgress(amountRaised) {
    const totalGoal = 8100;
    const remainingAmount = totalGoal - amountRaised;

    const percentage = (amountRaised / totalGoal) * 100;
    progressBar.style.width = percentage + '%';
    
    amountRaisedText.textContent = `₹${amountRaised} raised so far.`;
    amountRemainingText.textContent = `₹${remainingAmount} remaining.`;
}

// Call the function with the amount raised
updateProgress(5200);
