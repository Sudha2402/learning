#include<stdio.h>
int main()
{
    int age,marks;
    printf("Enter the age\n");
    scanf("%d",&age);
    printf("Enter the marks\n");
    scanf("%d",&marks);
    //alt is used to place cursor at multiple place
    
    switch(age)
    {
        case 3:
           printf("The age is 3 \n");
           
           switch (marks)
           {
             case 45:
               printf("Your marks is 45\n");
               break;
           
             default:
               printf("Your marks is not 45\n");
               break;
           }
           
            break;   // ctrl+/ used to comment out a line
        case 13:
           printf("The age is 13 \n");
           break;
        case 23:
           printf("The age is 23\n");
           break;
        default:
        //printf("The age is not 3,13,23");     both the intendation is correct
           printf("The age is not 3,13,23"); 
           break;  //no need 
        
        
    }

}