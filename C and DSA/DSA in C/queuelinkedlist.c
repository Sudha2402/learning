#include <stdio.h>
#include <stdlib.h>

// f and r  are external pointers that only points to queue elements which are linked with linkedlist //f=n can be don where n is node pointer which stores node 
struct Node *f = NULL; // indirectly it means 0
struct Node *r = NULL;

// here f represent the first element of queue //linked list has no size limit
struct Node
{
    int data;
    struct Node *next;
};

void linkedListTraversal(struct Node *ptr) // linkedListTraversal(f);//here f is passed and earlier head was passed
{
    if (f == NULL)
    {
        printf("Queue is Empty\n");
    }
    else
    {
        printf("Printing the elements of this linked list:\n");

        while (ptr != NULL)
        {

            printf("%d\t", ptr->data);
            ptr = ptr->next;
        }
        printf("\n");
    }
}

void enqueue(int val)
{
    struct Node *n = (struct Node *)malloc(sizeof(struct Node));
    // n = (struct Node *)malloc(sizeof(struct Node));
    if (n == NULL)
    {
        printf("Queue is Full");//memory not allocated to n pointer because queue is full
    }
    else
    {
        n->data = val;
        n->next = NULL;
        if (f == NULL)
        {
            f = r = n;//as here is r pointer hence not needed to traverse the linkedlist to end hence no new pointer required
        }
        else
        {
            r->next = n;
            r = n;//update globally
        }
        printf("%d is enqueued \n",val);
    }
}

int dequeue()
{
    int val = -1;
    struct Node *ptr = f;
    if (f == NULL)
    {
        printf("Queue is Empty\n");
    }
    else
    {
        f = f->next;
        val = ptr->data;
        free(ptr);
    }
    return val;
}

int main()
{
    linkedListTraversal(f);
    printf("Dequeuing element %d\n", dequeue());
    enqueue(34);
    enqueue(4);
    enqueue(7);
    enqueue(17);
    enqueue(11);
    linkedListTraversal(f);
    // enqueue(NULL);
    printf("Dequeuing element %d\n", dequeue());
    linkedListTraversal(f);
    printf("Dequeuing element %d\n", dequeue());
    //  printf("Dequeuing element %d\n", dequeue());
    //  printf("Dequeuing element %d\n", dequeue());
    linkedListTraversal(f);
    return 0;
}


/*
Queue is Empty
Queue is Empty
Dequeuing element -1
34 is enqueued
4 is enqueued
7 is enqueued
17 is enqueued
11 is enqueued
Printing the elements of this linked list:
34      4       7       17      11
Dequeuing element 34
Printing the elements of this linked list:
4       7       17      11
Dequeuing element 4
Printing the elements of this linked list:
7       17      11
PS C:\Sudhadocuments\DSA\DSA> 
*/