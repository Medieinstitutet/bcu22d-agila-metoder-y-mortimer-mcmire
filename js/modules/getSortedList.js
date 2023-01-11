export default async function getSortedList() {
    const API_URL = 'https://api.coingecko.com/api/v3';
    const response = await fetch(`${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h,30d,1y`);
    const data = await response.json();
    return data;
}