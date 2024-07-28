let quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Innovation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "The only way to do great work is to love what you do.", category: "Work" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>Category: ${randomQuote.category}</em></p>`;
    } else {
      quoteDisplay.innerHTML = "<p>No quotes available.</p>";
    }
  }
  
  // Function to add a new quote
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
    
    if (newQuoteText && newQuoteCategory) {
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      alert('Quote added successfully!');
    } else {
      alert('Please enter both a quote and a category.');
    }
  }
  
  // Event listeners for buttons
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  document.getElementById('addQuote').addEventListener('click', addQuote);
  
  // Initial quote display
  showRandomQuote();