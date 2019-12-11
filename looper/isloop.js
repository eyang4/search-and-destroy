'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // if (linkedlist.tail.next) return true;
  // const tracking = {};
  // let currentNode = linkedlist.head;
  // while(currentNode) {
  //   if (tracking[currentNode.value]) return true; // looping
  //   tracking[currentNode.value] = 'blah';
  //   currentNode = currentNode.next;
  // }
  // return false;
  if (!linkedlist.head.next) return false // single node, non circular
  let slow = linkedlist.head
  let fast = linkedlist.head
  slow = slow.next
  fast = fast.next.next
  while(slow !== fast) {
    slow = slow.next
    if (!slow) return false // the following node is null, non circular
    if (!fast.next) return false // make sure it is not null itself
    fast = fast.next.next
    if (!fast) return false // the following, following node is null, non circular
  }
  return true;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
