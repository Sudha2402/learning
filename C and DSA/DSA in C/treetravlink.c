/*
#include <stdio.h>

int max_node = 15;
char tree[] = {'\0', 'D', 'A', 'F', 'E', 'B', 'R', 'T', 'G', 'Q', '\0', '\0', 'V', '\0', 'J', 'L'};

int get_right_child(int index){
  if (tree[index] != '\0' && ((2 * index) + 1) <= max_node)
    return (2 * index) + 1;
  return -1;
}

int get_left_child(int index){
  if (tree[index] != '\0' && (2 * index) <= max_node)
    return 2 * index;
  return -1;
}

void preorder(int index){
  if (index > 0 && tree[index] != '\0'){
    printf(" %c ", tree[index]);
    preorder(get_left_child(index));
    preorder(get_right_child(index));
  }
}

void postorder(int index){
  if (index > 0 && tree[index] != '\0'){
    postorder(get_left_child(index));
    postorder(get_right_child(index));
    printf(" %c ", tree[index]);
  }
}

void inorder(int index){
  if (index > 0 && tree[index] != '\0'){
    inorder(get_left_child(index));
    printf(" %c ", tree[index]);
    inorder(get_right_child(index));
  }
}

int main() {
  printf("Preorder:\n");
  preorder(1);
  printf("\nPostorder:\n");
  postorder(1);
  printf("\nInorder:\n");
  inorder(1);
  printf("\n");
  return 0;
}
 */

// Tree traversal in C

#include <stdio.h>
#include <stdlib.h>

struct node
{
  int item;
  struct node *left;
  struct node *right;
};

// Inorder traversal
void inorderTraversal(struct node *root)
{
  if (root == NULL)
    return;
  inorderTraversal(root->left);
  printf("%d ->", root->item);
  inorderTraversal(root->right);
}

// preorderTraversal traversal
void preorderTraversal(struct node *root)
{
  if (root == NULL)
  {
    return;
  }
  printf("%d ->", root->item);
  preorderTraversal(root->left);
  preorderTraversal(root->right);
}

// postorderTraversal traversal
void postorderTraversal(struct node *root)
{
  if (root == NULL)
    return;
  postorderTraversal(root->left);
  postorderTraversal(root->right);
  printf("%d ->", root->item);
}

// Create a new Node
struct node *createNode(int value)
{
  struct node *newNode = malloc(sizeof(struct node));
  newNode->item = value;
  newNode->left = NULL;
  newNode->right = NULL;

  return newNode;
}

// Insert on the left of the node
struct node *insertLeft(struct node *root, int value)
{
  root->left = createNode(value);
  return root->left;
}

// Insert on the right of the node
struct node *insertRight(struct node *root, int value)
{
  root->right = createNode(value);
  return root->right;
}

int main()
{
  struct node *root = createNode(1);
  insertLeft(root, 12);
  insertRight(root, 9);

  insertLeft(root->left, 5);
  insertRight(root->left, 6);

  /*           1
              / \
            12   9
            / \
           5   6
  */

  printf("Inorder traversal \n");
  inorderTraversal(root);

  printf("\nPreorder traversal \n");
  preorderTraversal(root);

  printf("\nPostorder traversal \n");
  postorderTraversal(root);
}










/*
Understanding Pointers in C with Binary Trees
Let me explain pointers in the context of these binary tree functions, using diagrams to help visualize.

Pointer Basics
A pointer is a variable that stores the memory address of another variable. Instead of holding the actual data, it holds the location where the data is stored.

Why Use Pointers in Binary Trees?
In tree structures, we need to:

Dynamically allocate memory for new nodes

Link nodes together without copying entire structures

Traverse the tree efficiently

The createNode Function
c
struct node *createNode(int value) {
  struct node *newNode = malloc(sizeof(struct node));
  newNode->item = value;
  newNode->left = NULL;
  newNode->right = NULL;
  return newNode;
}
Visualization:
text
+-------------------+       +---------------------+
| createNode(5)     |       | Heap Memory         |
|                   |       |                     |
| newNode: 0x1234   |-----> | 0x1234: node        |
| return 0x1234     |       |   item: 5           |
+-------------------+       |   left: NULL        |
                            |   right: NULL       |
                            +---------------------+
malloc allocates memory for a new node on the heap and returns its address (e.g., 0x1234)

We store this address in the pointer variable newNode

We set the node's values using the -> operator (which dereferences the pointer)

We return the address (0x1234) so the caller knows where the new node is

The inorderTraversal Function
c
void inorderTraversal(struct node *root) {
  if (root == NULL)
    return;
  inorderTraversal(root->left);
  printf("%d ->", root->item);
  inorderTraversal(root->right);
}
Visualization:
Imagine this tree:

text
       10
      /  \
     5    15
    / \     \
   3   7    20
Memory addresses (hypothetical):

10 at 0x1000

5 at 0x1100

15 at 0x1200

3 at 0x1300

7 at 0x1400

20 at 0x1500

First Call:
text
inorderTraversal(0x1000)  // root points to node 10
  - root->left is 0x1100 (node 5)
  - calls inorderTraversal(0x1100)
Second Call (recursive):
text
inorderTraversal(0x1100)  // root points to node 5
  - root->left is 0x1300 (node 3)
  - calls inorderTraversal(0x1300)
Third Call (recursive):
text
inorderTraversal(0x1300)  // root points to node 3
  - root->left is NULL
  - returns
  - prints 3
  - root->right is NULL
  - returns
Then it unwinds back up the call stack, printing as it goes.

Why Pass Root as a Pointer?
Efficiency: Passing a pointer (typically 4-8 bytes) is much cheaper than copying the entire node structure

Modification: If we needed to modify the tree (like inserting nodes), we need the actual memory locations

Memory Management: We can allocate nodes dynamically on the heap and just pass their addresses around

Key Pointer Concepts Illustrated:
Pointer as an address: root contains a memory address where a node is stored

Dereferencing: root->left means "go to the memory location in root and access its left field"

Recursion with pointers: Each recursive call gets a new pointer (to a subtree) but they all point to the same underlying tree structure

Pointer Visualization in Memory
Here's how the tree nodes might look in memory:

text
Address | Data
--------|------------------
0x1000  | item: 10
        | left: 0x1100
        | right: 0x1200
--------|------------------
0x1100  | item: 5
        | left: 0x1300
        | right: 0x1400
--------|------------------
0x1200  | item: 15
        | left: NULL
        | right: 0x1500
--------|------------------
0x1300  | item: 3
        | left: NULL
        | right: NULL
--------|------------------
0x1400  | item: 7
        | left: NULL
        | right: NULL
--------|------------------
0x1500  | item: 20
        | left: NULL
        | right: NULL
Each struct node* variable (like root) holds one of these addresses, allowing us to navigate the tree.

















Significance of Pointers in struct node *root = createNode(1)
Let me explain this line thoroughly with diagrams to show why pointers are essential here.

The Code in Question
c
struct node *root = createNode(1);
What's Happening Here?
createNode(1) executes first:

Allocates memory for a new node on the heap

Initializes it with value 1 and NULL children

Returns the memory address of this new node

The pointer variable root:

Is declared as struct node* (pointer to a node structure)

Receives and stores the memory address returned by createNode

Why a Pointer is Necessary: Key Reasons
1. Dynamic Memory Allocation
c
// Without pointer (WRONG approach):
struct node root = createNode(1); 
// This would try to store a STRUCTURE in root, 
// but createNode returns an ADDRESS (pointer)
c
// With pointer (CORRECT):
struct node *root = createNode(1);
// Stores the memory address where the node actually lives
2. Memory Efficiency
The actual node exists in heap memory

root just stores a small address (typically 4-8 bytes) rather than copying the whole structure

This is crucial for large data structures

3. Tree Construction
Later when we build the tree, we need to connect nodes by their addresses:

c
root->left = createNode(2);  // Need pointer to modify connections
root->right = createNode(3); // Need pointer to modify connections
Memory Visualization
After createNode(1) executes:
text
Heap Memory:
+---------------------+
| Address: 0x1000     |
| item: 1             |
| left: NULL          |
| right: NULL         |
+---------------------+
After assignment to root:
text
Stack Memory (local variables):
+---------------------+
| Variable: root      |
| Type: struct node*  |
| Value: 0x1000       |  // Points to the node in heap
+---------------------+
Pointer Significance Illustrated
text
+------------+       +---------------------+
| root       | ----> | Node at 0x1000      |
| (0x1000)   |       | item: 1             |
+------------+       | left: NULL          |
                     | right: NULL         |
                     +---------------------+
Why not just store the node directly?
Size: The pointer is small (just an address) while the node structure could be large

Flexibility: We can easily reassign pointers to different nodes

Dynamic Structures: Trees need dynamic memory allocation (heap) rather than stack allocation

Practical Implications
Building a tree:

c
struct node *root = createNode(1);
root->left = createNode(2);
root->right = createNode(3);
Memory now looks like:

text
root (0x1000) -> [1, 0x2000, 0x3000]
                  /           \
     0x2000->[2,NULL,NULL]  0x3000->[3,NULL,NULL]
Passing to functions:

c
inorderTraversal(root); // Pass just the address (efficient)
Memory Management:

You can free the entire tree when done by starting from the root pointer

Without pointers, you'd have no way to manage dynamically allocated memory

Key Takeaways
Pointer Variable (root):

Stores a memory address (like 0x1000) not the actual data

Acts as a "handle" to access the dynamically allocated node

Arrow Operator (->):

Used to access structure members through a pointer

Equivalent to (*root).item but more readable

Tree Construction:

All nodes live in heap memory

Pointers connect them by storing addresses of child nodes

Without pointers, you couldn't:

Dynamically grow your tree

Efficiently pass trees between functions

Build recursive data structures where nodes reference other nodes


*/