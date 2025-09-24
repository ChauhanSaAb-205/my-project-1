const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Root route - thoda detailed response
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Playing Cards API!</h1>
    <p>Available endpoints:</p>
    <ul>
      <li><a href="/cards">/cards</a> - Get all cards</li>
      <li>/cards/:id - Get specific card</li>
    </ul>
  `);
});

// In-memory data storage
let cards = [
  { id: 1, suit: "Hearts", value: "A" },
  { id: 2, suit: "Spades", value: "K" },
];

// GET all cards
app.get("/cards", (req, res) => {
  res.json({
    message: "Cards retrieved successfully",
    count: cards.length,
    cards: cards
  });
});

// GET card by ID
app.get("/cards/:id", (req, res) => {
  const card = cards.find((c) => c.id === parseInt(req.params.id));
  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }
  res.json(card);
});

// POST - Add new card
app.post("/cards", (req, res) => {
  const { suit, value } = req.body;
  
  if (!suit || !value) {
    return res.status(400).json({ message: "Suit and value are required" });
  }
  
  const newCard = {
    id: cards.length + 1,
    suit,
    value,
  };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// DELETE card by ID
app.delete("/cards/:id", (req, res) => {
  const cardIndex = cards.findIndex((c) => c.id === parseInt(req.params.id));
  if (cardIndex === -1) {
    return res.status(404).json({ message: "Card not found" });
  }
  const deletedCard = cards.splice(cardIndex, 1);
  res.json({ message: "Card deleted successfully", deletedCard });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server with better error handling
app.listen(PORT, (error) => {
  if (error) {
    console.error("❌ Server startup error:", error);
    return;
  }
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   http://localhost:${PORT}/`);
  console.log(`   http://localhost:${PORT}/cards`);
});