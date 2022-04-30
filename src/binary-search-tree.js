const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(value) {
    this.roots = addWithin(this.roots, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.roots, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  find(value) {
    return searchWithin(this.roots, value);

    function searchWithin(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node.data;
      }

      return value < node.data
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.roots = removeNode(this.roots, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

tree.root().data;
console.log(tree.root().data);
// => 1;

tree.min();
// => 1
console.log(tree.min());

tree.max();
//  => 5
console.log(tree.max());

tree.remove(5);

tree.has(5);
console.log(tree.has(5));
// => false

tree.max();
console.log(tree.max());
//  => 4

module.exports = {
  BinarySearchTree,
};
