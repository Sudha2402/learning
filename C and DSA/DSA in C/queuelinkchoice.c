#include <stdio.h>
#include <stdlib.h>
int val, choice;

struct node
{
    int data;
    struct node *next;
};
struct node *f = NULL;
struct node *r = NULL;
void push(int val)
{
    // struct node* S= NULL;
    struct node *S = (struct node *)malloc(sizeof(struct node));
    S->data = val;
    S->next = NULL;
    if (f == NULL)
    {
        f = r = S;
    }
    else
    {

        r->next = S;
        r = S;
    }
    printf("%d is pushed successfully in queue\n", val);
}

int pop()
{
    if (f == NULL)
    {
        printf("empty");
        return -1;
    }
    else
    {
        val = f->data;
        struct node *p = f; //  automatically can also store data like this //p->data=f->data;

        f = f->next;
        free(p);
        printf("popped element is %d\n", val);
        return val;
    }
}
void traverse()
{
    struct node *ptr = f;
    if (f == NULL && r == NULL)
    {
        printf("empty\n");
    }
    else
    {
        printf("printitng queue element:\n");
        while (ptr != NULL)
        {
            printf("%d->", ptr->data);
            ptr = ptr->next;
        }
        printf("NULL\n");
    }
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
            printf("Enter data :");
            scanf("%d", &val);
            push(val);
            break;

        case 2:

            pop();
            break;

        case 3:
            traverse();
            break;

        case 4:
            printf("exit");
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
Enter data :3
3 is pushed successfully in queue

Enter choice :1
Enter data :7
7 is pushed successfully in queue

Enter choice :1
Enter data :3
3 is pushed successfully in queue

Enter choice :1
Enter data :353
353 is pushed successfully in queue

Enter choice :3
printitng queue element:
3->7->3->353->NULL

Enter choice :2
popped element is 3

Enter choice :3
printitng queue element:
7->3->353->NULL

Enter choice :4
exit
PS C:\Sudhadocuments\DSA\DSA> 
*/