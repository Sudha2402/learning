// C program to implement optimized delete in BST.
#include <stdio.h>
#include <stdlib.h>

struct Node {
	int key;
	struct Node *left, *right;
};

// A utility function to create a new BST node
struct Node* newNode(int item)
{
	struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
	temp->key = item;
	temp->left = temp->right = NULL;
	return temp;
}

// A utility function to do inorder traversal of BST
void inorder(struct Node* root)
{
	if (root != NULL) {
		inorder(root->left);
		printf("%d ", root->key);
		inorder(root->right);
	}
}

/* A utility function to insert a new node with given key in
* BST */ //it is recursive method, we can do iterative also using while loop. storing two pointer prev and root.
struct Node* insert(struct Node* node, int key)
{
	/* If the tree is empty, return a new node */
	if (node == NULL)
		return newNode(key);

	/* Otherwise, recur down the tree */
	if (key < node->key)
		node->left = insert(node->left, key);
	else
		node->right = insert(node->right, key);

	/* return the (unchanged) node pointer */
	return node;
}

/* Given a binary search tree and a key, this function
deletes the key and returns the new root */
struct Node* deleteNode(struct Node* root, int k)
{
	// Base case
	if (root == NULL)
		return root;

	// Recursive calls for ancestors of
	// node to be deleted
	if (root->key > k) {
		root->left = deleteNode(root->left, k);
		return root;
	}
	else if (root->key < k) {
		root->right = deleteNode(root->right, k);
		return root;
	}

	// We reach here when root is the node
	// to be deleted.

	// If one of the children is empty
	if (root->left == NULL) {
		struct Node* temp = root->right;    //here root will be 70 and root right is 80 
		free(root);
        //printf("%d\n",temp->key); //give 80 when 70 was tried to delete
		return temp;  //then root now is 80 => 80 will be ponted insted of 70 privously...
       // printf("%d\n",temp->key); //not execute after return
	}

	else if (root->right == NULL) {
		struct Node* temp = root->left;
		free(root);
		return temp;
	}

	// If both children exist
	// else {

	// 	struct Node* succParent = root;

	// 	// Find successor
	// 	struct Node* succ = root->right;
	// 	while (succ->left != NULL) {
	// 		succParent = succ;
	// 		succ = succ->left;
	// 	}

	// 	// Delete successor. Since successor
	// 	// is always left child of its parent
	// 	// we can safely make successor's right
	// 	// right child as left of its parent.
	// 	// If there is no succ, then assign
	// 	// succ->right to succParent->right
	// 	if (succParent != root)
	// 		succParent->left = succ->right;
	// 	else
	// 		succParent->right = succ->right;

	// 	// Copy Successor Data to root
	// 	root->key = succ->key;

	// 	// Delete Successor and return root
	// 	free(succ);
	// 	return root;
		
	// }




	else {

		struct Node* succParent = root;

		// Find successor
		struct Node* succ = root->right;
		while (succ->left != NULL) {
			succParent = succ;
			succ = succ->left;
		}

		// Delete successor. Since successor
		// is always left child of its parent
		// we can safely make successor's right
		// right child as left of its parent.
		// If there is no succ, then assign
		// succ->right to succParent->right
		if (succParent != root) //it has gone inside the while loop above

		
			succParent->left = succ->right;
		else
			succParent->right = succ->right;

		// Copy Successor Data to root
		root->key = succ->key;

		// Delete Successor and return root
		free(succ);
		return root;
		
	}
}

// Driver Code
int main()
{
	/* Let us create following BST
			50
		/	 \
		30	 70
		/ \    \
	20    40     80 
                /
             75
    */
	struct Node* root = NULL;
	root = insert(root, 50);
	root = insert(root, 30);
	root = insert(root, 20);
	root = insert(root, 40);
	root = insert(root, 70);
	//root = insert(root, 60);
	root = insert(root, 80);
	root = insert(root, 75);

	printf("Original BST: ");
	inorder(root);

	//printf("\n\nDelete a Leaf Node: 20\n");
	//root = deleteNode(root, 20);
	//printf("Modified BST tree after deleting Leaf Node:\n");
	//inorder(root);

	printf("\n\nDelete Node with single child: 70\n");
	root = deleteNode(root, 70);
//   printf("%d\n",root->key);  //it wil return 50 not the value of temp which is 80

	printf("Modified BST tree after deleting single child Node:\n");
	inorder(root);  //it take root=50

	/*printf("\n\nDelete Node with both child: 50\n");
	root = deleteNode(root, 50);
	printf("Modified BST tree after deleting both child Node:\n");
	inorder(root);
    */

	return 0;
}



/*
BST Deletion Flow: Successor Case Explained
This code handles the case when deleting a node with two children from a Binary Search Tree (BST). Let's break down the execution flow:

Key Concepts
Successor: The smallest node in the right subtree (leftmost node)

Successor Parent: The parent of this successor node

Replacement Strategy: Copy successor's value to target node, then delete successor

Execution Flow
1. Finding the Successor
c
struct Node* succParent = root;  // Start with current node as parent
struct Node* succ = root->right; // Go to right subtree

// Traverse left to find minimum
while (succ->left != NULL) {
    succParent = succ;       // Track parent
    succ = succ->left;       // Move left
}
Visualization:

text
       [5]         <- root (to delete)
      /   \
     3     8      <- root->right (start of succ)
          / \
         6   9
        /
      [6]          <- succ (minimum in right subtree)
2. Re-linking the Tree
c
if (succParent != root)  // If we moved left at least once
    succParent->left = succ->right;  // Bypass successor
else
    succParent->right = succ->right; // Case where right child is successor
Two Cases:

Case 1 (Normal - successor is leftmost):

text
Before:
    succParent
       \
        succ
          \
           succ->right

After:
    succParent
       \
        succ->right
Case 2 (Immediate right child is successor):

text
Before:
    root
       \
        succ
          \
           succ->right

After:
    root
       \
        succ->right
3. Value Copy and Cleanup
c
root->key = succ->key;  // Copy successor's value
free(succ);             // Delete the successor node
return root;            // Return modified tree
Why This Works
BST Property Maintained:

Successor is the next-highest value after the deleted node

By replacing with successor, we maintain proper ordering

Successor Guarantees:

Successor will have at most one child (right child)

Successor will not have a left child (we traversed to leftmost)

Full Example Walkthrough
Deleting node 5 from:

text
      5
     / \
    3   8
       / \
      6   9
     / \
    5.5 7
Find successor (leftmost in right subtree):

Start at 8 → 6 → 5.5 (successor)

Re-link:

6's left becomes 5.5's right (7)

Copy 5.5's value to original 5

Delete 5.5

Result:

text
      5.5
     / \
    3   8
       / \
      6   9
     / \
    7   (null)
Edge Cases Handled
Successor is immediate right child:

c
// When while loop never executes
else
  succParent->right = succ->right;
Successor has no right child:

succ->right will be NULL, properly cutting off the link

This approach efficiently handles two-child deletion while maintaining BST properties with O(h) time complexity (h = tree height).

*/