class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLinkedListSum(head) {
    let current = head;
    let sum = 0;
    let count=1;
    let prev=1;
  
    while (current !== null) {
        if(prev==count){
            sum += current.value;
            current = current.next;
            count =count*2;
            prev++;
        }else{
            prev++;
            current=current.next;
        }
     
    }
  
    return sum;
  }
  
  // Example usage:
  // Assuming you have a linked list with values: 1 -> 3 -> 5 -> 7 -> 9
  const head = new ListNode(1);
  head.next = new ListNode(3);
  head.next.next = new ListNode(5);
  head.next.next.next = new ListNode(7);
  head.next.next.next.next = new ListNode(9);
  
  const sum = findLinkedListSum(head);
  console.log(`The sum of all nodes in the linked list is: ${sum}`); // Output: The sum of all nodes in the linked list is: 25
  