const categoryList = document.getElementById("catetory-list");
const categories = ["Pizza", "Pasta", "Salads", "Desserts", "Drinks"];

if (categoryList) {
    categoryList.innerHTML = categories.map((item) => `<li>${item}</li>`).join("");
}

const menu = [
    {
        name: "Cheese pizza",
        details: "A lot of cheese, made with love",
        price: 200,
        image: "images/images.cover.jpg",
    },
    {
        name: "Chicken pizza",
        details: "A lot of cheese, fresh chicken, made with love",
        price: 350,
        image: "images/Image20260819133548.jpg",
    },
    {
        name: "Classic Pasta",
        details: "Creamy sauce with parmesan and herbs",
        price: 260,
        image: "images/images.cover.jpg",
    },
    {
        name: "Fresh Salad",
        details: "Green salad with a zesty garlic dressing",
        price: 180,
        image: "images/Image20260819133548.jpg",
    }
];

const cart = [];
const cardsCon = document.getElementById("cards-con");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderMenu() {
    if (!cardsCon) return;

    cardsCon.innerHTML = menu
        .map(
            (item, index) => `
                <article class="food-card">
                    <img src="${item.image}" alt="${item.name}" />
                    <h3>${item.name}</h3>
                    <p>${item.details}</p>
                    <span class="price">${item.price} EGP</span>
                    <button class="add-to-cart" type="button" data-index="${index}">Add to cart</button>
                </article>
            `
        )
        .join("");
}

function addToCart(index) {
    const selectedItem = menu[index];
    if (!selectedItem) return;

    const foundItem = cart.find((item) => item.name === selectedItem.name);

    if (foundItem) {
        foundItem.qty += 1;
    } else {
        cart.push({
            name: selectedItem.name,
            price: selectedItem.price,
            qty: 1,
            image: selectedItem.image,
        });
    }

    renderCart();
}

function renderCart() {
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0 EGP";
        return;
    }

    cartItems.innerHTML = cart
        .map(
            (item) => `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong>
                        <span>${item.qty} x ${item.price} EGP</span>
                    </div>
                    <span>${item.qty * item.price} EGP</span>
                </div>
            `
        )
        .join("");

    const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    cartTotal.textContent = `${total} EGP`;
}

renderMenu();
renderCart();

document.addEventListener("click", (event) => {
    if (event.target.matches(".add-to-cart")) {
        const index = Number(event.target.dataset.index);
        addToCart(index);
    }
});

const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your table has been booked successfully!");
        bookingForm.reset();
    });
}

const primaryButton = document.querySelector(".primary-btn");
if (primaryButton) {
    primaryButton.addEventListener("click", () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    });
}
