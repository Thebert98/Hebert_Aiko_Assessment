# Hebert_Aiko_Assessment
## Personal Information
Timothy Hebert
Graduate Student at Stevens Institute of Technology
Contact Email: t.heb1998@gmail.com

## Instructions and Specifications
I completed this Assesment in JavaScript using the React library version "^18.1.0" on  visual studio code.
First npm install in the main folder which should be 'Hebert_Aiko_Assessment'. Once installing has completed type npm start in the main folder and the react application will run at localhost:3000.

## Thought Process
The following is a run down on how I tackled this project:

### Getting Started
I decided to complete this project in React because that is what I am most familar with. I began by setting up the foundation of the homepage by creating the Landing.js component and setting up App.js to work with that component. After the simple foundation was laid, I focused on obtaining the RSS Feed XML data. 

### Creating the Landing Page
Going into this project I was unfamilar with how to obtain and manipulate xml data in JS, but I was able to find out how to use  the XMLHttpRequest object after a simple google search. Using the XMLHttpRequest I was able to obtain the xml data from the desired medium RSS feed which I stored using a state hook in the variable feedData, I also set loading to false so that the page would no longer render 'loading...'.  

After Obtaining the feed data, I once again used google to figure out how to parse the items, which lead to me using the DOMParser object to parse the feed data and store it into the varaible xmlDoc as a usable document. After using console.log on the parsed data, I was found that the data I wanted were the elements with the tag 'item'. I targeted the elements with the tag name 'item' within the xmlDoc variable and used a spread operator to store those items in an array called items. 

I then used JSX to render html which included the (hardcoded) name of the blog whose feed I was requesting, a blog header, and and unordered list which contained the contents of the items array mapped out into list elements. Each list element called the getPostData function which uses a while loop to iterate through the childrenNode of the item that is passed through the function. Within this while loop, the data for a article's title, author, publishing date, categories, and link are obtained by checking for their respective tag names within the nodeName attribute. I noticed that the publishing date is always after the other desired data so the while loop stops once the publishing date is stored in the variable pubDate. I used a loop to complete this because the indexes of the desired childrenNodes are not always the same and the number of categories also varies.

Once the desired data was obtained, I used split to remove the time and time zone from pubDate so that only the date remained and stored that date in the date variable, I also split the https:// from link and then split it again using '/' as a delimter this time. I stored the results from the second split as a single string with the characters '.-.' between each part as a delimter for later. With all the data being properly formatted I rendered the data in a list using JSX. I made it so that when the title of an article is clicked the user is lead to '/blog/:blogUrl' with the blogUrl being the link that I formatted before.

### Displaying Blog Articles 
For the Blog.js component, I used the getParams call to get the value of ':baseUrl', I then removed the '.-.' delimeters within the url and put a '/' infront of each part to recreate part of the original url and stored it in the variable 'url'. I then used a useEffect hook and a fetchData function within that hook. Within the fetch Data function I used an axios get call to 'https:/' + url which we complete the original url. Axios then retreived the html data from the medium article which I stored in the variable 'blogData' using a state hook and once again set loading to false. Once I obtained the data, I created a div and used dangerouslySetInnerHTML to insert the html data into the div since the data is sanitized HTML as stated in the requirements.

### Finishing Touches 
I then created a navigation bar to create a home button that would link the user to the landing page when pressed. With this the user can return to the landing page after viewing an article.

After that I played around with  the css file  so that the resulting html looked a little more appealing. 




 
