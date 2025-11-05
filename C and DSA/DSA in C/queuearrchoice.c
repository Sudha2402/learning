#include <stdio.h>
#define MAX 3
int A[MAX];
int f = -1, r = -1, val, choice;

void push()
{
    // if (r == MAX - 1)
        printf("r :%d\n",r);
        printf("f :%d\n",f);
    if (r-f == MAX - 1)
    {
        printf("Queue is full\n");
    }
    else
    {
        printf("Queue push element :");
        scanf("%d", &val);
        
        // if (f = -1) //note that it is assignment and always give f=0 after this , it is not checking but assigning
        if (f == -1) //OK
        {
            f = 0;//f points the first element in queue not as per previous array where f points behind the first element
        }


        r++;
        A[r] = val;
        
    }

    /*
 1.push into Queue 
 2.pop into Queue 
 3.traverse into Queue
 4.Exit

Enter choice :1
Queue push element :3

Enter choice :1
Queue push element :5

Enter choice :1 
Queue push element :7

Enter choice :3
Queue elements :3       5       7
Enter choice :1
Queue is full

Enter choice :6
Enter a valid choice 

Enter choice :2
Queue pop element is 3

Enter choice :1
Queue is full //as we have dequeued then it should allow to push element at free space hence use 
    */
}

int pop()
{
    if (r == -1 || f > r)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Queue pop element is %d\n", A[f]);
        f++;
    }
    return 0;
}

int traverse()
{
    printf("Queue elements :");
    if (f == -1 || f > r)
    {
        printf("Queue is empty\n");
    }
    else
    {
        for (int i = f; i <= r; i++)
        {
            printf("%d\t", A[i]);
        }
    }
    return 0;
}

int main()
{
    printf(" 1.push into Queue \n 2.pop into Queue \n 3.traverse into Queue \n 4.Exit \n");
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
            printf("Enter a valid choice \n");

            break;
        }

    } while (choice != 4);

    return 0;
}
