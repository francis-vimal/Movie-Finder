🎬 Movie Finder

Movie Finder is a web application built using EJS and JavaScript that allows users to search for movies and explore details such as titles, posters, ratings, and descriptions — all powered by a public movie API.

🌟 Features

🔍 Search movies by title

🖼️ View movie posters, release year, and ratings

📖 Get movie overviews and detailed info

⚡ Dynamic and responsive UI using EJS templates

🌐 Data fetched from a public movie API (e.g., OMDb / TMDb)

🛠️ Tech Stack

Frontend Template Engine: EJS

Language: JavaScript (ES6)

Runtime: Node.js + Express

API: Public Movie API (OMDb / TMDb)

Styling: CSS

⚙️ Installation & Setup

Follow these steps to run the project locally:

# Clone the repository
git clone https://github.com/francis-vimal/Movie-Finder.git

# Navigate to the project folder
cd <your-repo-name>

# Install dependencies
npm install

# Start the server
npm start


Then, open http://localhost:3000
 in your browser.

📁 Project Structure
├── public
│   ├── css              # Stylesheets
│   ├── js               # Client-side scripts
├── views
│   ├── index.ejs        # Homepage / Search UI
│   ├── movie.ejs        # Movie detail page
├── app.js               # Main server file
├── package.json
└── README.md

🔑 API Reference

This project uses a public movie API for fetching movie data.
You can get your API key from:

OMDb API

or

The Movie Database (TMDb)

Store your API key in an environment variable or .env file:

API_KEY=your_api_key_here

🚀 Live Demo

🔗 [View Live Project](https://movie-finder-omcy.onrender.com/)

💡 Future Enhancements

🎞️ Add pagination for search results

❤️ Favorite or bookmark movies

🌙 Add dark/light mode toggle

👨‍💻 Author

Vimal Arul Francis S

GitHub: @francis-vimal

LinkedIn: https://www.linkedin.com/in/vimal-arul-francis-s-444675244/

⭐ If you found this project helpful or inspiring, consider giving it a star!
