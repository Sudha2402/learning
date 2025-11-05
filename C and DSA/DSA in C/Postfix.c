#include <stdio.h>
#include <stdlib.h>

// declaring global will help
char postfix[100];
int topElement = -1;

struct stack
{
    int size;
    int top;
    char *arr;
};

int push(struct stack *s, char bracket)
{

    if (s->top == (s->size - 1))
    {
        printf("stack overflow\n");
        return 0;
    }
    else
    {
        +s->top++;
        s->arr[s->top] = bracket;
        printf("%c is pushed successfully \n", bracket);
        // printf("%c is pushed successfully \n", s->arr[s->top]);
        return s->top; // returning top is necessary otherwise it will start from default value of -1
    }
}

int pop(struct stack *s)
{

    if (s->top == -1)
    {
        printf("stack underflow\n");
        return 0;
    }
    else
    {
        printf("%c is popped successfully \n", s->arr[s->top]);
        s->top--;

        return s->top;
    }
}

int search(struct stack *s, char bracket)
{
    int i;
    for (i = 0; i <= s->top; i++)
    {
        if (s->arr[i] == bracket)
        {
            return i;
        }
    }
    return -1; // not found
}

void traverse(struct stack *s)
{
    printf("stack traverse started :");

    for (int i = s->top; i >= 0; i--)
    {
        printf("%c \t", s->arr[i]);
    }
    printf("stack traversing done\n");
    return;
}

// void str_traverse(char str[]){
void str_traverse(char str[])
{
    printf("postfix traverse :");
    int i = 0;
    while (str[i] != '\0')
    {
        printf("%c \t", str[i]);
        i++;
    }
    printf("postfix traverse ends\n");
    return;
}

int parenthesis_match(struct stack *s,char expression[])
{
    //    parenthesis matching combined
   
    for (int i = 0; expression[i] != '\0'; i++)
    {

        if (expression[i] == '{' || expression[i] == '}' || expression[i] == '(' || expression[i] == ')' || expression[i] == '[' || expression[i] == ']')
        {

            printf("%c\n", expression[i]);
            if (s->arr[s->top] == '{' && expression[i] == '}')
            {
                s->top = pop(s);
                traverse(s);
            }
            else if (s->arr[s->top] == '(' && expression[i] == ')')
            {
                s->top = pop(s);
                traverse(s);
            }

            else if (s->arr[s->top] == '[' && expression[i] == ']')
            {
                s->top = pop(s);

                traverse(s);
            }

            else
            {
                s->top = push(s, expression[i]);
                traverse(s);
            }
        }
    }

    if (s->top == -1)
    {
        printf("parenthesis matches\n");
    }
    else
    {
        printf("parenthesis do not match\n");
    }

    return s->top;
}

int main()
{
    char expression[100];
    printf("Enter the expression :");
    scanf("%s", &expression);

    struct stack *s;

    // s->size = sizeof(expression) / sizeof(expression[0]);//haltshenced use it by putting in int declaration
    int lengthOfStr = sizeof(expression) / sizeof(expression[0]); // 50
    // printf("lengthOfStr : %d\n", lengthOfStr);
    s->size = lengthOfStr;

    s->top = -1;

    s->arr = (char *)malloc(s->size * sizeof(char));

    // check tis precedence assigning number
    //   int bracket_precedence=1;
    //   char brackets={},;

    // declare it globally to get afteted in each loop or iteration
    // char postfix[100];
    // int topElement = -1;

    //  parenthesis_match(s);//not works//expression[i] also need to be passed for for loop
     parenthesis_match(s,expression);//works//expression[i] also need to be passed for and for loop parenthesis matches

    for (int i = 0; expression[i] != '\0'; i++)
    {

        //   parenthesis_match(s);//not work as expression[i] will be undefined //need to run only once
        /*
         warning: implicit declaration of function 'parenthesis_match' [-Wimplicit-function-declaration]
           parenthesis_match(s);//need to run only once
        */

        if (expression[i] == '{' || expression[i] == '(' || expression[i] == '[')
        {
            s->top = push(s, expression[i]);
            traverse(s);
        }

        else if (expression[i] == '}' || expression[i] == ')' || expression[i] == ']')
        {

            while ((s->arr[s->top] != '{' && expression[i] == '}') || (s->arr[s->top] != '(' && expression[i] == ')') || (s->arr[s->top] != '[' && expression[i] == ']'))
            {

                topElement++;
                postfix[topElement] = s->arr[s->top];

                s->top = pop(s);

                traverse(s);

                str_traverse(postfix);
                // continue;
            }

            if (s->arr[s->top] == '{' || s->arr[s->top] == '(' || s->arr[s->top] == '[')
            {
                s->top = pop(s);

                traverse(s);
            }
        }

        else if (expression[i] == '*' || expression[i] == '/' || expression[i] == '%' || expression[i] == '+' || expression[i] == '-')
        {
            if ((expression[i] == '*' || expression[i] == '/' || expression[i] == '%') && (s->arr[s->top] == '+' || s->arr[s->top] == '-'))
            {
                s->top = push(s, expression[i]);
                traverse(s);
            }
            else if (s->top == -1)
            {
                s->top = push(s, expression[i]);
                traverse(s);
            }
            else
            {
                while (((expression[i] == '*' || expression[i] == '/' || expression[i] == '%') && (s->arr[s->top] == '*' || s->arr[s->top] == '/' || s->arr[s->top] == '%')) || ((expression[i] == '+' || expression[i] == '-') && (s->arr[s->top] == '+' || s->arr[s->top] == '-')) || ((expression[i] == '+' || expression[i] == '-') && (s->arr[s->top] == '*' || s->arr[s->top] == '/' || s->arr[s->top] == '%')))
                {
                    printf("\n\ninside while loop\n\n");

                    topElement++;
                    postfix[topElement] = s->arr[s->top];

                    s->top = pop(s);

                    traverse(s);

                    str_traverse(postfix);

                    continue;
                }

                s->top = push(s, expression[i]);
                traverse(s);
            }
        }
        else
        {
            topElement++;
            postfix[topElement] = expression[i];
            str_traverse(postfix);
        }

        continue;
    }

    while (s->top != -1 && (s->arr[s->top] == '+' || s->arr[s->top] == '-' || s->arr[s->top] == '*' || s->arr[s->top] == '/' || s->arr[s->top] == '%'))
    {
        topElement++;
        postfix[topElement] = s->arr[s->top];
        s->top = pop(s);
        traverse(s);
        str_traverse(postfix);
    }

    if (s->top == -1)
    {
        printf("parenthesis matches\n");
    }
    else
    {
        printf("parenthesis do not match\n");
    }
    return 0;
}

/*
Approach:

If the input character is an operand, print it.
If the input character is an operator-
If stack is empty push it to the stack.
If its precedence value is greater than the precedence value of the character on top, push.
If its precedence value is lower or equal then pop from stack and print while precedence of top char is more than the precedence value of the input character.
If the input character is ‘)’, then pop and print until top is ‘(‘. (Pop ‘(‘ but don’t print it.)
If stack becomes empty before encountering ‘(‘, then it’s a invalid expression.
Repeat steps 1-4 until input expression is completely read.
Pop the remaining elements from stack and print them.










// this is only implementation of postfix with no paranthesis

Enter the expression :1+4*6-9/9+2*4
postfix traverse :1     postfix traverse ends
+ is pushed successfully
stack traverse started :+       stack traversing done
postfix traverse :1     4       postfix traverse ends
* is pushed successfully
stack traverse started :*       +       stack traversing done
postfix traverse :1     4       6       postfix traverse ends


inside while loop

* is popped successfully
stack traverse started :+       stack traversing done
postfix traverse :1     4       6       *       postfix traverse ends


inside while loop

+ is popped successfully
stack traverse started :stack traversing done
postfix traverse :1     4       6       *       +       postfix traverse ends
- is pushed successfully
stack traverse started :-       stack traversing done
postfix traverse :1     4       6       *       +       9       postfix traverse ends
/ is pushed successfully
stack traverse started :/       -       stack traversing done
postfix traverse :1     4       6       *       +       9       9       postfix traverse ends


inside while loop

/ is popped successfully
stack traverse started :-       stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       postfix traverse ends


inside while loop

- is popped successfully
stack traverse started :stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       -       postfix traverse ends
+ is pushed successfully
stack traverse started :+       stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       -       2       postfix traverse ends
* is pushed successfully
stack traverse started :*       +       stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       -       2       4       postfix traverse ends
* is popped successfully
stack traverse started :+       stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       -       2       4       *       postfix traverse ends
+ is popped successfully
stack traverse started :stack traversing done
postfix traverse :1     4       6       *       +       9       9       /       -       2       4       *       +       postfix traverse ends
parenthesis matches
PS C:\Sudhadocuments\DSA\DSA>














// with parenthesis but it shows error from bracket onwards at start then we implemented to pop when ) is encountered 
// Note that postfix expression do not contain brackets

Input: str = “a+b*c-(d/e+f*g*h)”  //it requires the search for innermost parenthesis first then postfix for that
Output postfix: abc*+de/fg*h*+-

Enter the expression :a+b*c-(d/e+f*g*h) 
(
( is pushed successfully
stack traverse started :(       stack traversing done
)
( is popped successfully
stack traverse started :stack traversing done
parenthesis matches
postfix traverse :a     postfix traverse ends
+ is pushed successfully
stack traverse started :+       stack traversing done
postfix traverse :a     b       postfix traverse ends
* is pushed successfully
stack traverse started :*       +       stack traversing done
postfix traverse :a     b       c       postfix traverse ends


inside while loop

* is popped successfully
stack traverse started :+       stack traversing done
postfix traverse :a     b       c       *       postfix traverse ends


inside while loop

+ is popped successfully
stack traverse started :stack traversing done
postfix traverse :a     b       c       *       +       postfix traverse ends
- is pushed successfully
stack traverse started :-       stack traversing done
( is pushed successfully
stack traverse started :(       -       stack traversing done
postfix traverse :a     b       c       *       +       d       postfix traverse ends
/ is pushed successfully
stack traverse started :/       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       postfix traverse ends


inside while loop

/ is popped successfully
stack traverse started :(       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       postfix traverse ends
+ is pushed successfully
stack traverse started :+       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       postfix traverse ends
* is pushed successfully
stack traverse started :*       +       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       postfix traverse ends


inside while loop

* is popped successfully
stack traverse started :+       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       *       postfix traverse ends
* is pushed successfully
stack traverse started :*       +       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       *       h       postfix traverse ends
* is popped successfully
stack traverse started :+       (       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       *       h       *       postfix traverse ends       
+ is popped successfully
stack traverse started :(       -       stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       *       h       *       +       postfix traverse ends
( is popped successfully
stack traverse started :-       stack traversing done
- is popped successfully
stack traverse started :stack traversing done
postfix traverse :a     b       c       *       +       d       e       /       f       g       *       h       *       +       -       postfix traverse ends
parenthesis matches
PS C:\Sudhadocuments\DSA\DSA> 

*/
