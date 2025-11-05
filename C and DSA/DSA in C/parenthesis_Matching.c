#include <stdio.h>
#include <stdlib.h>

// char expression[];//size necessary to give
/*
 warning: array 'expression' assumed to have one element
 char expression[];
      ^~~~~~~~~~
*/
char expression[50]; //

struct stack
{
    int top;
    int size;
    char *arr;
};

int push(struct stack *s, char bracket)
{

    if (s->top == (s->size - 1))
    {
        printf("stack overflow");
        return 0;
    }
    else
    {
        s->top++;
        s->arr[s->top] = bracket;
        printf("%c is pushed successfully \n", bracket);
        // printf("%c is pushed successfully \n", s->arr[s->top]);
        return s->top;//returning top is necessary otherwise it will start from default value of -1
    }
}

int pop(struct stack *s, char bracket)
{

    if (s->top == -1)
    {
        printf("stack underflow");
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
    printf("Element traversing %d :\n", s->top);
    for (int i = s->top; i >= 0; i--)
    {
        printf("%c \n", s->arr[i]);
    }
    printf("Element traversing done\n");
    return;
}

int main()
{
    printf("Enter the expression :");
    scanf("%s", &expression);
    printf("entered expression is :%s\n", expression);

    int lengthOfStr = sizeof(expression) / sizeof(expression[0]); // 50
    printf("lengthOfStr : %d\n", lengthOfStr);

    // for(int i=0;i<lengthOfStr;i++){

    /*
    //operators
    if(expression[i]=='+' || expression[i]=='-' ||expression[i]=='*' ||  expression[i]=='/'){
        printf("%c\n",expression[i]);//only print the symbols as per the condition
    }
*/
    /*
Enter the expression :2*6+6+2
entered expression is :2*6+6+2
lengthOfStr : 50
*
+
+
    */

    /*
    //brackets or parenthesis
           if(expression[i]=='{' || expression[i]=='}' || expression[i]=='(' || expression[i]==')' || expression[i]=='[' || expression[i]==']'){
            printf("%c\n",expression[i]);//only print brackets
           }
        }
        printf("\n");
    */

    struct stack *s; // define it inside not outside

    // s->size = 12; 
    s->size = lengthOfStr; 
    s->top = -1;

    s->arr = (char *)malloc(s->size * sizeof(char));

    // for (int i = 0; i < s->size; i++)
    for (int i = 0; expression[i] != '\0'; i++)//best way to use \0 
    {

//trying push pop seperately
/*
        if (expression[i] == '{' || expression[i] == '(' || expression[i] == '[')
        {
            printf("%c\n", expression[i]);
            s->top = push(s, expression[i]);
            traverse(s);
        }
        else if (expression[i] == '}' || expression[i] == ')' || expression[i] == ']')
        {
            // if(search(s,expression[i]))
            printf("%c\n", expression[i]);
            s->top = pop(s, expression[i]);
            traverse(s);
        }



        */


       
    //    parenthesis matching combined
        if (expression[i]=='{' || expression[i]=='}' || expression[i]=='(' || expression[i]==')' || expression[i]=='[' || expression[i]==']')
        {
            printf("%c\n", expression[i]);
            if(s->arr[s->top]=='{' && expression[i]=='}'){
                s->top = pop(s, expression[i]);
            traverse(s);
            }
            else if(s->arr[s->top]=='(' && expression[i]==')'){
                s->top = pop(s, expression[i]);
                traverse(s);
                }
            
            else if(s->arr[s->top]=='[' && expression[i]==']'){
                s->top = pop(s, expression[i]);
                traverse(s);
                }
            
           
            else{
            s->top = push(s, expression[i]);
            traverse(s);
            }
           
           
        }

        continue; // continue will let to continue the for loop i after push function
    }

    if(s->top == -1){
        printf("parenthesis matches");
    }
    else{
        printf("parenthesis do not match");
        }
    return 0;
}

/*Final output 
Enter the expression :({}[()])          
entered expression is :({}[()])
lengthOfStr : 50
(
( is pushed successfully
Element traversing 0 :
(
Element traversing done
{
{ is pushed successfully
Element traversing 1 :
{
(
Element traversing done
}
{ is popped successfully
Element traversing 0 :
(
Element traversing done
[
[ is pushed successfully
Element traversing 1 :
[
(
Element traversing done
(
( is pushed successfully
Element traversing 2 :
( 
[
(
Element traversing done
)
( is popped successfully
Element traversing 1 :
[
(
Element traversing done
]
[ is popped successfully
Element traversing 0 :
(
Element traversing done
)
( is popped successfully
Element traversing -1 :
Element traversing done
parenthesis matches
PS C:\Sudhadocuments\DSA\DSA> 
*/