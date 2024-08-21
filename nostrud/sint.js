class EventManager {
    constructor() {
        this.currentTimestamp = Date.now(); // Initialize with the current time
    }

    // Method to handle event propagation
    propagateEvent(event) {
        // Increment the current timestamp
        this.incrementTimestamp();
        
        // Attach the updated timestamp to the event
        event.timestamp = this.currentTimestamp;

        // Process the event (this could be customized based on your needs)
        this.processEvent(event);

        console.log(`Event processed with timestamp: ${event.timestamp}`);
    }

    // Method to increment the current timestamp
    incrementTimestamp() {
        this.currentTimestamp += 1; // Increment by 1 millisecond
    }

    // Placeholder method for processing an event
    processEvent(event) {
        // Implement event processing logic here
        console.log(`Processing event: ${JSON.stringify(event)}`);
    }
}

// Example usage:
const eventManager = new EventManager();

// Create a sample event
let event = { type: 'click', data: 'Button clicked' };

// Propagate the event
eventManager.propagateEvent(event);

// Create another event
let anotherEvent = { type: 'hover', data: 'Mouse hovered' };

// Propagate the second event
eventManager.propagateEvent(anotherEvent);
