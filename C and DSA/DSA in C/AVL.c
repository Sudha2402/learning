#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
    int height;
};

struct node *createnode(int key)
{
    struct node* node=(struct node*)malloc(sizeof(struct node));
    node->data = key;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    return node;
}

int getheight(struct node *node)
{
    if (node == NULL)
    {
        return 0;
    }
    return node->height;
}

int max(int a, int b)
{
    return (a > b) ? a : b;
}
 
int getbalanceFactor(struct node *node)
{
    if (node == NULL)
        return 0;
    return getheight(node->left) - getheight(node->right);
}

struct node *rightrotate(struct node *y)
{
    struct node *x = y->left;
    struct node *T2 = x->right;
    x->right = y;
    y->left = T2;


    // error with this height modification
    // x->height = max(getheight(x->left), getheight(x->right)) + 1;//x shoulod be after y
    // y->height = max(getheight(y->left), getheight(y->right)) + 1;


    // error free but lengthy.
    // Update heights in correct order (children first)
    // Handle NULL cases safely
    // int height_T2 = (T2 == NULL) ? -1 : T2->height;
    // int height_y_right = (y->right == NULL) ? -1 : y->right->height;
    
    // // Update y's height first (now child of x)
    // y->height = 1 + max(height_T2, height_y_right);
    
    // // Then update x's height (using y's new height)
    // int height_x_left = (x->left == NULL) ? -1 : x->left->height;
    // x->height = 1 + max(height_x_left, y->height);




    // error free with order change height modification
    y->height = max(getheight(y->left), getheight(y->right)) + 1;
    x->height = max(getheight(x->left), getheight(x->right)) + 1;

    return x; // this x will be root node
}

struct node *leftrotate(struct node *x)
{
    struct node *y = x->right;
    struct node *T2 = y->left;
    y->left = x;
    x->right = T2;

    x->height = max(getheight(x->left), getheight(x->right)) + 1;
    y->height = max(getheight(y->left), getheight(y->right)) + 1;

    return y; // now y is root node
}

struct node *insert(struct node *node, int key)
{
    if (node == NULL)
    {
        return createnode(key);
    }
    if (key < node->data)
    {
        node->left = insert(node->left, key);
    }
    else if (key > node->data)
    {
        node->right = insert(node->right, key);
    }
    node->height = 1 + max(getheight(node->left), getheight(node->right));


    int bf = getbalanceFactor(node);
    if (bf > 1 && key < node->left->data)
    {
        return rightrotate(node);
    }
    if (bf < -1 && key > node->right->data)
    {
        return leftrotate(node);
    }
    if (bf > 1 && key > node->left->data)
    {
        node->left = leftrotate(node->left);
        return rightrotate(node);
    }
    if (bf < -1 && key < node->right->data)
    {
        node->right = rightrotate(node);
        return leftrotate(node);
    }
    return node;
}

void inorder(struct node *root)
{
    if (root != NULL)
    {
        inorder(root->left);
        printf("%d\t", root->data);
        inorder(root->right);
    }
    return;
}

int main()
{
    struct node *root = NULL;
    root = insert(root, 10);
    root = insert(root, 20);
    root = insert(root, 40);
    root = insert(root, 4);
    root = insert(root, 9);
    root = insert(root, 3);

    printf("inorder :");
    inorder(root);
    printf("\n\n");
    
}



/*
Why This Works Correctly:
Example Walkthrough:

text
Initial:
      y (h=3)
     / \
  x(h=2) C(h=0)
   / \
A(h=0) T2(h=1)

After Rotation:
      x
     / \
    A   y
       / \
     T2  C
Height Update Steps:

First calculate y's new height:

T2 height = 1

C height = 0

y->height = 1 + max(1, 0) = 2

Then calculate x's new height:

A height = 0

y's new height = 2

x->height = 1 + max(0, 2) = 3

Balance Factors:

x: balance = height(A) - height(y) = 0 - 2 = -2

y: balance = height(T2) - height(C) = 1 - 0 = 1

The apparent imbalance at x will be handled by subsequent rotations in the AVL insertion/deletion process
*/






/*
Let me break down the AVL tree insertion with a step-by-step visualization. We'll insert keys [30, 20, 40, 10, 25] and focus on what happens when we insert 25.

Initial Tree After Inserting 30, 20, 40, 10:
text
        30 (h=2)
       /  \
(h=1)20   40 (h=0)
    /
(h=0)10
Now Inserting 25 - Execution Flow:
1. First Call: insert(root=30, 25)
c
if (node == NULL) → false (30 exists)
if (25 < 30) → true
   node->left = insert(node->left=20, 25)
2. Recursive Call: insert(20, 25)
c
if (node == NULL) → false
if (25 < 20) → false
else if (25 > 20) → true
   node->right = insert(node->right=NULL, 25)
3. Base Case: insert(NULL, 25)
c
if (node == NULL) → true
   return createnode(25) → creates new node with height=0
Now recursion unwinds back up:

Back in insert(20, 25):
c
node->right = [new node 25] // 20's right child set
node->height = 1 + max(h(left)=0, h(right)=0) = 1
bf = 0 - 0 = 0 → no rotation needed
return node (20)
Back in insert(30, 25):
c
node->left = [20 node] // unchanged
node->height = 1 + max(h(left)=1, h(right)=0) = 2
bf = 1 - 0 = 1 → but check conditions:
   (bf > 1 && 25 < 20->data)? → false
   (bf < -1...)? → false
   etc. → no rotation
return node (30)
Final Tree Before Rotation:
text
        30 (h=2)
       /  \
(h=1)20   40 (h=0)
    /  \
(h=0)10 25 (h=0)
Now let's see what happens if we insert 5 (which will cause rotations):

Inserting 5 - Execution Flow:
Recursively goes left to 30 → 20 → 10

Creates new node 5 as left of 10

Unwinds recursion:

At node 10:
c
height = 1 + max(h(5)=0, NULL) = 1
bf = 0 - (-1) = 1 → no rotation
At node 20:
c
height = 1 + max(h(10)=1, h(25)=0) = 2
bf = 1 - 0 = 1 → no rotation
At node 30:
c
height = 1 + max(h(20)=2, h(40)=0) = 3
bf = 2 - 0 = 2 → triggers rotation condition:
   (bf > 1 && 5 < 20->data)? → true
   return rightrotate(30)
Rotation Visualization:
Before Rotation:

text
        30 (h=3) ← unbalanced
       /  \
(h=2)20   40
    /  \
(h=1)10 25
  /
(h=0)5
After Right Rotation:

text
      20 (h=2)
     /  \
(h=1)10  30 (h=1)
  /    / \
(h=0)5 25 40
Key Points:

Recursion goes down to insertion point

Unwinds back up updating heights
4
At each level checks balance factor (bf)

Performs rotations when |bf| > 1

Rotation cases:

Left-Left (right rotate)

Right-Right (left rotate)

Left-Right (left then right)

Right-Left (right then left)
*/