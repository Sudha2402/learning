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