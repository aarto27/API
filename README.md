Random API Fetcher

Description

This project is a simple web application that fetches random data from various public APIs. It allows users to:

Get a random fact about cats.

Display a random image of a dog.

Fetch a random joke.

Retrieve a list of universities by country.

The application uses HTML, CSS, and JavaScript and makes API calls using Axios and Fetch API.

Features

Cat Facts: Fetches a random fact about cats from https://catfact.ninja/fact.

Dog Images: Displays a random dog image from https://dog.ceo/api/breeds/image/random.

Jokes: Retrieves a random joke from https://icanhazdadjoke.com/.

Universities List: Allows users to search for universities by country using http://universities.hipolabs.com/search?name=.

Technologies Used

HTML – Structure of the web page

CSS – Styling and layout

JavaScript – Dynamic content and API handling

Axios – HTTP requests to APIs

Fetch API – Alternative HTTP request handling

Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/random-api-fetcher.git

Navigate to the project directory:

cd random-api-fetcher

Open index.html in a browser.

Usage

Click the "Get Fact" button to fetch a random cat fact.

Click the "Show Dog" button to display a random dog image.

Click the "Get Jokes" button to get a random joke.

Enter a country name and click "Get Universities" to fetch a list of universities.

File Structure

random-api-fetcher/
│── index.html         # Main HTML file
│── styles.css         # CSS for styling
│── script.js         # JavaScript for API handling

API Endpoints Used

Cat Facts: https://catfact.ninja/fact

Dog Images: https://dog.ceo/api/breeds/image/random

Jokes: https://icanhazdadjoke.com/

Universities: http://universities.hipolabs.com/search?name=

Dependencies

Axios CDN: https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js

License

This project is licensed under the MIT License.
