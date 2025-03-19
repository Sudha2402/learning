#include <stdio.h>
#include <stdlib.h>

int choice, value;
// s.top//we can't make this struct stack inside top global in anyway, hence to affect globally , push must returns s.top

struct stack
{
    int size;
    int top;
    int *arr;
};

int isEmpty(struct stack *ptr)
{
    if (ptr->top == -1)
    {
        printf("Stack is empty\n");

        return 1;//there is no such logic that if return is not present in a function then it will not go int mains again, main will get execute the remaining codes after this function call... The only benefit of return is that it exit the function in between where it gets the return statement
    }
    else
    {
        printf("Stack is not empty\n");
        return 0;
    }
}

int isFull(struct stack *ptr)
{
    if (ptr->top == ptr->size - 1)
    {
        printf("Stack is Full\n");
        return 1;
    }
    else
    {
        printf("Stack is not Full\n");
        return 0;
    }
}

int push2(struct stack s) // take s1 as parameter
{
    if (isFull(&s))
    {
        printf("Stack Overflow\n");
        return -1;
    }
    else
    {
        s.top++;
        printf("Enter the element to push\n");
        scanf("%d", &value);
        s.arr[s.top] = value;
        printf("Element pushed successfully\n");

        return s.top;
    }
}

int push(struct stack *s) // take *s1 as parameter
{
    if (isFull(s))
    {
        printf("Stack Overflow\n");
    }
    else
    {
        s->top++;
        printf("Enter the element to push\n");
        scanf("%d", &s->arr[s->top]);
        // s->arr[s->top] = value;//value is directly taken in it
        printf("Element pushed successfully\n");
        // return s->arr[s->top]; //this was creating all the problem as value is 0 if not initialized , not according to value scsnf
        return s->top;
    }
}

int pop(struct stack s)
{
    if (isEmpty(&s))
    {
        printf("Stack Underflow\n");
    }
    else
    {
        int element = s.arr[s.top];
        s.top--;
        printf("Element %d popped successfully\n", element);
    }
    return s.top;
}


int peek(struct stack s,int position)//peek is used to find the value at given position from top, like 3element from top, etc
{
    if (isEmpty(&s))
    {
        printf("Stack Underflow\n");
    }
    else if(position>s.top+1){
        printf("Invalid position\n");
    }
    else
    {
        int element = s.arr[s.top-position+1];
        printf("Element %d at peek\n", element);

        /*
        stack elements from top to bottom , 8 is at top and 3 at bottom and 6 is at 2nd position from top
8
6
4
3

Element 6 at peek
        */
    }
    return s.top;
}

void traverse2(struct stack s) // this way also works , use pointer
{
    if (isEmpty(&s)) // as * not takes & for passing inside function parameter and s is not pointer here hence s is passed
    {
        printf("Stack is empty\n");

    }
    else
    {
        for (int i = s.top; i >= 0; i--)
        {
            printf("%d\n", s.arr[i]);
        }
    }
    return;
}

// void traverse(struct stack *s) // this way , it not works , use pointer
int traverse(struct stack *s)
{
    // if (isEmpty(&s))//as * not takes & for passing inside function parameter
    if (isEmpty(s)) // is empty takes address due to * but here s is itself a pointer hence adding & will give address of s not the value passed that is s1 , hence s is used as s  is also pinter and isEmpty takes pointer too
    {
        printf("Stack is empty\n");
    
    }
    else
    {
        for (int i = s->top; i >= 0; i--)
        {
            printf("%d\n", s->arr[i]);
        }
    }

    // return;
    /*if int  traverse declared
    StackArrayPointer.c:118:9: warning: 'return' with no value, in function returning non-void
         return ;
    */

    // return 0;
    // return 1;
    // return s->top;
    
}


int main()
{
    int returnCheck;
    struct stack s1;
    s1.size = 10;
    s1.top = -1;
    s1.arr = (int *)malloc(s1.size * sizeof(int));

    struct stack *s2;
    s2->size = 5;
    s2->top = -1;
    s2->arr = (int *)malloc(s2->size * sizeof(int));

    do
    {
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Peek\n");
        printf("4. Check if stack is empty\n");
        printf("5. Check if stack is full\n");
        printf("6. display\n");
        printf("7. Exit\n");

        printf("Enter choice : ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1: // either use this code in function push() or directly here

            /*
            if(s1.top == s1.size-1){
                printf("Stack is full\n");
                return 0;
            }
            else{
                s1.top++;
                printf("Enter the element to push\n");
                scanf("%d",&s1.arr[s1.top]);
                s1.arr[s1.top] = value;
                printf("Element pushed successfully\n");
            }
*/

            // ERROR
            //    s1->top = push(&s1);
            //  s1->arr[s1->top]=push(&s1);//error
            //  s1.arr[s1.top]=push(s1);

            // push(&s1); // OK

            s1.top = push2(s1); // OK
            break;

            /*here top is necessary to return otherwise it will not update globally as per only push2(s1);
Enter choice : 6
6
4
            */

        case 2:
            pop(s1);
            s1.top = pop(s1);
            break;

        case 3:
            peek(s1,2);//peek top 2nd element of stack
            break;

        case 4:
            // if (is_empty(s1))
            //     printf("Stack is empty\n");
            // else
            //     printf("Stack is not empty\n");

        //isEmpty(&s1);
        //  int returnCheckE=isEmpty(&s1);
         returnCheck=isEmpty(&s1);

          /*
          StackArrayPointer.c:204:10: error: a label can only be part of a statement and a declaration is not a statement
          int returnCheckE=isEmpty(&s1);
          */

            break;

        case 5:
            // if (is_full(s1))
            //     printf("Stack is full\n");
            // else
            //     printf("Stack is not full\n");
            // break;

            // isFull(&s1); // if break is not used then it will execute below statements and above statement or whatever to give abrupt result
        //   int returnCheckF=isFull(&s1); 
         

         returnCheck=isFull(&s1); 
            break;

        case 6:

            // traverse(s1);//error
            // traverse(&s1); // ok
           returnCheck= traverse(&s1); // ok
        //    s1.top= traverse(&s1); // ok
           

            // traverse2(s1); // ok not need to store the pointer as it is only traversing and value gets printed inside the traverse function directly
            /*
Enter choice : 6
1
3


            */
            break;

        case 7:
       
            return 0;
        }

    // } while (choice != 6);
     /*
    this while loop will terminate when choice 6 , it performs case 6 then exit
    */
    } while (choice != 7);
   

    return 0;
}
