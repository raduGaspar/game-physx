let pubSubInstance;
const subjects = {};
const hOP = subjects.hasOwnProperty;

class PubSub {
  constructor() {
    if(!pubSubInstance) {
      console.log('EventDispatcher instance created');
      pubSubInstance = this;
    }

    return pubSubInstance;
  }

  on(topic, callback) {
    if(!hOP.call(subjects, topic)) {
      subjects[topic] = [];
    }

    let index = subjects[topic].push(callback) - 1;

    return {
      remove: () => {
        delete subjects[topic][index];
      }
    }
  }
  trigger(topic, data) {
    if(!hOP.call(subjects, topic)) return;

    subjects[topic].forEach((entry) => {
      if(entry) {
        entry(data !== undefined ? data : {});
      }
    });
  }
};

export default class EventDispatcher {
  constructor() {
    pubSubInstance = new PubSub();
  }
  on() {
    pubSubInstance.on.call(pubSubInstance, ...arguments);
  }
  trigger() {
    pubSubInstance.trigger.call(pubSubInstance, ...arguments);
  }
}
