# General Information

node version : v14.16.1
npm version : 6.14.11

higher version of npm may occures errors.

# Sentiment Analysis API 

When you enter a text this tool provided is analyzed to determine if it expresses a positive/negative/neutral sentiment; to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

for example :
 when you write "you are beautiful" will return positive 
 when you write "you are ugly" will return negative

# Api url

https://api.meaningcloud.com/sentiment-2.1

# Run as a Client side

run command 'npm run build-dev' on port 8080

# Run as a server side

run commands:
- npm run build-prod
- npm run start

will open port 8081

# Sample Texts:
- I love you
- I hate you
- "Main dishes were quite good, but desserts were too sweet for me."
- "In the country of Sokovia, the Avengers – Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton – raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments – twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy – and apprehend Strucker, while Stark retrieves Loki's scepter."

# Run test cases to test checknumbers function

run command 'npm run test'

# Worker Server

the site will be available even when you stop your local serve


