# Neo-Fi-Interview




https://user-images.githubusercontent.com/88813613/235452708-b71b1f37-32ff-4923-a7ea-4daed0c7ba08.mp4


### Commands to run application
`npm run dev`

### Task Brief
NeoFi Frontend Developer Round – 1 Assignment
 
The task is to code the following UI design using HTML, CSS ( JQuery [ or React ] is preferred), and JavaScript.
https://www.figma.com/file/PcKN63mPoHZw9LXtAPbX1U/Interview-task--1?type=design&node-id=5-2&t=xTUO33q3zk11CZ2V-0
 
The current value of the selected token shown in the first page should be real-time. You can use the Binance websocket to fetch the real-time data. (Update speed: 1000ms)
https://binance-docs.github.io/apidocs/spot/en/#trade-streams
Tokens in the second page are fetched from Binance. You can choose any tokens to display. There should be at least 20 tokens with no duplicates.
Tip:  Token_ticker_names:
1. BTCUSDT
2. ETHUSDT
3. MATICUSDT
4. BNBUSDT
5. XRPUSDT
6. SOLUSDT


Binance websocket fetch the price in USDT. For the time being you can consider 1USD = 80 INR As a constant, or use some freely available APIs, for fiat exchanges.
When the dropdown list is clicked on to select the tokens, the pop up shown in the second page should appear. And the search bar in the pop up must be functional. When the token is changed, the logo on the top circular notch of the card also should change, along with the real-time price as well.
The second input box is disabled, and it will show the estimate amount of token the user will get once he enter the amount of INR he is going to invest. The second input box must dynamically change as soon as the user starts to enter data in the first input box.
Rest of the buttons and navbar in the page is not functional, but the elements should be present in the page. You can download the required logo images from the web to be shown in the page.
 		Bonus Point: Make the website as responsive as possible.
Hosting: Please use any free hosting services to deploy the task and share the link along with the github with us.


