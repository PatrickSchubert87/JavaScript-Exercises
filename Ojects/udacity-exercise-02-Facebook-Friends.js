/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

var facebookProfile = {
    name: 'Patrick',
    friends: 300,
    messages: ['Message One', ' Message Two', 'Message Three'],
    
    postMessage: function postMessage(message) {
        message = 'new Message';
        this.messages.push(message);
    },

    deleteFirstMessage: function deleteMessage() {
        n = 1;
        this.messages.shift();
    },

    deleteLastMessage: function deleteMessage() {
        n = 1;
        this.messages.pop();
    },
    
    deleteMessageGivenOnIndex: function deleteMessage(index, n) {
        n = 1;
        index = this.messages.splice(index, n);
    },

    addFriend: function addFriend() {
        this.friends++;
    },

    removeFriend: function removeFriend() {
        this.friends--;
    }
}

console.log(facebookProfile.messages);
facebookProfile.postMessage();
console.log(facebookProfile.messages);
facebookProfile.deleteFirstMessage();
console.log(facebookProfile.messages);
facebookProfile.deleteLastMessage();
console.log(facebookProfile.messages);
facebookProfile.deleteMessageGivenOnIndex();
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);