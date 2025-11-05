#include <stdio.h>
#include <stdlib.h>

struct qnode
{
    int data;
    struct qnode *next;
};

struct qnode *f = NULL; // front is passed anywhere when needed
struct qnode *r = NULL;

void DEqueueTraversal(struct qnode *ptr)
{
    if (ptr == NULL)
    {
        printf("Queue is empty\n");
        return;
    }
    else
    {
        printf("Double ended queue elements are:");
        while (ptr != NULL)
        {

            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        printf("\n");
        return;
    }
}
void enqueueR(struct qnode *ptr, int val)
{
    struct qnode *node = (struct qnode *)malloc(sizeof(struct qnode));
    if (node == NULL)
    {
        printf("memory can't be alloted\n");
        return;
    }
    node->data = val;
    node->next = NULL;

    if (f == NULL)
    {
        f = r = node;
    }
    else
    {
        r->next = node;
        r = node;
    }
    printf("%d is succesfully enqueue at rear\n", val);
    return;
}

void enqueueF(struct qnode *ptr, int val)
{
    struct qnode *node = (struct qnode *)malloc(sizeof(struct qnode));
    if (node == NULL)
    {
        printf("memory can't be alloted\n");
        return;
    }
    node->data = val;

    if (f == NULL)
    {
        f = r = node;
        node->next = NULL;
    }
    else
    {
        node->next = f;
        f = node;
    }
    printf("%d is succesfully enqueue at front\n", val);
    return;
}

void dequeueF(struct qnode *ptr)
{

    if (f == NULL)
    {
        printf("Queue is Empty\n");
    }
    else
    {
        int val = ptr->data;
        ptr = ptr->next;
        f = ptr;
        printf("%d is deleted from queue\n", val);
    }
    return;
}

void dequeueR(struct qnode *ptr)
{

    if (ptr == NULL)
    {
        printf("Queue is Empty\n");
        return;
    }
    else
    {
        printf("%d is deleted from queue\n", r->data);
        while (ptr->next->next != NULL)
        {
            ptr = ptr->next;
            continue;
        }
free(r);//same as   free(ptr->next);
        r = ptr;
        // free(ptr->next);
        r->next=NULL;
        
         return;
    }
   
}

int main()
{
    printf("Hello double Ended Queue\n");
    DEqueueTraversal(f);
    dequeueF(f);
    DEqueueTraversal(f);
    dequeueR(f);
    DEqueueTraversal(f);
    enqueueF(f, 1);
    enqueueF(f, 2);
    enqueueF(f, 3);
    enqueueR(f, 10);
    enqueueR(f, 20);
    enqueueR(f, 30);
    DEqueueTraversal(f);
    dequeueR(f);
    DEqueueTraversal(f);
    dequeueF(f);
    DEqueueTraversal(f);
    // dequeueR(f);
    DEqueueTraversal(f);

    return 0;
}


/*
Hello double Ended Queue
Queue is empty
Queue is Empty
Queue is empty
Queue is Empty
Queue is empty
1 is succesfully enqueue at front
2 is succesfully enqueue at front
3 is succesfully enqueue at front
10 is succesfully enqueue at rear
20 is succesfully enqueue at rear
30 is succesfully enqueue at rear
Double ended queue elements are:3 2 1 10 20 30
30 is deleted from queue
Double ended queue elements are:3 2 1 10 20
3 is deleted from queue
Double ended queue elements are:2 1 10 20
Double ended queue elements are:2 1 10 20
PS C:\Sudhadocuments\DSA\DSA> 
*/
