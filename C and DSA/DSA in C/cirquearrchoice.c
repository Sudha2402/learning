#include <stdio.h>
#define MAX 5
int A[MAX];
int f = -1, r = -1, val, choice;

// here f is index at which first element of the queue will start

void push()
{
    if (f == (r + 1) % MAX) // it will handle from front and back both
    {
        printf("Queue is full\n");
    }
    else
    {
        printf("Queue push element :");
        scanf("%d", &val);

        if (f == -1)
        {
            f = 0;
        }

        r = (r + 1) % MAX; // now r points 0 at very first
        A[r] = val;
    }
}

int pop()
{
    if (r == -1 || f == -1) // f ==-1 is at the very start but therafter it is moved to 0 in first push and r == -1 is not needed only f ==-1 is enough to declare it empty
    {
        printf("Queue is empty\n"); // empty case when r+1=f is full case
    }

    /*wrong
        if (r == f) //wrong as if value of f is:0 and r is:0  then it gives error as after f there are aslo elements present
        {
            r = -1;
            f = -1;
        }
    */

    else
    {
        printf("Queue pop element is %d\n", A[f]);
        f++;
    }
    return 0;
}

int traverse()
{
    printf("\tvalue of f is:%d and r is:%d\n", f, r);

    /*
    if (f == -1 || f > r) // wrong
    {
        printf("Stack is empty\n");
    }
    else
    {
        for (int i = f; i <= r; i++)
        {
            printf("\t %d", A[i]);
        }
    }

    */

    if (f < r)
    {
        for (int i = f; i <= r; i++)
        {
            printf("\t %d", A[i]);
        }
    }
    else if (r <= f)
    {
        for (int i = f; i < MAX; i++)
        {
            printf("\t %d", A[i]);
        }
        // printf("\n");
        for (int i = 0; i <= r; i++)
        {
            printf("\t %d", A[i]);
        }
    }

    return 0;
}

int main()
{
    printf(" 1.push\n 2.pop \n 3.traverse \n 4.Exit\n");
    do
    {
        printf("\nEnter choice :");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            push();
            break;

        case 2:
            pop();
            break;

        case 3:
            traverse();
            break;

        case 4:

            break;

        default:
            printf("Enter a valid choice");

            break;
        }

    } while (choice != 4);

    return 0;
}

/*
1.push
 2.pop 
 3.traverse
 4.Exit

Enter choice :1
Queue push element :1

Enter choice :1
Queue push element :2

Enter choice :1
Queue push element :3

Enter choice :1
Queue push element :4

Enter choice :1
Queue push element :5

Enter choice :1
Queue is full

Enter choice :3
        value of f is:0 and r is:4
         1       2       3       4       5
Enter choice :2
Queue pop element is 1

Enter choice :3
        value of f is:1 and r is:4
         2       3       4       5
Enter choice :2
Queue pop element is 2

Enter choice :3
        value of f is:2 and r is:4
         3       4       5
Enter choice :1
Queue push element :6

Enter choice :3
        value of f is:2 and r is:0
         3       4       5
         6
Enter choice :1
Queue push element :7

Enter choice :3
        value of f is:2 and r is:1
         3       4       5
         6       7
Enter choice :
*/