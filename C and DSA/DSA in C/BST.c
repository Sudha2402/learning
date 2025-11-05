#include <stdio.h>
#include <malloc.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *createNode(int data)
{
    struct node *n;                                 // creating a node pointer
    n = (struct node *)malloc(sizeof(struct node)); // Allocating memory in the heap
    n->data = data;                                 // Setting the data
    n->left = NULL;                                 // Setting the left and right children to NULL
    n->right = NULL;                                // Setting the left and right children to NULL
    return n;                                       // Finally returning the created node
}

void preOrder(struct node *root)
{
    if (root != NULL)
    {
        printf("%d ", root->data);
        preOrder(root->left);
        preOrder(root->right);
    }
}

void postOrder(struct node *root)
{
    if (root != NULL)
    {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d ", root->data);
    }
}

void inOrder(struct node *root)
{
    if (root != NULL)
    {
        inOrder(root->left);
        printf("%d ", root->data);
        inOrder(root->right);
    }
}

int isBST(struct node *root)
{
    static struct node *prev = NULL;//Remembers the previously visited node during traversal

    if (root != NULL)
    {
        if (!isBST(root->left))
        {
            return 0;
        }
        if (prev != NULL && root->data <= prev->data)
        {
            return 0;
        }
        prev = root;
        return isBST(root->right);
    }
    else
    {
        return 1;//base case
    }
}



// inorder traversal will give sorted array in BST //visualization of working of isBST is given below





















struct node *searchIter(struct node *root, int key)
{
    while (root != NULL)
    {
        if (key == root->data)
        {
            return root;
            printf("\n%d is found using searchIter", key);
        }
        else if (key < root->data)
        {
            root = root->left;
        }
        else
        {
            root = root->right;
        }
    }
    return NULL;
}

void insert(struct node *root, int key)
{
    struct node *prev = NULL;
    while (root != NULL)
    {
        prev = root;
        if (key == root->data)
        {
            printf("Cannot insert %d, already in BST", key);
            return;
        }
        else if (key < root->data)
        {
            root = root->left;
        }
        else
        {
            root = root->right;
        }
    }
    struct node *new = createNode(key);
    if (key < prev->data)
    {
        prev->left = new;
    }
    else
    {
        prev->right = new;
    }
    printf("\n%d is inserted in BST", key);
}

// delete node replace the the deleted element by leaf node of it's left node right element i.e root->left and leaf node of (root->left->right). hence we are finding inorderpredecessor

struct node *inOrderPredecessor(struct node *root)
{
    // printf("%d\n", root->data);

    /*not needed as it is already implemented in deletenode function and no use + it halts and sanseless

    if (root->left == NULL)
    {
        struct node *temp = root->right;
        free(root);
        return temp;//this temp will take the deleted root position
    }
    else if (root->right == NULL)
    {
        struct node *root = root->left;
        free(root);
        return root;
    }
    */

    // incase when root->right != NULL  &&  root->left != NULL

    root = root->left;
    while (root->right != NULL) // finding the leaf node of  (root->left->right)
    {
        // printf("%d\n", root->data);
        root = root->right;
    }
    return root;
}

struct node *deleteNode(struct node *root, int value)
{

    struct node *iPre;
    if (root == NULL)
    {
        return NULL;
    }
    if (root->left == NULL && root->right == NULL) // here this root will keep updating in iteration
    {
        printf("\n%d is deleted", root);
        free(root);
        return NULL;
    }

    else if (root->left == NULL)
    {
        struct node *temp = root->right;
        printf("%d is deleted\n", root->data);
        free(root);
        return temp; // new node at place of deleted node
    }

    /*no use + it halts and sanseless
    else//if root->left != NULL or root->right == NULL or
    {
        struct node *temp = root->left;
        free(root);
        return temp;
    }
*/

    // searching for the node to be deleted
    if (value < root->data)
    {
        root->left = deleteNode(root->left, value);
    }
    else if (value > root->data)
    {
        root->right = deleteNode(root->right, value);
    }
    // deletion strategy when the node is found
    else
    {
        iPre = inOrderPredecessor(root);
        root->data = iPre->data;
        root->left = deleteNode(root->left, iPre->data); // deleting the node from leaf which has been placed at deleted node
    }
    return root;
}

// search fucntion
struct node *search(struct node *root, int key)
{
    if (root == NULL)
    {
        return NULL;
    }
    else if (key == root->data)
    {
        printf("\n%d is found", key);
        // return root->data;
        return root;
    }
    else if (key < root->data)
    {
        return search(root->left, key);
    }
    else
    {
        return search(root->right, key);
    }
}

int main()
{

    // Constructing the root node - Using Function (Recommended)
    struct node *p = createNode(5);
    struct node *p1 = createNode(3);
    struct node *p2 = createNode(6);
    struct node *p3 = createNode(1);
    struct node *p4 = createNode(4);
    struct node *p5 = createNode(14);
    struct node *p6 = createNode(13);
    // Finally The tree looks like this:
    //      5
    //     / \
    //    3   6
    //   / \   \
    //  1   4   14
    //           /
    //          13
    // Linking the root node with left and right children
    p->left = p1;
    p->right = p2;
    p1->left = p3;
    p1->right = p4;
    p2->right = p5;
    p5->left = p6;
    printf("inorder :");
    inOrder(p);
    printf("\n");
    printf("preorder :");
    preOrder(p);
    printf("\n");
    printf("postorder :");
    postOrder(p);
    printf("\n\n");
    if (isBST(p))
    {
        printf("tree is BST\n");
    }
    else
    {
        printf("tree is not BST\n");
    }

    printf("\n");

    int key = 14;
    printf("Search for %d in the tree using searchIter \n", key);
    if (searchIter(p, key))
    {
        printf("%d is found in the tree\n", key);
    }
    else
    {
        printf("%d is not found in the tree\n", key);
    }

    printf("\n");

    printf("inorder :");
    inOrder(p);
    printf("\n");
    deleteNode(p, 6); // node 6 will be deleted
    inOrder(p);

    printf("\n");
    insert(p, 2);
    printf("\n");
    printf("inorder :");
    inOrder(p);

    printf("\n");
    printf("\nThe %d is %d using search", 13, search(p, 13)->data);

    return 0;
}

/*
inorder :1 3 4 5 6 13 14
preorder :5 3 1 4 6 14 13
postorder :1 4 3 13 14 6 5

tree is BST

Search for 14 in the tree using searchIter
14 is found in the tree

inorder :1 3 4 5 6 13 14
6 is deleted
1 3 4 5 13 14

2 is inserted in BST
inorder :1 2 3 4 5 13 14

13 is found
The 13 is 13 using search
PS C:\Sudhadocuments\DSA\DSA>
*/




/*
Visualizing the isBST Function Execution
Let's break down how this function checks if a binary tree is a Binary Search Tree (BST) using in-order traversal.

BST Property
A binary tree is a BST if for every node:

All nodes in its left subtree have values less than the node's value

All nodes in its right subtree have values greater than the node's value

Key Components of the Function
Static variable prev: Remembers the previously visited node during traversal

Recursive in-order traversal: Visits nodes in left-root-right order

Value comparison: Checks if current node's value > previous node's value

Execution Flow with Example Tree
Consider this tree (numbers represent node values):

text
      4
     / \
    2   5
   / \
  1   3
Step-by-Step Execution:
Initial Call: isBST(root=4)

prev = NULL (static variable initialized)

root (4) is not NULL

Recursively call isBST(root->left) which is isBST(2)

Call isBST(2)

prev still NULL (static persists across calls)

Recursively call isBST(root->left) which is isBST(1)

Call isBST(1)

prev still NULL

Recursively call isBST(root->left) which is isBST(NULL)

Call isBST(NULL)

Returns 1 (base case)

Back in isBST(1)

First if condition complete (left subtree returned 1)

Check second condition: prev (NULL) && 1 <= NULL->data → false

Update prev = 1

Recursively call isBST(root->right) which is isBST(NULL) → returns 1

Returns 1

Back in isBST(2)

Left subtree (1) returned 1

Check: prev (1) && 2 <= 1 → false

Update prev = 2

Recursively call isBST(root->right) which is isBST(3)

Call isBST(3)

Recursively call isBST(root->left) which is isBST(NULL) → returns 1

Check: prev (2) && 3 <= 2 → false

Update prev = 3

Recursively call isBST(root->right) which is isBST(NULL) → returns 1

Returns 1

Back in isBST(2)

Right subtree (3) returned 1

Returns 1

Back in isBST(4)

Left subtree (2) returned 1

Check: prev (3) && 4 <= 3 → false

Update prev = 4

Recursively call isBST(root->right) which is isBST(5)

Call isBST(5)

Recursively call isBST(root->left) which is isBST(NULL) → returns 1

Check: prev (4) && 5 <= 4 → false

Update prev = 5

Recursively call isBST(root->right) which is isBST(NULL) → returns 1

Returns 1

Back in isBST(4)

Right subtree (5) returned 1

Returns 1 (tree is BST)

Data Flow Visualization
text
Call Stack         | prev | Current Node | Action
-------------------+------+--------------+-------------------
isBST(4)           | NULL | 4            | Check left (2)
isBST(2)           | NULL | 2            | Check left (1)
isBST(1)           | NULL | 1            | Check left (NULL)
isBST(NULL)        | NULL | NULL         | Return 1
isBST(1)           | NULL | 1            | prev=NULL, update prev=1, check right
isBST(NULL)        | 1    | NULL         | Return 1
isBST(2)           | 1    | 2            | prev=1, 2>1, update prev=2, check right
isBST(3)           | 2    | 3            | Check left (NULL)
isBST(NULL)        | 2    | NULL         | Return 1
isBST(3)           | 2    | 3            | prev=2, 3>2, update prev=3, check right
isBST(NULL)        | 3    | NULL         | Return 1
isBST(2)           | 3    | 2            | Right subtree returned 1, return 1
isBST(4)           | 3    | 4            | prev=3, 4>3, update prev=4, check right
isBST(5)           | 4    | 5            | Check left (NULL)
isBST(NULL)        | 4    | NULL         | Return 1
isBST(5)           | 4    | 5            | prev=4, 5>4, update prev=5, check right
isBST(NULL)        | 5    | NULL         | Return 1
isBST(4)           | 5    | 4            | Right subtree returned 1, return 1
Why the Static Variable Works
The static variable prev:

Retains its value between function calls

Acts like a global variable but only accessible within this function

Tracks the previously visited node in the in-order traversal

Edge Case Example (Not a BST)
Consider this invalid BST:

text
      3
     / \
    2   5
   / \
  1   4
The check would fail when:

After processing node 1, prev = 1

Processing node 2: OK (2 > 1)

Processing node 4: OK (4 > 2)

Then at node 3: prev = 4 and check 3 <= 4 → returns 0 (not a BST)

This catches that 4 appears in the left subtree of 3 but is greater than 3, violating BST rules.
*/



/*
Difference Between malloc Casting in C
The two forms of memory allocation you asked about are:

Without casting:

c
struct node *newNode = malloc(sizeof(struct node));
With casting:

c
struct node *newNode = (struct node *)malloc(sizeof(struct node));
Key Differences
1. Return Type Handling
malloc returns a void* (generic pointer)

In C (but not C++), a void* can be implicitly converted to any other pointer type

The cast explicitly converts the void* to struct node*

2. Compatibility
C: Both forms work identically

C++: Requires the explicit cast (C++ doesn't allow implicit conversion from void*)

Which One is Better?
Recommended Approach (Modern C)
c
struct node *newNode = malloc(sizeof(struct node));
or even better:

c
struct node *newNode = malloc(sizeof(*newNode));
Why this is preferred:

Less clutter - Removes unnecessary visual noise

Type safety - If you change the type of newNode, the sizeof automatically adjusts

C standard compliant - Explicit casting is not required in C

Less maintenance - No need to update casts when types change

When You Might Use Casting
C++ compatibility (though you should generally use new in C++)

Very old compilers (pre-ANSI C)

When you want to be explicit (though this is more style than necessity)

Memory Diagram
Both versions result in identical memory allocation:

text
+-------------------+       +---------------------+
| newNode pointer   | ----> | Allocated memory    |
| (struct node*)    |       | for one node        |
+-------------------+       +---------------------+
The cast doesn't affect how the memory is allocated or used - it's purely about how the compiler interprets the return value of malloc.

Important Notes
Error checking: Always check if malloc succeeded:

c
struct node *newNode = malloc(sizeof(*newNode));
if (!newNode) {
    // Handle allocation failure
}
Best practice: The sizeof(*newNode) form is most maintainable because:

It stays correct even if you change the type of newNode

It reduces duplication of type information

Historical context: The casting style was more common in older code, especially code that needed to compile as both C and C++.

*/