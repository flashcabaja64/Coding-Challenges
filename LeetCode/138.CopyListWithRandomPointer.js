/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let copy = new Node(NaN, null, null);
  let newCopy = copy;
  let current = head;
  let map = new Map();

  //iterate through node list until there's no head
  while(current) {
    //create cloned node with value
    let newNode = new Node(current.val, null, null)
    newCopy = newNode;
    //copies value of current node and newNode in a [key,value] map pair
    map.set(current, newNode)

    //iterates through the copy and original nodes next pointer
    newCopy = newCopy.next;
    current = current.next;
  }

  newCopy = copy.next;
  current = head;

  while(current) {
    if(current.random) {
      newCopy.random = map.get(current.random)
    }
    newCopy = newCopy.next;
    current = current.next;
  }
  return copy.next;
};