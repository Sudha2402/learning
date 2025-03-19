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

    x->height = max(getheight(x->left), getheight(x->right)) + 1;
    y->height = max(getheight(y->left), getheight(y->right)) + 1;

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
