const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Very simple initialization
let seats = [
    { id: 1, number: "A01", status: "available" },
    { id: 2, number: "A02", status: "available" },
    { id: 3, number: "A03", status: "available" }
];

// SUPER SIMPLE ROOT ROUTE - Plain text
app.get("/", (req, res) => {
    console.log("✅ Root route hit!");
    res.send("🎯 Ticket Booking System is WORKING! Go to /seats");
});

// Simple seats route
app.get("/seats", (req, res) => {
    console.log("✅ Seats route hit!");
    res.json({
        message: "Success!",
        seats: seats
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error("❌ Server error:", err);
    res.status(500).send("Server error");
});

// Start server with better logging
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🎯 Server started successfully!`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`📍 Network: http://127.0.0.1:${PORT}`);
    console.log(`📍 Try: curl http://localhost:${PORT}`);
}).on('error', (err) => {
    console.log(`❌ Server startup error: ${err.message}`);
    if (err.code === 'EADDRINUSE') {
        console.log(`💡 Port ${PORT} is busy. Try:`);
        console.log(`   - Kill other process: kill -9 $(lsof -t -i:3000)`);
        console.log(`   - Or use different port: change PORT to 3001`);
    }
});