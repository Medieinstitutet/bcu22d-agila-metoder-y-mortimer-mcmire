import getSortedList from "./getSortedList.js";

export default async function printTopMovers() {

    const content = document.getElementById("content");

    const sortedListAscending = await getSortedList();
    sortedListAscending.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    const bottomFive = sortedListAscending.slice(0, 5);
    console.log("Asc:", bottomFive);

    const bottomMoversList = document.createElement('ul');
    content.appendChild(bottomMoversList);
    console.log("123");

    bottomFive.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.id}: ${item.price_change_percentage_24h}%`;
        bottomMoversList.appendChild(li);
    });
    console.log("Du är korkad bror");

    const sortedListDescending = await getSortedList();
    sortedListDescending.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    const topFive = sortedListDescending.slice(0, 5);
    console.log("Desc:", topFive);


    const topMoversList = document.createElement('ul');
    content.appendChild(topMoversList);
    console.log("678");

    topFive.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.id}: ${item.price_change_percentage_24h}%`;
        topMoversList.appendChild(li);
    });
}