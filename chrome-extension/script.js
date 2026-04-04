// ============================================================
// CONFIGURATION - Customize everything here!
// ============================================================

// Your partner's name
const PARTNER_NAME = "Meryl";

// Add your photos to the "images" folder and list them here.
// The extension will cycle through one per day.
const PHOTOS = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg"
];

// Daily compliments - one shown per day, cycles through the list
const COMPLIMENTS = [
  "I love how passionate you are about the things you care about.",
  "Your smile is my favorite thing in the whole world.",
  "Every day with you feels like an adventure.",
  "You make even the ordinary moments feel extraordinary.",
  "I'm so proud of the person you are and everything you do.",
  "You have the most beautiful heart of anyone I've ever known.",
  "Just thinking about you makes my whole day better.",
  "You inspire me to be a better person every single day.",
  "The way you laugh makes everything feel right.",
  "I fall for you a little more every day.",
  "You are my favorite notification.",
  "Being with you is my favorite place to be.",
  "You make the world a more beautiful place just by being in it.",
  "I love the way your eyes light up when you talk about what you love."
];

// Daily coupons - one shown per day, alternates with compliment-only days
const COUPONS = [
  "One free batch of cookies from Browned",
  "One shawarma date - your pick of place!",
  "One full body massage, no time limit",
  "Breakfast in bed, any day you choose",
  "Movie night - you pick everything",
  "One home-cooked dinner, your favorite meal",
  "A surprise dessert delivered to you",
  "One day where I do all your errands",
  "Bubble bath prepared just for you",
  "Star-gazing night with hot chocolate",
  "One guilt-free lazy Sunday together",
  "A handwritten love letter",
  "One piggyback ride, redeemable anywhere",
  "A playlist made just for your current mood"
];

// ============================================================
// LOGIC - No need to edit below unless you want to tweak behavior
// ============================================================

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', options);
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${dateStr} \u2022 ${timeStr}`;
}

function init() {
  const dayOfYear = getDayOfYear();

  // Set date
  document.getElementById("date").textContent = formatDate();

  // Set photo (cycles daily)
  const photoIndex = dayOfYear % PHOTOS.length;
  const photoEl = document.getElementById("daily-photo");
  photoEl.src = PHOTOS[photoIndex];
  photoEl.onerror = function () {
    // If the image doesn't load, show a placeholder with a heart
    this.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0e6d8;font-size:4rem;">&#10084;</div>';
  };

  // Set greeting
  const greeting = getTimeGreeting();
  document.getElementById("greeting").textContent = `${greeting}, ${PARTNER_NAME} \u2764`;

  // Set compliment
  const complimentIndex = dayOfYear % COMPLIMENTS.length;
  document.getElementById("compliment").textContent = COMPLIMENTS[complimentIndex];

  // Show coupon every other day
  const couponSection = document.getElementById("coupon-section");
  if (dayOfYear % 2 === 0) {
    const couponIndex = Math.floor(dayOfYear / 2) % COUPONS.length;
    document.getElementById("coupon-text").textContent = COUPONS[couponIndex];
    couponSection.style.display = "block";
  } else {
    couponSection.style.display = "none";
  }
}

init();
