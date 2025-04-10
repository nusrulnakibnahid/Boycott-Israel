// Enhanced Product Database with Categories
const products = {
    // Food & Beverage
    "Coca-Cola": {
        name: "Coca-Cola",
        company: "The Coca-Cola Company",
        category: "food",
        isIsraeli: true,
        logo: "images/international/Coca-Cola.png",
        description: "কার্বনেটেড সফট ড্রিংক",
        alternatives: [
            { name: "Mojo", logo: "images/bangladeshi/mojo.jpg", company: "Akij Food & Beverage Ltd" },
            { name: "Speed", logo: "images/bangladeshi/Speed.png", company: "Global Beverage Ltd" },
            { name: "RC Cola", logo: "images/bangladeshi/RC Cola.jpeg", company: "Global Beverage Ltd" }
        ]
    },
    "Pepsi": {
        name: "Pepsi",
        company: "PepsiCo",
        category: "food",
        isIsraeli: true,
        logo: "images/international/Pepsi.png",
        description: "কার্বনেটেড সফট ড্রিংক",
        alternatives: [
            { name: "Mojo", logo: "images/bangladeshi/mojo.jpg", company: "Akij Food & Beverage Ltd" },
            { name: "Speed", logo: "images/bangladeshi/Speed.png", company: "Global Beverage Ltd" },
            { name: "RC Cola", logo: "images/bangladeshi/RC Cola.jpeg", company: "Global Beverage Ltd" }
        ]
    },
    "Nestle": {
        name: "Nestle",
        company: "Nestlé S.A.",
        category: "food",
        isIsraeli: true,
        logo: "images/international/Nestlé.png",
        description: "খাদ্য ও পানীয় পণ্য",
        alternatives: [
            { name: "PRAN", logo: "images/bangladeshi/Pran.png", company: "PRAN Group" },
            { name: "ACI", logo: "images/bangladeshi/ACI.png", company: "ACI Limited" }
        ]
    },
    "Maggi": {
        name: "Maggi",
        company: "Nestlé S.A.",
        category: "food",
        isIsraeli: true,
        logo: "images/international/Maggi.png",
        description: "ইনস্ট্যান্ট নুডুলস",
        alternatives: [
            { name: "PRAN Noodles", logo: "images/bangladeshi/PRAN Noodles.png", company: "PRAN Group" },
            { name: "Mr. Noodles", logo: "images/bangladeshi/mr noddles.png", company: "Square Food & Beverage Ltd" }
        ]
    },
    "Oreo": {
        name: "Oreo",
        company: "Mondelez International",
        category: "food",
        isIsraeli: true,
        logo: "images/international/Oreo.png",
        description: "কুকিজ",
        alternatives: [
            { name: "PRAN Potata", logo: "images/bangladeshi/PRAN Potata.jpeg", company: "PRAN Group" },
            { name: "Doreo Biscuits", logo: "images/bangladeshi/Doreo.png", company: "Partex Star Group" }
        ]
    },
    "KFC": {
        name: "KFC",
        company: "Yum! Brands",
        category: "food",
        isIsraeli: true,
        logo: "images/international/KFC.png",
        description: "ফাস্ট ফুড চেইন",
        alternatives: [
            { name: "Chillox", logo: "images/bangladeshi/Chillox.jpg", company: "Chillox Bangladesh" },
            { name: "BFC", logo: "images/bangladeshi/BFC.png", company: "Best Fried Chicken" }
        ]
    },

    // Personal Care
    "Oral-B": {
        name: "Oral-B",
        company: "Procter & Gamble",
        category: "personal-care",
        isIsraeli: true,
        logo: "images/international/Oral-B.png",
        description: "ডেন্টাল কেয়ার পণ্য",
        alternatives: [
            { name: "Pepsodent", logo: "images/bangladeshi/Pepsodent.svg", company: "Unilever Bangladesh" },
            { name: "Sensodyne", logo: "images/bangladeshi/Sensodyne.png", company: "GSK Bangladesh" }
        ]
    },
    "Dove": {
        name: "Dove",
        company: "Unilever",
        category: "personal-care",
        isIsraeli: true,
        logo: "images/international/Dove.png",
        description: "সাবান ও ব্যক্তিগত যত্ন",
        alternatives: [
            { name: "Meril", logo: "images/bangladeshi/Meril.png", company: "Meril Consumer Ltd" },
            { name: "Tibet", logo: "images/bangladeshi/tibet.png", company: "Kohinoor Chemical Company (Bangladesh) Limited." }
        ]
    },
    "Fair & Lovely": {
        name: "Fair & Lovely",
        company: "Unilever",
        category: "personal-care",
        isIsraeli: true,
        logo: "images/international/Fair & Lovely.png",
        description: "ত্বকের সৌন্দর্য পণ্য",
        alternatives: [
            { name: "Tibet Snow", logo: "images/bangladeshi/Tibet Snow.webp", company: "Kohinoor Chemical Company (Bangladesh) Limited." },
            { name: "Meril Fairness", logo: "images/bangladeshi/Meril Fairness.png", company: "Meril Consumer Ltd" }
        ]
    },

    // Electronics
    "HP": {
        name: "HP",
        company: "HP Inc.",
        category: "electronics",
        isIsraeli: true,
        logo: "images/international/HP.png",
        description: "কম্পিউটার ও প্রিন্টার",
        alternatives: [
            { name: "Walton", logo: "images/bangladeshi/Walton.jpeg", company: "Walton Hi-Tech Industries" },
            { name: "Dell", logo: "images/bangladeshi/Dell.png", company: "Dell Technologies" },
            { name: "DCL", logo: "images/bangladeshi/DCL.png", company: "Daffodil Computers LTD" }
        ]
    },
    "Intel": {
        name: "Intel",
        company: "Intel Corporation",
        category: "electronics",
        isIsraeli: true,
        logo: "images/international/Intel.png",
        description: "কম্পিউটার প্রসেসর",
        alternatives: [
            { name: "AMD", logo: "images/bangladeshi/AMD.png", company: "Advanced Micro Devices" },
            { name: "Ryzen", logo: "images/bangladeshi/Ryzen.png", company: "AMD" }
        ]
    },

    // Clothing
    "Levi's": {
        name: "Levi's",
        company: "Levi Strauss & Co.",
        category: "clothing",
        isIsraeli: true,
        logo: "images/international/Levi's.png",
        description: "ডেনিম জিন্স ও পোশাক",
        alternatives: [
            { name: "Twelve", logo: "images/bangladeshi/Twelve.png", company: "Twelve Company Ltd" },
            { name: "Ecstasy", logo: "images/bangladeshi/Ecstasy.png", company: "Ecstasy Apparels" },
            { name: "Aarong", logo: "images/bangladeshi/Aarong.png", company: "BRAC" },
            { name: "Yellow", logo: "images/bangladeshi/Yellow.png", company: "Yellow Apparels Ltd" }
        
        ]
    },
    "Nike": {
        name: "Nike",
        company: "Nike, Inc.",
        category: "clothing",
        isIsraeli: true,
        logo: "images/international/Nike.png",
        description: "স্পোর্টসওয়্যার ও জুতা",
        alternatives: [
            { name: "Bay", logo: "images/bangladeshi/Bay.png", company: "Bay Group" },
            { name: "Apex", logo: "images/bangladeshi/Apex.jpg", company: "Apex Footwear Limited" },
            { name: "Bata", logo: "images/bangladeshi/Bata.png", company: "Bata Shoe Company (Bangladesh) Limited" }
        ]
    },
    "Adidas": {
        name: "Adidas",
        company: "Adidas AG",
        category: "clothing",
        isIsraeli: true,
        logo: "images/international/Adidas.png",
        description: "স্পোর্টসওয়্যার ও জুতা",
        alternatives: [
            { name: "Bay", logo: "images/bangladeshi/Bay.png", company: "Bay Group" },
            { name: "Apex", logo: "images/bangladeshi/Apex.jpg", company: "Apex Footwear Limited" },
            { name: "Bata", logo: "images/bangladeshi/Bata.png", company: "Bata Shoe Company (Bangladesh) Limited" }
        ]
    },

    "Puma": {
        name: "Puma",
        company: "PUMA Schuhfabrik Rudolf Dassler",
        category: "clothing",
        isIsraeli: true,
        logo: "images/international/PUMA.jpg",
        description: "স্পোর্টসওয়্যার ও জুতা",
        alternatives: [
            { name: "Bay", logo: "images/bangladeshi/Bay.png", company: "Bay Group" },
            { name: "Apex", logo: "images/bangladeshi/Apex.jpg", company: "Apex Footwear Limited" },
            { name: "Bata", logo: "images/bangladeshi/Bata.png", company: "Bata Shoe Company (Bangladesh) Limited" }
        ]
    },

    // Baby Care
    "Pampers": {
        name: "Pampers",
        company: "Procter & Gamble",
        category: "baby-care",
        isIsraeli: true,
        logo: "images/international/Pampers.png",
        description: "শিশুর ডায়াপার",
        alternatives: [
            { name: "Savlon Baby", logo: "images/bangladeshi/Savlon Baby.jpeg", company: "ACI Limited" },
            { name: "Baby Shop", logo: "images/bangladeshi/Baby Shop.png", company: "Baby Shop Limited" }
        ]
    },
    "Johnson & Johnson": {
        name: "Johnson & Johnson",
        company: "Johnson & Johnson",
        category: "baby-care",
        isIsraeli: true,
        logo: "images/international/Johnson & Johnson.png",
        description: "শিশু যত্ন পণ্য",
        alternatives: [
            { name: "Square Baby", logo: "images/bangladeshi/Square Baby.png", company: "Square Toiletries" },
            { name: "ACI Baby", logo: "images/bangladeshi/ACI Baby.jpg", company: "ACI Limited" }
        ]
    },

    // Other Categories
    "Spotify": {
        name: "Spotify",
        company: "Spotify Technology S.A.",
        category: "other",
        isIsraeli: true,
        logo: "images/international/Spotify.png",
        description: "মিউজিক স্ট্রিমিং সার্ভিস",
        alternatives: [
            { name: "Bongo Music", logo: "images/bangladeshi/Bongo Music.jpg", company: "Bongo Bangladesh" },
            { name: "BandCamp BD", logo: "images/bangladeshi/BandCamp BD.png", company: "Bangladeshi Artists Collective" }
        ]
    },
    "CNN": {
        name: "CNN",
        company: "Warner Bros. Discovery",
        category: "other",
        isIsraeli: true,
        logo: "images/international/CNN.png",
        description: "আন্তর্জাতিক সংবাদ চ্যানেল",
        alternatives: [
            { name: "Somoy TV", logo: "images/bangladeshi/Somoy TV.png", company: "Somoy Media Limited" },
            { name: "Independent TV", logo: "images/bangladeshi/Independent TV.png", company: "Independent Television Ltd" },
            { name: "Channel 24", logo: "images/bangladeshi/Channel 24.png", company: "Channel 24" }
        ]
    },
    "Disney+": {
        name: "Disney+",
        company: "The Walt Disney Company",
        category: "other",
        isIsraeli: true,
        logo: "images/international/Disney+.png",
        description: "স্ট্রিমিং সার্ভিস",
        alternatives: [
            { name: "Bongo BD", logo: "images/bangladeshi/Bongo BD.png", company: "Bongo Bangladesh" },
            { name: "Chorki", logo: "images/bangladeshi/Chorki.png", company: "Chorki Digital" }
             
        ]
    },
    "Amazon Prime": {
        name: "Amazon Prime",
        company: "Amazon.com, Inc.",
        category: "other",
        isIsraeli: false,
        logo: "images/international/Amazon Prime.png",
        description: "স্ট্রিমিং সার্ভিস"
    },
    "Uber": {
        name: "Uber",
        company: "Uber Technologies, Inc.",
        category: "other",
        isIsraeli: false,
        logo: "images/international/Uber.png",
        description: "রাইড শেয়ারিং সার্ভিস"
    },
    "Airbnb": {
        name: "Airbnb",
        company: "Airbnb, Inc.",
        category: "other",
        isIsraeli: true,
        logo: "images/international/Airbnb.png",
        description: "হোম স্টে সার্ভিস",
        alternatives: [
            { name: "ShareTrip", logo: "images/bangladeshi/ShareTrip.png", company: "ShareTrip Limited" },
            { name: "Travela", logo: "images/bangladeshi/Travela.png", company: "Travela Bangladesh" }
        ]
    },
    "Western Union": {
        name: "Western Union",
        company: "Western Union Company",
        category: "other",
        isIsraeli: false,
        logo: "images/international/Western Union.png",
        description: "মানি ট্রান্সফার সার্ভিস"
    },
    "TripAdvisor": {
        name: "TripAdvisor",
        company: "TripAdvisor, Inc.",
        category: "other",
        isIsraeli: true,
        logo: "images/international/TripAdvisor.png",
        description: "ট্রাভেল রিভিউ প্ল্যাটফর্ম",
        alternatives: [
            { name: "Travelmate", logo: "images/bangladeshi/Travelmate.png", company: "Travelmate Bangladesh" },
            { name: "TourBD", logo: "images/bangladeshi/TourBD.jpg", company: "TourBD Limited" }
        ]
    },
    "Booking.com": {
        name: "Booking.com",
        company: "Booking Holdings",
        category: "other",
        isIsraeli: true,
        logo: "images/international/Booking.png",
        description: "হোটেল বুকিং সার্ভিস",
        alternatives: [
            { name: "Shohoz", logo: "images/bangladeshi/Shohoz.png", company: "Shohoz Limited" }
        ]
    },
    "Expedia": {
        name: "Expedia",
        company: "Expedia Group",
        category: "other",
        isIsraeli: true,
        logo: "images/international/Expedia.png",
        description: "ট্রাভেল বুকিং সার্ভিস",
        alternatives: [
            { name: "Desh Travels", logo: "images/bangladeshi/Desh Travels.png", company: "Desh Travels Limited" },
            { name: "Green Line", logo: "images/bangladeshi/Green Line.png", company: "Green Line paribahan" }
        ]
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('resultsSection');
const productNameEl = document.getElementById('productName');
const companyNameEl = document.getElementById('companyName');
const productDescriptionEl = document.getElementById('productDescription');
const productLogoEl = document.getElementById('productLogo');
const isIsraeliEl = document.getElementById('isIsraeli');
const israeliInfo = document.getElementById('israeliInfo');
const alternativesSection = document.getElementById('alternativesSection');
const alternativesList = document.getElementById('alternativesList');
const popularProductsGrid = document.getElementById('popularProductsGrid');
const themeToggle = document.querySelector('.theme-toggle');
const totalProductsEl = document.getElementById('totalProducts');
const bdAlternativesEl = document.getElementById('bdAlternatives');
const israeliBrandsEl = document.getElementById('israeliBrands');
const categoryCards = document.querySelectorAll('.category-card');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Initialize stats
function initStats() {
    const totalProducts = Object.keys(products).length;
    const israeliBrands = Object.values(products).filter(p => p.isIsraeli).length;
    const bdAlternatives = Object.values(products).reduce((acc, p) => {
        return acc + (p.alternatives ? p.alternatives.length : 0);
    }, 0);
    
    totalProductsEl.textContent = `${totalProducts}+`;
    israeliBrandsEl.textContent = `${israeliBrands}+`;
    bdAlternativesEl.textContent = `${bdAlternatives}+`;
}

// Initialize popular products
function initPopularProducts() {
    const popularBrands = [
        'Coca-Cola', 'Pepsi', 'Nestle', 'Maggi', 'KFC', 
        'Oral-B', 'Dove', 'HP', 'Levi\'s', 'Pampers'
    ];
    
    popularProductsGrid.innerHTML = '';
    
    popularBrands.forEach(brand => {
        if (products[brand]) {
            const product = products[brand];
            const productCard = document.createElement('button');
            productCard.className = 'product-card popular-product';
            productCard.dataset.product = product.name;
            productCard.innerHTML = `
                <img src="${product.logo}" alt="${product.name}" onerror="this.src='images/default-product.png'">
                <span>${product.name}</span>
            `;
            popularProductsGrid.appendChild(productCard);
        }
    });
}

// Enhanced search function with fuzzy matching
function searchProduct() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) return;
    
    // Find the product (fuzzy matching)
    const foundProductKey = Object.keys(products).find(
        product => product.toLowerCase().includes(query)
    );
    
    if (foundProductKey) {
        const productData = products[foundProductKey];
        
        // Show results section with animation
        resultsSection.style.display = 'block';
        setTimeout(() => {
            resultsSection.classList.add('fade-in');
        }, 10);
        
        // Set product info
        productNameEl.textContent = productData.name;
        companyNameEl.textContent = productData.company;
        productDescriptionEl.textContent = productData.description;
        productLogoEl.src = productData.logo;
        productLogoEl.alt = `${productData.name} logo`;
        productLogoEl.onerror = function() {
            this.src = 'images/default-product.png';
        };
        
        // Set Israeli status
        if (productData.isIsraeli) {
            isIsraeliEl.textContent = 'ইসরাইলি সমর্থিত ✅';
            isIsraeliEl.className = 'israeli-supported';
            israeliInfo.style.display = 'flex';
            
            // Show alternatives if available
            if (productData.alternatives && productData.alternatives.length > 0) {
                alternativesSection.style.display = 'block';
                alternativesList.innerHTML = '';
                
                productData.alternatives.forEach((alt, index) => {
                    const altItem = document.createElement('div');
                    altItem.className = 'alternative-card';
                    altItem.innerHTML = `
                        <img src="${alt.logo}" alt="${alt.name} logo" class="alternative-logo" onerror="this.src='images/default-product.png'">
                        <div>
                            <p class="alternative-name">${alt.name}</p>
                            <p class="alternative-company">${alt.company}</p>
                        </div>
                    `;
                    
                    // Add delay for staggered animation
                    setTimeout(() => {
                        altItem.classList.add('fade-in');
                    }, index * 100);
                    
                    alternativesList.appendChild(altItem);
                });
            } else {
                alternativesSection.style.display = 'none';
            }
        } else {
            isIsraeliEl.textContent = 'ইসরাইলি সমর্থিত নয় ❌';
            isIsraeliEl.className = 'not-israeli';
            israeliInfo.style.display = 'none';
            alternativesSection.style.display = 'none';
        }
    } else {
        // Product not found
        resultsSection.style.display = 'block';
        setTimeout(() => {
            resultsSection.classList.add('fade-in');
        }, 10);
        productNameEl.textContent = query;
        companyNameEl.textContent = '';
        productDescriptionEl.textContent = '';
        productLogoEl.src = 'images/not found.jpg';
        productLogoEl.alt = 'Product not found';
        isIsraeliEl.textContent = 'পণ্যটি ডাটাবেসে নেই';
        isIsraeliEl.className = 'not-found';
        israeliInfo.style.display = 'none';
        alternativesSection.style.display = 'none';
    }
    
    // Scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Show products by category
function showProductsByCategory(category) {
    const categoryProducts = Object.values(products).filter(
        product => product.category === category
    );
    
    // Remove existing category products section if any
    const existingSection = document.querySelector('.category-products-section');
    if (existingSection) {
        existingSection.remove();
    }
    
    // Create a new section to display category products
    const categorySection = document.createElement('section');
    categorySection.className = 'category-products-section';
    categorySection.innerHTML = `
        <div class="container">
            <button class="back-to-categories">← পণ্য বিভাগসমূহে ফিরে যান</button>
            <h2>${getCategoryName(category)} পণ্য সমূহ</h2>
            <div class="category-products-grid" id="categoryProductsGrid"></div>
        </div>
    `;
    
    // Insert after categories section
    const categoriesSection = document.querySelector('.categories-section');
    categoriesSection.parentNode.insertBefore(categorySection, categoriesSection.nextSibling);
    
    // Add products to grid
    const grid = document.getElementById('categoryProductsGrid');
    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'category-product-card';
        productCard.innerHTML = `
            <img src="${product.logo}" alt="${product.name}" class="category-product-logo" onerror="this.src='images/default-product.png'">
            <h3>${product.name}</h3>
            <p class="company-name">${product.company}</p>
            <button class="view-details-btn" data-product="${product.name}">বিস্তারিত দেখুন</button>
        `;
        grid.appendChild(productCard);
    });
    
    // Activate the section
    setTimeout(() => {
        categorySection.classList.add('active');
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }, 10);
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            searchInput.value = btn.dataset.product;
            searchProduct();
        });
    });
    
    // Add event listener to back button
    categorySection.querySelector('.back-to-categories').addEventListener('click', () => {
        categorySection.classList.remove('active');
        setTimeout(() => {
            categorySection.remove();
            document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
}

// Get category name in Bangla
function getCategoryName(category) {
    const names = {
        'food': 'খাদ্য ও পানীয়',
        'personal-care': 'ব্যক্তিগত যত্ন',
        'electronics': 'ইলেকট্রনিক্স',
        'clothing': 'পোশাক',
        'baby-care': 'শিশু যত্ন',
        'other': 'অন্যান্য'
    };
    return names[category] || category;
}

// Theme toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Set initial theme
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Mobile menu toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Event listeners
searchBtn.addEventListener('click', searchProduct);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

themeToggle.addEventListener('click', toggleTheme);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Add event listeners to category cards
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        showProductsByCategory(card.dataset.category);
    });
});

// Add event listeners to popular products
document.addEventListener('click', (e) => {
    if (e.target.closest('.popular-product')) {
        const productCard = e.target.closest('.popular-product');
        searchInput.value = productCard.dataset.product;
        searchProduct();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
    initStats();
    initPopularProducts();
    
    // Add error handling for all images
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'images/default-product.png';
        };
    });
});