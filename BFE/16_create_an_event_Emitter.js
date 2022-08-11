// please complete the implementation
class EventEmitter {
  constructor() {
    this.tracker = new Map();
  }
  subscribe(eventName, callback) {
    if (!this.tracker.has(eventName)) {
      this.tracker.set(eventName, new Set());
    }
    const currentEvent = this.tracker.get(eventName);
    const currObj = { callback };
    currentEvent.add(currObj);

    return {
      release: () => {
        currentEvent.delete(currObj);
        if (currentEvent.size === 0) {
          this.tracker.delete(eventName);
        }
      },
    };
  }

  emit(eventName, ...args) {
    const currentEvent = this.tracker.get(eventName);
    if (currentEvent) {
      currentEvent.forEach((cb) => cb.callback.apply(this, args));
    }
  }
}
