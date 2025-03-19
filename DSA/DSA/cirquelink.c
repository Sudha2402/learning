/*
	C Program
	Implement circular queue using linked list
*/

#include <stdio.h>
#include <stdlib.h>

// Queue node//global to let it use inside functions also
struct QNode
{
	int element;
	struct QNode *next;
};
struct CircularQueue//global to let it use inside functions also
{
	struct QNode *front;
	struct QNode *rear;
	int size; // in linear queue with pointer, size is not needed hence this front and rear is declared globally not in circularQueue new structure
};
// Returns the new circular queue
struct CircularQueue *newQueue()//initialization of front and rear because in same struct QNode *front=NULL; in  struct CircularQueue show error// here function is the pointer with return datatype struct circularqueue//struct CircularQueue *q = newQueue();
{
	struct CircularQueue *q = (struct CircularQueue *)malloc(sizeof(struct CircularQueue));
	if (q == NULL)
	{
		printf("Memory overflow, Not constructed new circular queue\n");
	}
	else
	{
		q->front = NULL;
		q->rear = NULL;
		q->size = 0; // size is handled manually not with fixed size but size increases with insert and decreases with delete//here size is number of elements present not the the maximum fixed limit
	}
	return q;//update globally in mains as it is passed there
}
// Returns the number of active nodes in circular queue
int isSize(struct CircularQueue *q)
{
	return q->size;
}
// Add new element into circular queue
void enQueue(struct CircularQueue *q, int element)
{
	// Make a new node
	struct QNode *node = (struct QNode *)malloc(sizeof(struct QNode));
	if (node != NULL)
	{
		// Set node values
		node->element = element;
		node->next = q->front;//for circular queue to point rear at front is neccesary
		if (q->front == NULL)
		{
			//  When inserting a first node of queue
			q->front = node;//front and node both are pointer hence they can be assigned
			q->rear = node;
			node->next = node;
		}
		else
		{
			// Add node at end position
			q->rear->next = node;
			q->rear = node;
		}
		q->size++;
	}
	else
	{
		printf("\n Memory Overflow, when creating a new Node\n");
	}
}

// Remove a front node of circular queue
void deQueue(struct CircularQueue *q)
{
	// Make a new node
	struct QNode *node = q->front; // node is created to let it free
	if (node != NULL)			   // memory allocated to node
	{
		if (q->front == q->rear)
		{
			// Remove first node which is also last node
			q->front = NULL;
			q->rear = NULL;
		}
		else
		{
			q->front = node->next;
			// Set the last link to new front
			q->rear->next = q->front; // jus tlike circular linkedlist
		}
		printf("\n Remove Node : %d", node->element);
		q->size--;
		free(node);
	}
}
// Get the front node of circular queue
int peek(struct CircularQueue *q)
{
	if (q->size == 0)
	{
		// When queue is empty
		printf("\n Queue is empty \n");
		return -1;
	}
	else
	{
		return q->front->element; // we are peeking the element which is next to be deleted, hence we peek it
	}
}
// Display element
void printData(struct CircularQueue *q)
{
	struct QNode *node = q->front;
	printf("\n Queue Element \n");
	while (node != NULL)
	{
		printf(" %d ", node->element);
		node = node->next;
		if (node == q->front)
		{
			node = NULL;
		}
	}
}
int main(int argc, char const *argv[])
{
	struct CircularQueue *q = newQueue();//initialization of every data in struct datatype//here malloc space creation is done directly in pointer *newQueue() function
	// Add node in circular queue
	enQueue(q, 1);
	enQueue(q, 4);
	enQueue(q, 7);
	enQueue(q, 9);
	enQueue(q, 5);
	enQueue(q, 6);
	printData(q);
	printf("\n Size : %d", isSize(q));
	printf("\n Peek Node : %d", peek(q));
	// Remove few front node
	deQueue(q);
	deQueue(q);
	printData(q);
	printf("\n Peek Node : %d", peek(q));
	printf("\n Size : %d", isSize(q));
	return 0;
}

/*
Queue Element
 1  4  7  9  5  6 
 Size : 6
 Peek Node : 1
 Remove Node : 1
 Remove Node : 4
 Queue Element
 7  9  5  6
 Peek Node : 7
 Size : 4
PS C:\Sudhadocuments\DSA\DSA> 
*/