import getSortedList from "./getSortedList.js";

export default async function createBottomFiveMovers () {
    const sortedListAscending = await getSortedList();
    sortedListAscending.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    const bottomFive = sortedListAscending.slice(0, 5);

    const bottomMoversList = document.createElement('ul');
    bottomMoversList.style.padding = "20px";
    content.appendChild(bottomMoversList);

    bottomFive.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = ` ${item.id}: <span class="red-numbers">${item.price_change_percentage_24h.toFixed(1)}%</span>`;
        li.classList = "BottomFiveMovers";
        bottomMoversList.appendChild(li);
    });
    return bottomMoversList;
}
