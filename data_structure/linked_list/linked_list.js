var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
    }
    return node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.append = function (data) {
        if (this.head === null) {
            this.head = new node(data);
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new node(data);
    };
    LinkedList.prototype.prepend = function (data) {
        var newHead = new node(data);
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype.deleteWithValue = function (data) {
        if (this.head === null) {
            return;
        }
        var current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.search = function (data) {
        return false;
    };
    LinkedList.prototype.size = function () {
        return 0;
    };
    return LinkedList;
}());
