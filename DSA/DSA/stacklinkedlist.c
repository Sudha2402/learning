#include <stdio.h>
#include <stdlib.h>
int top = -1, val, choice;
// top is useful to maintain for peek operation even though linkedlist has no size limit
struct node
{
    int data;
    struct node *next;
    int top;
};
struct node *head = NULL; // to let it be updated by push , pop function globally

void push(int val) // we are creating stack using linkedlist such that head element of linkedlist is top element of stack, hence it is insertion at start of linkedlist is used for push //it removes the extra time complexity and space due to extra pointer to reach the end of linkedlist //linked list has no maximum limit like size
{
    struct node *S = NULL;
    // struct node *S = (struct node *)malloc(sizeof(struct node));
    S = (struct node *)malloc(sizeof(struct node));

    if (S == NULL)
    {
        printf("memory not created");
    }
    else
    {

        S->data = val;
        S->next = head;
        head = S;
        top = top + 1;
    }
}

int pop()
{
    if (head == NULL)
    {
        printf("empty");
    }
    else
    {
        val = head->data;
        struct node *p = head;

        head = head->next;
        free(p);
        printf("element %d is popped successfully \n",val);
        return val;
    }
}


// void peek(struct node *head,int position){//here head is not neccessary to declare in parmeters as head is declared global;ly hence need not to pass head
void peek(int position)
{
    struct node *p = head;

    if ((position - 1) > top)
    {
        printf("position is out of bound\n");
        return; // neccesary to return otherwise it will terminate the program without asking for next choice
    }
    else
    {
        int i = 1;
        while (i != (position))
        {
            p = p->next;
            i++;
        }
        printf("the element present at %d position is %d\n", position, p->data);
    }
    return;
}
void traverse()
{
    struct node *ptr = head;
    while (ptr != NULL)
    {
        printf("%d->", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\n");
}

/*int main(){
    push(20);
    traverse();
}*/
int main()
{
    printf(" 1.push\n 2.pop \n 3.peek \n 4.traverse \n 5.Exit\n");
    do
    {
        printf("Enter choice :");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            // int val;//val can't be declared in label.//declare at top
            printf("Enter the element to push in stack :");
            scanf("%d", &val);
            push(val);
            break;

        case 2:
            pop();
            break;

        case 3:
            // peek(head,3);
            peek(3);
            peek(2);
            break;
        case 4:
            traverse();
            break;

        case 5:

            break;

        default:
            printf("Enter a valid chaice");

            break;
        }

    } while (choice != 5);

    return 0;
}
