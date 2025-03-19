#include <stdio.h>
#define MAX 50
int A[MAX];
int top = -1, val, choice; // all defined globally to update top and val

void push()
{
    if (top == MAX - 1)
    {
        printf("Stack is full\n\n");
    }
    else
    {
        top++;//directly affects the global top value as this function is outside the main and also top is initialized outside
        printf("Stack push element : ");
        scanf("%d", &val);
        A[top] = val;
    }
}

int pop()
{
    if (top == -1)
    {
        printf("Stack is empty\n\n");
    }
    else
    {
        printf("Stack pop element is %d\n", A[top]);
        top--;
    }
    return 0;
}

int traverse()
{
    if (top == -1)
    {
        printf("Stack is empty\n\n");
    }
    else
    {
        for (int i = top; i >= 0; i--)
        {
            printf("\n %d", A[i]);
        }
    }
    return 0;
}

int main()
{
    printf(" 1. push\n 2.pop \n 3.traverse \n 4.Exit \n"); // while can also be used by taking choice directly if   int choice = 0; while (choice != 4) but it prints menu alltime whereas while with do will print menu only once as i it outside the loop


    do
    {
        printf("\nEnter choice : ");
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
            printf("Enter a valid choice\n");

            break;
        }

    } while (choice != 4);

    return 0;
}
