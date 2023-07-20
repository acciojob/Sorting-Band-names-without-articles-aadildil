//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal', 'a leaning tower'];

function removeArticle(a)
	{
		const articles=['a','an','the']
		const words=a.split(" ");
		const filteredWords=words.filter(word=>!articles.includes(word.toLowerCase()));
		return filteredWords.join(' ');
	}

function addItems(listItem)
	{
		let unordered=document.getElementById('band');
		const liElement=document.createElement('li');
		liElement.textContent=listItem;
		unordered.appendChild(liElement);
		
	}
const newNames=touristSpots.map(name=>removeArticle(name));
const sortedList = newNames.sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }));
for(let i=0;i<sortedList.length;i++)
	{
		addItems(sortedList[i]);
	}