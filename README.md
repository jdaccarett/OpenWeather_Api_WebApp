HTML page with two forms. The first form connects to Open Weather Map, lets a user input a city or a zip code and asynchronously shows the weather information retrieved from Open Weather Map.

The other form submits to http://httpbin.org/post.

This form submits asynchronously via a POST. It display the data you get back (which should matches the data you send). It will be stored as a string in the data field of the JSON encoded string returned from the server.

