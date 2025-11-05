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
    static struct node *prev = NULL;
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
        return 1;
    }
}

struct node *searchIter(struct node *root, int key)
{
    while (root != NULL)
    {
        if (key == root->data)
        {
            return root;
<<<<<<< HEAD
            printf("\n%d is found using searchIter", key);
=======
>>>>>>> 34504dcc (moving)
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
<<<<<<< HEAD
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
=======
}

struct node *inOrderPredecessor(struct node *root)
{
   // printf("%d\n", root->data);
   if (root->left == NULL)
    {
        struct node *temp = root->right;
        free(root);
        return temp;
>>>>>>> 34504dcc (moving)
    }
    else if (root->right == NULL)
    {
        struct node *root = root->left;
        free(root);
        return root;
    }
<<<<<<< HEAD
    */

    // incase when root->right != NULL  &&  root->left != NULL

    root = root->left;
    while (root->right != NULL) // finding the leaf node of  (root->left->right)
    {
        // printf("%d\n", root->data);
=======
    root = root->left;
    while (root->right != NULL)
    {
        //printf("%d\n", root->data);
>>>>>>> 34504dcc (moving)
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
<<<<<<< HEAD
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
=======
    if (root->left == NULL && root->right == NULL)
    {
        free(root);
        return NULL;
    }
   /*else if (root->left == NULL)
    {
        struct node *temp = root->right;
        free(root);
        return temp;
    }
    else
    {
        struct node *root = root->left;
        free(root);
        return root;
    }
    */
>>>>>>> 34504dcc (moving)

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
<<<<<<< HEAD
        root->left = deleteNode(root->left, iPre->data); // deleting the node from leaf which has been placed at deleted node
=======
        root->left = deleteNode(root->left, iPre->data);
>>>>>>> 34504dcc (moving)
    }
    return root;
}

<<<<<<< HEAD
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

=======
>>>>>>> 34504dcc (moving)
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
<<<<<<< HEAD
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
=======

    inOrder(p);
    printf("\n");
    deleteNode(p, 6);
    inOrder(p);
    // printf("\n");
    // insert(p,2);
    // printf("\n");
    // inOrder(p);

    return 0;
}
>>>>>>> 34504dcc (moving)
