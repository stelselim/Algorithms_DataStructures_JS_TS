class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val !== undefined ? val : null;
    this.next = next !== undefined ? next : null;
  }
}

function createLinkedListFromArray(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function printList(head) {
  while (head) {
    console.log(head.val + '->');
    head = head.next;
  }
}
function prepend(head, val) {
  let newHead = new ListNode(val);
  newHead.next = head;
  return newHead;
}

function removeFromList(head, val) {
  if (!head) return null;
  if (head.val === val) {
    head = head.next;
    return head;
  }
  let current = head;
  // Comes with one next
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
  return head;
}

function count(head) {
  let current = head;
  let size = 0;
  while (current !== null) {
    size++;
    current = current.next;
  }
  console.log(size);
}
var mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode(0);
  let head = dummyHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummyHead.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      dummyHead.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    dummyHead = dummyHead.next;
  }
  if (!list1) {
    dummyHead.next = list2;
  }
  if (!list2) {
    dummyHead.next = list1;
  }
  return head.next;
};
function reverseHead(head) {
  let current = head;
  let previous = null;

  while (true) {
    let temp = current.next; // store next element for next current
    current.next = previous; // Points to previous element

    if (!temp) {
      break;
    }
    previous = current; // store current as previous to point for next node.
    current = temp;
  }

  return current;
}
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  if (!head.next) {
    return false;
  }
  let fast = head.next;
  let slow = head;

  while (fast && fast.next && slow.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

function main() {
  let arr = [2, 14, 56, 12, 5];
  let head = createLinkedListFromArray(arr);
  head = removeFromList(head, 2);
  head = removeFromList(head, 12);
  head = removeFromList(head, 5);
  head = prepend(head, 5);
  printList(head);
  count(head);
  head = reverseHead(head);
  printList(head);
}

main();
