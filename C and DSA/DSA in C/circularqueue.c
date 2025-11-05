#include <stdio.h>
#include <stdlib.h>

// need an updation.....instead of f to be empty....it should be the the element to be dequeued...

struct circularQueue
{
    int size;
    int f;
    int r;
    int *arr;
};

int isEmpty(struct circularQueue *q)
{
    // if (q->r == q->f && q->arr[q->f]==-1)
    if (q->r == q->f && q->f == -1)
    // if (q->r == q->f)
    {
        return 1;
    }
    return 0;
}

int isFull(struct circularQueue *q)
{
    // if (q->r + 1 % q->size == q->f + 1% q->size  && q->arr[q->r] == -1)
    // if (q->r + 1 % q->size == q->f + 1% q->size)
    if (q->r == q->f && q->f != -1) // works
    {

        // this below if is needed for if q->r == q->f  only in outer
        // if (q->f == -1)
        // {
        //     return 0;
        // }
        // else
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

        q->r = (q->r + 1) % q->size;
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

    else
    {
        q->f = (q->f + 1) % q->size;
        a = q->arr[q->f];
        // q->arr[q->f] = -1;
    }

    if (q->f == q->r && q->f != -1)
    {
        q->f = q->r = -1;
    }

    return a;
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

        if (q->f <= q->r)
        {
            // for (int i = q->f + 1; i <= q->size-1; i++)
            for (int i = q->f + 1; i <= q->r; i++)
            {
                printf("%d\t", q->arr[i]);
            }
        }

        else
        {

            for (int i = q->f + 1; i <= q->size - 1; i++)
            {
                printf("%d\t", q->arr[i]);
            }

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
