// لیستی نموونەی کۆدەکان
const products = [
    { name: "PUBG 660 UC", price: "10.00$", seller: "@Omdda", status: "بەردەستە" },
    { name: "Cheat VIP 1 Month", price: "25.00$", seller: "@Neon", status: "بەردەستە" },
    { name: "Steam 50$ Card", price: "50.00$", seller: "@Fly", status: "نەماوە" }
];

const productList = document.getElementById('productList');

// نیشاندانی لیستەکە لەناو سایتەکە
products.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
        <div>
            <strong style="display:block;">${item.name}</strong>
            <small style="color:gray;">فرۆشیار: ${item.seller}</small>
        </div>
        <div style="color:#00f2ff; font-weight:bold;">${item.price}</div>
        <button class="btn-primary" onclick="buyItem('${item.name}')">${item.status === 'نەماوە' ? 'تەواو بووە' : 'کڕین'}</button>
    `;
    productList.appendChild(div);
});

function buyItem(name) {
    alert("تۆ هەڵبژاردەت کرد بۆ کڕینی: " + name + "\nتکایە پەیوەندی بە تێلێگرام بکە بۆ ناردنی پارە.");
}
