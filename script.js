import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
// Event Flip Cards JavaScript

// Event data
const eventData = [
    {
        id: '1',
        title: 'Roaring 20s Speakeasy',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&h=300&fit=crop',
        date: '08/13/21 - 08/14/25',
        time: '03:00 - 11:00',
        location: 'Drive Service Road East, New York',
        description: 'Step back in time to the roaring 20s at our Speakeasy party. Don your finest flapper dresses and fedoras and join us for an evening of prohibition-era fun. Sip on classic cocktails, enjoy live music, and let the good times roll.',
        category: 'Party'
    },
    {
        id: '2',
        title: 'Jazz Night at the Speakeasy',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        date: '02/10/21 - 02/11/25',
        time: '01:00 - 11:00',
        location: '33rd Street Queens, New York',
        description: 'Experience the smooth sounds of jazz in an intimate speakeasy setting. Join us for an evening of world-class jazz performances featuring local and touring musicians.',
        category: 'Music'
    },
    {
        id: '3',
        title: 'Music at the Cathedral',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        date: '02/10/21 - 02/11/25',
        time: '12:00 - 08:00',
        location: 'Boulevard Que, New York',
        description: 'A sacred musical experience in one of New York\'s most beautiful cathedrals. Enjoy classical performances that showcase the incredible acoustics.',
        category: 'Classical'
    },
    {
        id: '4',
        title: 'Jazz Soiree',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        date: '02/10/21 - 02/11/25',
        time: '02:00 - 08:00',
        location: 'Avenue Queens, New York',
        description: 'An elegant evening of jazz featuring both emerging and established artists. Come dressed to impress for this sophisticated musical gathering.',
        category: 'Jazz'
    },
    {
        id: '5',
        title: 'Tropical Oasis Party',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
        date: '06/14/21 - 06/15/25',
        time: '02:00 - 08:00',
        location: 'Avenue Queens, New York',
        description: 'Escape to paradise at our tropical-themed pool party. Enjoy refreshing cocktails, tropical beats, and summer vibes.',
        category: 'Pool Party'
    },
    {
        id: '6',
        title: 'Jazz Under the Stars',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
        date: '05/14/21 - 06/15/25',
        time: '02:00 - 08:00',
        location: '275 Liberty Ave Brooklyn, New York',
        description: 'An outdoor jazz experience under the night sky. Bring a blanket and enjoy world-class jazz performances in Brooklyn.',
        category: 'Outdoor'
    }
];

// SVG Icons as strings
const icons = {
    calendar: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
    clock: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    location: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
};

// Generate individual card HTML
function createCardHTML(event) {
    return `
        <div class="flip-card">
            <div class="flip-card-inner">
                <!-- Front Side -->
                <div class="flip-card-front">
                    <img src="${event.image}" alt="${event.title}" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">${event.title}</h3>
                        <div class="card-details">
                            <div class="detail-item">
                                ${icons.calendar}
                                <span>${event.date}</span>
                            </div>
                            <div class="detail-item">
                                ${icons.clock}
                                <span>${event.time}</span>
                            </div>
                            <div class="detail-item">
                                ${icons.location}
                                <span>${event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Back Side -->
                <div class="flip-card-back">
                    <div class="back-content">
                        <div>
                            <div class="category-badge">${event.category}</div>
                            <h3 class="back-title">${event.title}</h3>
                            <p class="back-description">${event.description}</p>
                        </div>
                        
                        <div>
                            <div class="back-details">
                                <div class="back-detail-item">
                                    ${icons.calendar}
                                    <span>${event.date}</span>
                                </div>
                                <div class="back-detail-item">
                                    ${icons.clock}
                                    <span>${event.time}</span>
                                </div>
                                <div class="back-detail-item">
                                    ${icons.location}
                                    <span>${event.location}</span>
                                </div>
                            </div>
                            <button class="ticket-btn" onclick="handleTicketClick('${event.id}')">Get Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate all cards
function generateCards() {
    const container = document.getElementById('cardsContainer');
    
    if (!container) {
        console.error('Cards container not found!');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Add each event card
    eventData.forEach(event => {
        container.innerHTML += createCardHTML(event);
    });
}

// Handle ticket button click
function handleTicketClick(eventId) {
    const event = eventData.find(e => e.id === eventId);
    
    if (event) {
        // You can replace this alert with your own booking system
        alert(`Tickets for "${event.title}" - This would normally open a booking system!`);
        
        // Example: Redirect to a booking page
        // window.open(`https://your-booking-site.com/event/${eventId}`, '_blank');
        
        // Example: Show a modal
        // showBookingModal(event);
    }
}

// Add event to calendar (bonus feature)
function addToCalendar(eventId) {
    const event = eventData.find(e => e.id === eventId);
    if (!event) return;
    
    // Create calendar link (Google Calendar example)
    const startDate = event.date.split(' - ')[0].replace(/\//g, '');
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${startDate}&details=${details}&location=${location}`;
    
    window.open(calendarUrl, '_blank');
}

// Filter events by category (bonus feature)
function filterEvents(category) {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredEvents = category === 'all' 
        ? eventData 
        : eventData.filter(event => event.category.toLowerCase() === category.toLowerCase());
    
    filteredEvents.forEach(event => {
        container.innerHTML += createCardHTML(event);
    });
}

// Initialize the page
function initializeEventCards() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateCards);
    } else {
        generateCards();
    }
}

// Auto-initialize when script loads
initializeEventCards();

// Export functions for use in other scripts (optional)
window.EventCards = {
    generateCards,
    handleTicketClick,
    addToCalendar,
    filterEvents,
    eventData
};