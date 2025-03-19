#include <stdio.h>
#include <stdlib.h>

// need an updation.....instead of f to be empty....it should be the the element to be dequeued...for now f is one index behind the element

struct circularQueue
{
    int size;
    int f;
    int r;
    int *arr;
};

int isEmpty(struct circularQueue *q)
{
    if (q->r == q->f && q->arr[q->f] == -1) // f is index after which elements of queue started , here q->r == q->f at that time when f shifted after pop and q->arr[q->f]==-1 is set at start and after pop
    {
        return 1;
    }
    return 0;
}

int isFull(struct circularQueue *q)
{
    if (q->r + 1 % q->size == q->f + 1 % q->size)//simply if r and f at same position from any side then it is full , thinks as f present at index 4 and r at index 4 then f+1=5 holds the first element and in back traverse from 0 to rear , it is full but here %size necessary to move to back positions
    {
        if (q->f == -1)
        {
            return 0;
        }
        else
            return 1;
    }
    return 0;
}

void enqueue(struct circularQueue *q, int val)
{
    if (isFull(q))
    {
        printf("This Queue is full\n");
    }

    // need an updation.....instead of f to be empty....it should be the the element to be dequeued...
    else
    {
        q->r = (q->r + 1) % q->size; // when r at last then it will move r to 0 for enqueue
        q->arr[q->r] = val;
        printf("Enqued element: %d\n", val);
    }
}

int dequeue(struct circularQueue *q)
{
    int a = -1;
    if (isEmpty(q))
    {
        printf("This Queue is empty\n");
    }
    if (q->f == q->r) // at the time when empty then it moves all indexes to -1 at start and q->r + 1 % q->size == q->f + 1 % q->size
    {
        q->f = q->r = -1; // it sets to start -1
    }
    else
    {
        q->f = (q->f + 1) % q->size;
        a = q->arr[q->f];
        // return a;//best if a is at this position
    }
    return a; // if not entered in else condition then a will be -1
}

void show(struct circularQueue *q)
{
    if (isEmpty(q))
    {
        printf("This Queue is empty\n");
    }
    else
    {
        printf("Queue:\t");
        for (int i = q->f + 1; i <= q->size - 1; i++)
        {
            printf("%d\t", q->arr[i]);
        }

        if (q->f >= q->r)//it is used to diplay those elements which are inserted after dequeue //here equal is used because front contains the very first element of queue
        {
            for (int i = 0; i <= q->r; i++)
            {
                printf("%d\t", q->arr[i]);
            }
        }

        printf("\n");
    }
}

int main()
{
    struct circularQueue q;
    q.size = 4;
    q.f = q.r = -1;
    q.arr = (int *)malloc(q.size * sizeof(int));

    // Enqueue few elements
    enqueue(&q, 12);
    enqueue(&q, 15);
    enqueue(&q, 1);
    enqueue(&q, 2);
    show(&q);
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));

    show(&q);

    enqueue(&q, 45);
    enqueue(&q, 42);
    enqueue(&q, 43);
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    enqueue(&q, 48);
    enqueue(&q, 49);
    enqueue(&q, 49);

    show(&q);

    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    printf("Dequeuing element %d\n", dequeue(&q));
    show(&q);
}

/*
Enqued element: 12
Enqued element: 15
Enqued element: 1
Enqued element: 2
Queue:  12      15      1       2
Dequeuing element 12
Dequeuing element 15
Dequeuing element 1
Dequeuing element 2
Dequeuing element -1
Queue:  12      15      1       2
Enqued element: 45
Enqued element: 42
Enqued element: 43
Dequeuing element 45
Dequeuing element 42
Enqued element: 48
Enqued element: 49
Enqued element: 49
Queue:  43      48      49      49
Dequeuing element -1
Dequeuing element -1
Dequeuing element -1
Dequeuing element -1
Queue:  49      49      43      48
PS C:\Sudhadocuments\DSA\DSA>
*/