import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Danh sách các câu nói
  const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  ];

  // State để quản lý câu nói hiện tại và danh sách yêu thích
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [favorites, setFavorites] = useState([]);

  // Tải danh sách yêu thích từ localStorage khi ứng dụng được tải lần đầu
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Lưu danh sách yêu thích vào localStorage mỗi khi danh sách thay đổi
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Hàm để lấy một câu nói ngẫu nhiên mới
  const getNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  // Hàm để lưu câu nói yêu thích
  const saveToFavorites = () => {
    if (!favorites.includes(quote)) {
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <p>{quote}</p>
      <button onClick={getNewQuote}>Get New Quote</button>
      <button onClick={saveToFavorites} style={{ marginLeft: "10px" }}>
        Save to Favorites
      </button>

      {favorites.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Favorite Quotes</h2>
          <ul>
            {favorites.map((favQuote, index) => (
              <li key={index}>{favQuote}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
